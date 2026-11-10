import type { Metadata } from "next";
import Link from "next/link";
import { cv } from "@/content/resume";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "CV — Mark Maingi",
  description:
    "Mark Maingi — software engineer and technical founder. Four years building production systems end to end across pensions, insurance, property, education and logistics.",
  alternates: { canonical: "/resume" },
};

const labelClass =
  "font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/50";

function Section({
  index,
  label,
  title,
  note,
  children,
}: {
  index: string;
  label: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-9 border-t border-ink/20 pt-5 md:mt-11 md:pt-6">
      <div className="cv-head">
        <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-clay">
          {index} — {label}
        </p>
        <h2 className="serif-display mt-2.5 text-[1.6rem] leading-[1.12] text-ink md:text-[1.8rem]">
          {title}
        </h2>
        {note ? (
          <p className="mt-2 max-w-[64ch] text-[12.5px] leading-relaxed text-ink/55">
            {note}
          </p>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="bg-paper text-ink">
      <div className="cv-screen border-b border-ink/15 bg-paper-deep/60">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/45">
            {cv.profile.toolbar}
          </p>
          <div className="flex items-center gap-2">
            <a href={site.cv} className="btn-primary !px-4 !py-2 !text-[10px]">
              Download PDF
              <span aria-hidden="true">↓</span>
            </a>
            <Link href="/" className="btn-ghost-dark !px-4 !py-2 !text-[10px]">
              Portfolio
            </Link>
          </div>
        </div>
      </div>

      <article className="cv-doc mx-auto w-full max-w-4xl px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-14">
        <header className="cv-avoid">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-clay">
            {cv.profile.kicker}
          </p>

          <h1 className="serif-display mt-5 text-[clamp(2.9rem,7.4vw,4.8rem)] leading-[0.88] text-ink">
            {cv.name}
          </h1>

          <p className="mt-5 max-w-[62ch] text-[14.5px] leading-[1.65] text-ink/70">
            {cv.title}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-ink/15 py-2.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink/55">
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
            <span className="text-ink/20" aria-hidden="true">
              /
            </span>
            <a href={site.phoneHref} className="hover:text-ink">
              {site.phone}
            </a>
            <span className="text-ink/20" aria-hidden="true">
              /
            </span>
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
            <a href={site.url} className="hover:text-ink">
              Portfolio ↗
            </a>
          </div>

          <dl className="cv-duo mt-4">
            {cv.profile.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-1"
              >
                <dt className={labelClass}>{fact.label}</dt>
                <dd className="text-right font-mono text-[10px] tracking-[0.03em] text-ink/65">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="cv-panel cv-avoid mt-8 border border-ink/15 bg-paper-deep/50 px-5 py-5">
          <p className={labelClass}>Profile</p>
          <div className="mt-2.5 space-y-3">
            {cv.summary.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[13.5px] leading-[1.72] text-ink/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <Section
          index="01"
          label="Focus"
          title={cv.strengthsHeading}
          note={cv.strengthsNote}
        >
          <dl>
            {cv.strengths.map((row, position) => (
              <div
                key={row.title}
                className="cv-avoid border-t border-ink/10 py-3 first:border-t-0 first:pt-0"
              >
                <dt className="flex gap-2.5 text-[13.5px] font-semibold leading-snug text-ink">
                  <span className="shrink-0 font-mono text-[9px] font-normal leading-[2] text-clay/70">
                    {String(position + 1).padStart(2, "0")}
                  </span>
                  {row.title}
                </dt>
                <dd className="mt-1 pl-[22px] text-[12.5px] leading-[1.6] text-ink/65">
                  {row.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section index="02" label="Work" title={cv.workHeading} note={cv.workNote}>
          <div>
            {cv.work.map((item) => (
              <article
                key={item.name}
                className="cv-avoid border-t border-ink/10 py-4 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-ink">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-clay"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">
                    {item.role} · {item.period}
                  </p>
                </div>

                <div className="mt-2 space-y-1.5">
                  {[
                    { term: "Problem", detail: item.problem },
                    { term: "Approach", detail: item.approach },
                    { term: "Outcome", detail: item.outcome },
                  ].map((row) => (
                    <p
                      key={row.term}
                      className="text-[12.5px] leading-[1.65] text-ink/65"
                    >
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/50">
                        {row.term} —{" "}
                      </span>
                      {row.detail}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section index="03" label="Record" title={cv.experienceHeading}>
          <ol>
            {cv.experience.map((role) => (
              <li
                key={`${role.company}-${role.period}`}
                className="cv-avoid border-t border-ink/10 py-3 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className="text-[13px] leading-snug text-ink">
                    <span className="font-semibold">{role.role}</span>
                    <span className="text-ink/35"> · </span>
                    {role.company}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.1em] tabular-nums text-ink/40">
                    {role.period}
                    {role.current ? (
                      <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-clay align-middle" />
                    ) : null}
                  </p>
                </div>
                <p className="mt-1 text-[12.5px] leading-[1.6] text-ink/68">
                  {role.summary}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section index="04" label="Skills" title={cv.skillsHeading}>
          <dl className="cv-duo gap-y-3.5">
            {cv.skills.map((group) => (
              <div key={group.label} className="cv-avoid">
                <dt className={labelClass}>{group.label}</dt>
                <dd className="mt-1 text-[12.5px] leading-[1.6] text-ink/70">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section index="05" label="Foundation" title="Education and certification">
          <div className="cv-duo">
            <div className="cv-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[13.5px] font-semibold text-ink">
                  {cv.education.school}
                </h3>
                <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40">
                  {cv.education.period}
                </p>
              </div>
              <p className="mt-1 text-[12.5px] text-ink/65">{cv.education.program}</p>
              <p className="mt-0.5 text-[12px] text-ink/45">{cv.education.detail}</p>
            </div>

            <div className="space-y-3">
              {cv.certifications.map((group) => (
                <div key={group.title} className="cv-avoid">
                  <p className={labelClass}>{group.title}</p>
                  <p className="mt-1 text-[12px] leading-[1.7] text-ink/65">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section index="06" label="Earlier" title={cv.earlierHeading}>
          <dl>
            {cv.earlier.map((entry) => (
              <div
                key={entry.period}
                className="cv-avoid border-t border-ink/10 py-3 first:border-t-0 first:pt-0"
              >
                <dt className="font-mono text-[9px] uppercase tracking-[0.1em] tabular-nums text-ink/40">
                  {entry.period}
                </dt>
                <dd className="mt-1 text-[12.5px] leading-[1.65] text-ink/65">
                  {entry.text}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <section className="cv-avoid mt-7 border-t border-ink/20 pt-4">
          <dl className="cv-duo cv-details gap-y-2">
            {cv.details.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-1"
              >
                <dt className={labelClass}>{item.label}</dt>
                <dd className="text-right text-[12px] text-ink/70">{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 max-w-[70ch] font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-ink/35">
            {cv.footerNote}
          </p>
        </section>
      </article>
    </div>
  );
}
