import Image from "next/image";
import Link from "next/link";
import { heroStats, site } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-amber/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="wrap relative grid gap-14 pb-0 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pb-24 xl:col-span-7">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            <span>{site.location}</span>
            <span className="text-white/20">/</span>
            <span>{site.availability}</span>
          </p>

          <h1 className="serif-display mt-8 text-[clamp(3.3rem,9vw,7rem)] leading-[0.9] text-white">
            Mark Maingi
            <span className="text-amber">.</span>
          </h1>

          <p className="mt-7 font-mono text-[10px] uppercase leading-relaxed tracking-[0.26em] text-white/55 sm:text-[11px]">
            Software Engineer <span className="text-amber/70">·</span> Systems
            Thinker <span className="text-amber/70">·</span> Product Builder
          </p>

          <p className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-white/70 sm:text-lg">
            {site.headline}
          </p>
          <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-white/50">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/#work" className="btn-primary">
              Selected work
              <span aria-hidden="true">↓</span>
            </Link>
            <Link href="/resume" className="btn-ghost">
              Résumé
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="ml-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-amber"
            >
              Start a conversation
            </a>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-ink px-5 py-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl text-amber">{stat.value}</dd>
                <p className="mt-2 text-[11px] leading-snug text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 lg:pb-24">
          <figure className="relative">
            <div
              className="absolute -right-3 -top-3 h-16 w-16 border-r border-t border-amber/60"
              aria-hidden="true"
            />
            <div className="border border-white/15 bg-white/[0.03] p-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
                <Image
                  src="/Mark.jpeg"
                  alt="Portrait of Mark Maingi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 40vw"
                  className="object-cover object-[center_30%] saturate-[0.85]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">
                  Kenya · Remote
                </p>
              </div>
              <figcaption className="flex items-center justify-between px-1 pb-1 pt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                <span>Fig. 01 — Engineer, designer, builder</span>
                <span className="text-amber/70">MM</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="wrap no-scrollbar flex gap-x-8 overflow-x-auto py-4">
          {[
            "Software Engineering",
            "Systems Design",
            "Product Engineering",
            "Full-Stack Development",
            "UI/UX Engineering",
            "AI & Automation",
            "Technical Leadership",
            "Technical SEO",
          ].map((discipline, index) => (
            <span
              key={discipline}
              className="flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40"
            >
              <span className="text-amber/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              {discipline}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
