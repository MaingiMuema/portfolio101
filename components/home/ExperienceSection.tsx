import Link from "next/link";
import { experience, site } from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 bg-paper text-ink">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          index="03"
          label="Experience"
          tone="light"
          title={
            <>
              A track record built{" "}
              <span className="italic text-ink/65">in production.</span>
            </>
          }
          note="Founder roles, client delivery and in-house engineering — the sequence that shaped how I scope, design and ship."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                Currently
              </p>
              <p className="mt-3 font-serif text-2xl leading-tight text-ink">
                Founder &amp; Developer,
                <br />
                Learnwise Technologies
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/55">
                Building education infrastructure for schools while delivering
                platforms across property, logistics, fintech and sport.
              </p>
              <a href={site.cv} className="btn-ghost-dark mt-6">
                Full CV
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <ol className="lg:col-span-9">
            {experience.map((role, index) => (
              <Reveal
                as="li"
                key={`${role.company}-${role.period}`}
                delay={Math.min(index * 40, 160)}
                className="border-t border-ink/15 py-7 first:border-t-0 first:pt-0 md:py-8"
              >
                <div className="grid gap-3 md:grid-cols-[170px_1fr] md:gap-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                      {role.period}
                    </p>
                    {role.current ? (
                      <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/60">
                        <span className="h-1 w-1 rounded-full bg-ink/70" />
                        Current
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <h3 className="font-serif text-[1.4rem] leading-snug text-ink md:text-[1.6rem]">
                      {role.role}
                      <span className="text-ink/35"> — </span>
                      {role.company}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-ink/60">
                      {role.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {role.focus.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {role.links ? (
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                        {role.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] text-ink/55 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/60"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6">
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink/40">
            References and engagement details available on request
          </p>
          <Link href="/#contact" className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/70 underline decoration-ink/25 underline-offset-4 hover:text-ink">
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
