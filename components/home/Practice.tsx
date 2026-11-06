import { practiceAreas, toolbelt } from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

export default function Practice() {
  return (
    <section id="practice" className="scroll-mt-20 border-b border-white/10">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          index="02"
          label="Practice"
          title={
            <>
              One operator across{" "}
              <span className="italic text-white/60">the whole stack.</span>
            </>
          }
          note="Most products fail in the gaps between disciplines. I work across them deliberately: the architecture, the interface, the delivery and the growth that follows."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <Reveal
              key={area.id}
              delay={(index % 3) * 70}
              className="group bg-ink"
            >
              <div className="flex h-full flex-col p-7 transition-colors duration-300 group-hover:bg-ink-soft md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-amber/70">
                    {area.id}
                  </span>
                  <span
                    className="h-1 w-1 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-amber"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {area.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-[13px] text-white/60">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-[7px] h-px w-3 shrink-0 bg-amber/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="eyebrow">Toolbelt</p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {toolbelt.map((group) => (
              <div key={group.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {group.label}
                </dt>
                <dd className="mt-3 space-y-1.5 text-[13px] text-white/70">
                  {group.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
