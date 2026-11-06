import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, moreProjects } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products, platforms and systems designed and engineered by Mark Maingi across education, property, fintech, sport and insurance.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="wrap pb-12 pt-12 md:pb-16 md:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white/60">Work</span>
          </nav>

          <p className="eyebrow mt-10">01 — Archive</p>
          <h1 className="serif-display mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] text-white">
            Products, platforms and{" "}
            <span className="italic text-white/55">systems.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/55 md:text-base">
            Twenty-plus builds across five sectors. Six are written up as case
            studies; the rest are live products and brand experiences you can
            open and use.
          </p>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="wrap py-16 md:py-24">
          <h2 className="eyebrow-dark">Case studies</h2>
          <div className="mt-8 border-t border-ink/15">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group grid gap-6 border-b border-ink/15 py-8 md:grid-cols-12 md:items-center md:gap-8"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] text-ink/35">
                    {study.index}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <p className="eyebrow-dark">{study.category}</p>
                  <h3 className="serif-display mt-2 text-[clamp(1.6rem,3vw,2.25rem)] leading-tight">
                    {study.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-ink/60">
                    {study.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/65">
                    Read case study
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </div>
                <div className="md:col-span-5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 ring-1 ring-ink/10">
                    <Image
                      src={study.image}
                      alt={`${study.name} — ${study.category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">02 — Index</p>
              <h2 className="serif-display mt-4 text-[clamp(1.9rem,4vw,3rem)] text-white">
                More work
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Additional platforms, products and brand experiences built or
              contributed to. Each link opens the live product.
            </p>
          </div>

          <ul className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project) => (
              <li key={project.name} className="bg-ink">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-ink-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
                      {project.category}
                    </p>
                    <span
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">
                    {project.summary}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
