import type { Metadata } from "next";
import Link from "next/link";
import {
  certifications,
  education,
  experience,
  practiceAreas,
  profile,
  site,
  toolbelt,
} from "@/content/site";
import { featuredWork } from "@/content/work";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé for Mark Maingi — software engineer, systems designer and product builder. Experience across education technology, property, fintech, logistics and sport.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 md:py-20">
        <header className="print-block border-b border-ink/20 pb-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="serif-display text-[clamp(2.6rem,6vw,4rem)] leading-[0.95]">
                Mark Maingi
              </h1>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 sm:text-[11px]">
                Software Engineer · Systems Thinker · Product Builder
              </p>
            </div>
            <div className="flex flex-wrap gap-2 no-print">
              <a href={site.cv} className="btn-primary">
                Download PDF
                <span aria-hidden="true">↓</span>
              </a>
              <Link href="/" className="btn-ghost-dark">
                Portfolio
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-ink/60">
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
            <a href={site.phoneHref} className="hover:text-ink">
              {site.phone}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub ↗
            </a>
            <span>{site.location}</span>
          </div>
        </header>

        <section className="print-block mt-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            Summary
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-ink/70">
            Software engineer with a computer science foundation and four years
            of production experience across product engineering, systems design
            and full-stack delivery. I work across the technology lifecycle —
            problem framing, architecture, interface engineering, build and
            technical growth — for products in education, property, fintech,
            insurance and sport. Currently founder and lead developer at
            Learnwise Technologies.
          </p>
        </section>

        <section className="print-block mt-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            Core capabilities
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <div key={area.id}>
                <h3 className="text-[14px] font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink/55">
                  {area.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-ink/10 pt-4 font-mono text-[10.5px] leading-relaxed text-ink/50">
            {toolbelt
              .map((group) => `${group.label}: ${group.items.join(", ")}`)
              .join("  |  ")}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            Experience
          </h2>
          <div className="mt-5">
            {experience.map((role) => (
              <article
                key={`${role.company}-${role.period}`}
                className="print-block grid gap-2 border-t border-ink/15 py-6 md:grid-cols-[170px_1fr] md:gap-8"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
                    {role.period}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl leading-snug text-ink">
                    {role.role} — {role.company}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/65">
                    {role.description}
                  </p>
                  {role.links ? (
                    <p className="mt-2 font-mono text-[10px] text-ink/45">
                      {role.links.map((link) => link.label).join(" · ")}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            Selected projects
          </h2>
          <div className="mt-5">
            {featuredWork.map((study) => (
              <article
                key={study.slug}
                className="print-block grid gap-2 border-t border-ink/15 py-5 md:grid-cols-[170px_1fr] md:gap-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
                  {study.category}
                </p>
                <div>
                  <h3 className="font-serif text-lg text-ink">
                    {study.name}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink/60">
                    {study.summary}
                  </p>
                  <p className="mt-1.5 text-[12.5px] text-ink/45">
                    {study.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <section className="print-block">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
              Education
            </h2>
            <div className="mt-4 border-t border-ink/15 pt-4">
              <h3 className="text-[15px] font-semibold text-ink">
                {education.school}
              </h3>
              <p className="mt-1 text-[13.5px] text-ink/60">
                {education.program}
              </p>
              <p className="mt-1 text-[13px] text-ink/45">{education.detail}</p>
            </div>
          </section>

          <section className="print-block">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
              Certifications
            </h2>
            <div className="mt-4 space-y-4 border-t border-ink/15 pt-4">
              {certifications.map((group) => (
                <div key={group.title}>
                  <h3 className="text-[13.5px] font-semibold text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink/55">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="print-block mt-12 border-t border-ink/15 pt-6">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            Profile
          </h2>
          <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-ink/60">
            {profile.paragraphs[0]}
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">
            {profile.interests.join(" · ")}
          </p>
        </section>

        <p className="mt-10 border-t border-ink/15 pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35 no-print">
          Print this page for a paper copy, or download the PDF above.
        </p>
      </div>
    </div>
  );
}
