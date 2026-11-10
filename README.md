# Mark Maingi — Portfolio

A professional portfolio and résumé site for Mark Maingi: software engineer, systems designer and product builder. Built with Next.js 14 (App Router), React 18, Tailwind CSS and TypeScript, with no client-side animation library.

## Positioning

The site presents one multidisciplinary practice across the technology lifecycle — software engineering, systems design, product engineering, technical leadership, UI/UX, applied AI and technical growth. AI is treated as a specialisation inside that practice, not as the whole identity.

## Routes

| Route | Description |
| --- | --- |
| `/` | Hero, selected work, practice areas, experience, profile, concept lab, contact |
| `/work` | Full archive: six written case studies plus fifteen live products |
| `/work/[slug]` | Case study pages generated from `content/work.ts` |
| `/resume` | Print-ready résumé with a PDF download |
| `/sitemap.xml`, `/robots.txt` | Generated from `app/sitemap.ts` and `app/robots.ts` |

## Structure

```text
app/
  layout.tsx             Fonts, metadata, structured data, header and footer
  page.tsx               Home composition
  globals.css            Design tokens, utilities, reveal animation, print styles
  work/                  Archive and dynamic case study routes
  resume/page.tsx        Résumé route
  sitemap.ts, robots.ts  SEO infrastructure
  not-found.tsx          404 route

components/
  site/                  Header and footer
  home/                  Home page sections
  ui/                    Reveal wrapper and section heading

content/
  site.ts                Identity, positioning, practice areas, experience, profile
  work.ts                Case studies, project archive, homepage featured selection
  resume.ts              CV dossier content, written per application

scripts/
  export-cv.mjs          Exports the CV content to .cv-build/resume.json
  build-cv-docx.py       Builds the Word version from that JSON

public/
  *.png / *.jpeg         Project and profile imagery
  Mark Maingi CV.pdf     Résumé download
  og.png                 Social share card
```

## Content workflow

- **Positioning, capabilities, experience, education, concept lab:** `content/site.ts`
- **Case studies and the project archive:** `content/work.ts` — adding an entry with `featured: true` adds it to the homepage, the archive, the résumé and the sitemap, and generates its route.
- **CV:** `content/resume.ts` holds the whole CV — profile, what I do, selected work, experience, skills and the record. `/resume` renders it, and the PDF and Word files are built from the same content, so there is one place to edit.
- **Imagery and CV:** replace files in `public/`. Keep the photo at `Mark.jpeg` and project images at the paths referenced in `content/work.ts`.

## Rebuilding the CV

The readable source is `content/resume.ts`. After editing it:

```bash
# 1. Regenerate the print-ready PDF from the live /resume route
npm run build && npm run start
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/Mark Maingi CV.pdf" http://localhost:3000/resume

# 2. Regenerate the Word version
node scripts/export-cv.mjs
python scripts/build-cv-docx.py .cv-build/resume.json "public/Mark Maingi CV.docx"
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` in the deployment environment to the canonical production origin so metadata, canonical URLs and the sitemap resolve correctly. It falls back to the existing Vercel URL.

## Accessibility and performance

- Semantic landmarks, skip link, visible focus states and labelled navigation.
- Motion is progressive: content renders server-side and scroll reveals are skipped under `prefers-reduced-motion`.
- The previous full-screen intro gate and custom cursor were removed so the page content is available on first paint and to crawlers.
- Case study video embeds load lazily; images use `next/image` with explicit sizes.
- Print styles reduce the résumé to a clean black-on-white document.

## Deployment

Any host that supports Next.js 14 works:

```bash
npm run build
npm run start
```
