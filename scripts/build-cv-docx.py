"""Builds the Word version of the CV from the exported content JSON.

Kept deliberately plain: single column, literal bullets, real paragraph styles,
right-aligned dates on tab stops. That is what applicant tracking systems read
correctly, and it keeps the .docx consistent with the PDF and /resume route.

Usage:
    python scripts/build-cv-docx.py .cv-build/resume.json "public/Mark Maingi CV.docx"
"""

from __future__ import annotations

import json
import sys
import zipfile
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

# A4 in twips, 15 mm margins.
PAGE_W = 11906
MARGIN = 850
CONTENT_W = PAGE_W - 2 * MARGIN

INK = "1A1712"
MUTED = "55503F"
FAINT = "7A7361"
RULE = "C9C2B0"
BODY_FONT = "Calibri"

# Sizes are half-points.
BODY = 19  # 9.5 pt


def run(text: str, *, size: int = BODY, bold: bool = False, color: str = INK,
        italic: bool = False, caps_spacing: int | None = None) -> str:
    props = [f'<w:rFonts w:ascii="{BODY_FONT}" w:hAnsi="{BODY_FONT}" w:cs="{BODY_FONT}"/>']
    if bold:
        props.append("<w:b/>")
    if italic:
        props.append("<w:i/>")
    if caps_spacing is not None:
        props.append(f'<w:spacing w:val="{caps_spacing}"/>')
    props.append(f'<w:sz w:val="{size}"/><w:szCs w:val="{size}"/>')
    props.append(f'<w:color w:val="{color}"/>')
    return f'<w:r><w:rPr>{"".join(props)}</w:rPr><w:t xml:space="preserve">{escape(text)}</w:t></w:r>'


def tab() -> str:
    return f'<w:r><w:rPr><w:rFonts w:ascii="{BODY_FONT}" w:hAnsi="{BODY_FONT}"/></w:rPr><w:tab/></w:r>'


def para(
    runs: list[str] | str,
    *,
    size: int = BODY,
    bold: bool = False,
    color: str = INK,
    before: int = 0,
    after: int = 60,
    line: int = 250,
    right_tab: bool = False,
    indent: int | None = None,
    hanging: int | None = None,
    border: bool = False,
    keep_next: bool = False,
) -> str:
    body = runs if isinstance(runs, str) else "".join(runs)
    props: list[str] = []
    if keep_next:
        props.append("<w:keepNext/>")
    props.append(
        f'<w:spacing w:before="{before}" w:after="{after}" w:line="{line}" w:lineRule="auto"/>'
    )
    if indent is not None:
        hanging_attr = f' w:hanging="{hanging}"' if hanging else ""
        props.append(f'<w:ind w:left="{indent}"{hanging_attr}/>')
    if right_tab:
        props.append(f'<w:tabs><w:tab w:val="right" w:pos="{CONTENT_W}"/></w:tabs>')
    if border:
        props.append(
            f'<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="3" w:color="{RULE}"/></w:pBdr>'
        )
    if not body:
        body = run("", size=size, color=color)
    return f"<w:p><w:pPr>{''.join(props)}</w:pPr>{body}</w:p>"


def bullet(text_runs: list[str], *, after: int = 40) -> str:
    return para(
        [run("•", color=FAINT)] + [tab()] + text_runs,
        after=after,
        indent=250,
        hanging=250,
    )


def section_heading(number: str, title: str) -> str:
    return para(
        [run(f"{number}  ", size=17, color=FAINT, bold=True,
             caps_spacing=20),
         run(title.upper(), size=17, color=INK, bold=True, caps_spacing=20)],
        before=260,
        after=110,
        border=True,
        keep_next=True,
    )


def labelled(label: str, text: str) -> str:
    return para([run(f"{label}  ", size=15, bold=True, color=FAINT),
                 run(text, color=MUTED)])


def entry_header(left_runs: list[str], right: str) -> str:
    return para(left_runs + [tab(), run(right, size=15, color=FAINT)],
                before=90, after=20, right_tab=True, keep_next=True)


