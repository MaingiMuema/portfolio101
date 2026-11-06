import { conceptLab } from "@/content/site";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

export default function ConceptLab() {
  return (
    <section id="lab" className="scroll-mt-20 border-b border-white/10 bg-ink-soft">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          index="05"
          label="R&amp;D"
          title={
            <>
              Concepts currently{" "}
              <span className="italic text-white/60">in testing.</span>
            </>
          }
          note="Applied research on agentic workflows and AI-assisted media. These are prototypes, shown as they are rather than as finished products."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {conceptLab.map((concept, index) => (
            <Reveal key={concept.name} delay={index * 80}>
              <a
                href={concept.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-ink p-7 transition-colors duration-300 hover:border-amber/40 md:p-9"
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-8 font-serif text-[9rem] leading-none text-white/[0.035] transition-colors duration-500 group-hover:text-amber/[0.07]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/40">
                    {concept.category}
                  </p>
                  <span className="inline-flex shrink-0 items-center gap-1.5 border border-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">
                    <span className="h-1 w-1 rounded-full bg-amber" />
                    {concept.status}
                  </span>
                </div>

                <div className="relative mt-16">
                  <h3 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-white">
                    {concept.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">
                    {concept.summary}
                  </p>
                </div>

                <span className="relative mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 transition-colors group-hover:text-amber">
                  Watch prototype
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
