import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/work";
import { site } from "@/content/site";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case study not found" };

  return {
    title: `${study.name} — ${study.category}`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      title: `${study.name} — Mark Maingi`,
      description: study.summary,
      url: `/work/${study.slug}`,
      images: [{ url: study.image, alt: `${study.name} — ${study.category}` }],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const liveLink = study.link ?? study.links?.[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.name,
    headline: study.title,
    description: study.summary,
    url: `${site.url}/work/${study.slug}`,
    image: `${site.url}${study.image}`,
    creator: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    about: study.category,
    keywords: study.scope.join(", "),
  };

  return (
    <article>
      <header className="border-b border-white/10">
        <div className="wrap pb-12 pt-10 md:pb-16 md:pt-14">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-3 text-white/20">/</span>
            <Link href="/work" className="transition-colors hover:text-white">
              Work
            </Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white/60">{study.name}</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">
                {study.index} — {study.category}
              </p>
              <h1 className="serif-display mt-5 text-[clamp(2.3rem,5.6vw,4.4rem)] leading-[1] text-white">
                {study.title}
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/55 md:text-base">
                {study.summary}
              </p>
            </div>

            <dl className="self-end border-t border-white/10 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-8">
              <div className="border-b border-white/10 py-4 first:pt-0">
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  Role
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-white/75">
                  {study.role}
                </dd>
              </div>
              <div className="border-b border-white/10 py-4">
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  Engagement
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-white/75">
                  {study.engagement}
                </dd>
              </div>
              <div className="py-4">
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  Live {study.links ? "sites" : "site"}
                </dt>
                <dd className="mt-1.5 space-y-1">
                  {(study.links ?? (study.link ? [study.link] : [])).map(
                    (link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-white/75 underline decoration-white/20 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
                      >
                        {link.label} ↗
                      </a>
                    ),
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="wrap">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-ink-soft">
            <Image
              src={study.image}
              alt={`${study.name} — ${study.category}`}
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="h-10 md:h-14" />
      </header>

      <div className="bg-paper text-ink">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                Scope
              </p>
              <ul className="mt-4 space-y-2 border-t border-ink/15 pt-4 text-[13.5px] text-ink/65">
                {study.scope.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-[8px] h-px w-3 shrink-0 bg-ink/30" />
                    {item}
                  </li>
                ))}
              </ul>

              {liveLink ? (
                <a
                  href={liveLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark mt-8 w-full"
                >
                  Visit live site
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="space-y-12 md:space-y-16">
              {study.sections.map((section) => (
                <section key={section.title}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                    {section.label}
                  </p>
                  <h2 className="serif-display mt-3 text-[clamp(1.6rem,3vw,2.15rem)] leading-tight text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="max-w-2xl text-[15px] leading-[1.85] text-ink/65"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-16 border-t border-ink/15 pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                Outcome
              </p>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {study.outcomes.map((outcome, outcomeIndex) => (
                  <li key={outcome} className="flex gap-4">
                    <span className="font-mono text-[10px] text-ink/35">
                      {String(outcomeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-ink/75">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <nav aria-label="Next case study" className="border-t border-white/10">
        <Link
          href={`/work/${next.slug}`}
          className="group block px-5 py-14 transition-colors hover:bg-ink-soft sm:px-8 md:px-10 md:py-16"
        >
          <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Next case study</p>
              <p className="serif-display mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-none text-white">
                {next.name}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                {next.category}
              </p>
            </div>
            <span
              className="text-3xl text-amber transition-transform duration-500 group-hover:translate-x-2"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