def build(cv: dict) -> str:
    out: list[str] = []

    # --- masthead -----------------------------------------------------------
    out.append(para(run(cv["profile"]["kicker"].upper(), size=16,
                        color="8F4720", bold=True, caps_spacing=30), after=90))
    out.append(para(run(cv["name"], size=44, color=INK), after=40, line=240))
    out.append(para(run(cv["title"], color=MUTED), after=120))

    contact = "  ·  ".join([
        "manlikemaingi@gmail.com",
        "+254 112 246 573",
        "Nairobi, Kenya",
        "linkedin.com/in/muema-mark-maingi",
        "github.com/MaingiMuema",
    ])
    out.append(para(run(contact, size=15, color=FAINT), after=60, border=True))

    # --- profile ------------------------------------------------------------
    out.append(section_heading("00", "Profile"))
    for paragraph in cv["summary"]:
        out.append(para(run(paragraph, color=MUTED), after=70))

    # --- focus --------------------------------------------------------------
    out.append(section_heading("01", cv["strengthsHeading"]))
    for index, row in enumerate(cv["strengths"], start=1):
        out.append(para([run(f"{index:02d}  ", size=15, color=FAINT, bold=True),
                         run(row["title"], size=19, bold=True)], after=30,
                        keep_next=True))
        out.append(para(run(row["detail"], color=MUTED), after=90, indent=250))

    # --- selected work ------------------------------------------------------
    out.append(section_heading("02", cv["workHeading"]))
    for item in cv["work"]:
        out.append(entry_header(
            [run(item["name"], size=20, bold=True),
             run(f"  —  {item['role']}", size=16, color=FAINT)],
            item["period"],
        ))
        for term, key in (("Problem", "problem"), ("Approach", "approach"),
                          ("Outcome", "outcome")):
            out.append(bullet([run(f"{term} — ", size=17, bold=True, color=INK),
                               run(item[key], color=MUTED)]))

    # --- experience ---------------------------------------------------------
    out.append(section_heading("03", cv["experienceHeading"]))
    for role in cv["experience"]:
        out.append(entry_header(
            [run(role["role"], size=19, bold=True),
             run(f"  ·  {role['company']}", color=MUTED)],
            role["period"],
        ))
        out.append(para(run(role["summary"], color=MUTED), after=90, indent=250))

    # --- skills -------------------------------------------------------------
    out.append(section_heading("04", cv["skillsHeading"]))
    for group in cv["skills"]:
        out.append(labelled(f"{group['label']}:", " · ".join(group["items"])))

    # --- education ----------------------------------------------------------
    out.append(section_heading("05", "Education and certification"))
    out.append(entry_header(
        [run(cv["education"]["school"], size=19, bold=True),
         run(f"  —  {cv['education']['program']}", color=MUTED)],
        cv["education"]["period"],
    ))
    out.append(para(run(cv["education"]["detail"], size=16, color=FAINT), after=90))
    for group in cv["certifications"]:
        out.append(labelled(f"{group['title']}:", " · ".join(group["items"])))

    # --- earlier ------------------------------------------------------------
    out.append(section_heading("06", cv["earlierHeading"]))
    for entry in cv["earlier"]:
        out.append(para([run(f"{entry['period']}  ", size=16, bold=True, color=FAINT),
                         run(entry["text"], color=MUTED)], after=70))

    # --- details ------------------------------------------------------------
    out.append(para(
        run("  ·  ".join(f"{i['label']}: {i['value']}" for i in cv["details"]),
            size=16, color=FAINT),
        before=260, after=40, border=True,
    ))
    out.append(para(run(cv["footerNote"], size=14, color=FAINT, italic=True), after=0))

    body = "".join(out)
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
        f"<w:body>{body}"
        f'<w:sectPr><w:pgSz w:w="{PAGE_W}" w:h="16838"/>'
        f'<w:pgMar w:top="{MARGIN}" w:right="{MARGIN}" w:bottom="{MARGIN}" '
        f'w:left="{MARGIN}" w:header="0" w:footer="0" w:gutter="0"/>'
        "</w:sectPr></w:body></w:document>"
    )


CONTENT_TYPES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>"""

ROOT_RELS = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>"""

DOC_RELS = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>"""

STYLES = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults>
<w:rPrDefault><w:rPr>
<w:rFonts w:ascii="{BODY_FONT}" w:hAnsi="{BODY_FONT}" w:cs="{BODY_FONT}"/>
<w:sz w:val="{BODY}"/><w:szCs w:val="{BODY}"/><w:color w:val="{INK}"/>
</w:rPr></w:rPrDefault>
<w:pPrDefault><w:pPr><w:spacing w:after="60" w:line="250" w:lineRule="auto"/></w:pPr></w:pPrDefault>
</w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
</w:styles>"""

APP = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
<Application>Mark Maingi portfolio</Application>
</Properties>"""


def core_xml(name: str) -> str:
    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<cp:coreProperties '
        'xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" '
        'xmlns:dc="http://purl.org/dc/elements/1.1/" '
        'xmlns:dcterms="http://purl.org/dc/terms/" '
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
        f"<dc:title>{escape(name)} — CV</dc:title>"
        f"<dc:creator>{escape(name)}</dc:creator>"
        f"<cp:lastModifiedBy>{escape(name)}</cp:lastModifiedBy>"
        f'<dcterms:created xsi:type="dcterms:W3CDTF">{stamp}</dcterms:created>'
        f'<dcterms:modified xsi:type="dcterms:W3CDTF">{stamp}</dcterms:modified>'
        "</cp:coreProperties>"
    )


def _strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for item in value.values():
            yield from _strings(item)
    elif isinstance(value, list):
        for item in value:
            yield from _strings(item)


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2

    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    cv = json.loads(source.read_text(encoding="utf-8"))

    target.parent.mkdir(parents=True, exist_ok=True)
    document = build(cv)

    with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("[Content_Types].xml", CONTENT_TYPES)
        archive.writestr("_rels/.rels", ROOT_RELS)
        archive.writestr("word/document.xml", document)
        archive.writestr("word/_rels/document.xml.rels", DOC_RELS)
        archive.writestr("word/styles.xml", STYLES)
        archive.writestr("docProps/core.xml", core_xml(cv["name"]))
        archive.writestr("docProps/app.xml", APP)

    print(f"Wrote {target} ({target.stat().st_size} bytes)")
    print(f"Words in source: {sum(len(s.split()) for s in _strings(cv))}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
