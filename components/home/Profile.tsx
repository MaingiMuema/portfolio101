import { certifications, education, profile } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-20 border-b border-white/10">
      <div className="wrap py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">04 — Profile</p>
            <h2 className="serif-display mt-5 text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.04] text-white">
              Computer science foundations.{" "}
              <span className="italic text-white/55">Industry-built range.</span>
            </h2>

            <dl className="mt-10 space-y-5 border-t border-white/10 pt-6">
              {profile.facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[100px_1fr] gap-4">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
                    {fact.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-white/70">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
                Education
              </p>
              <p className="mt-3 text-sm text-white/80">{education.school}</p>
              <p className="mt-1 text-[13px] text-white/45">{education.detail}</p>
            </div>

            <div className="mt-8">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
                Certifications
              </p>
              <div className="mt-3 space-y-4">
                {certifications.map((group) => (
                  <div key={group.title}>
                    <p className="text-[13px] text-white/70">{group.title}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/40">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <blockquote className="border-l border-amber/50 pl-6">
                <p className="font-serif text-[1.5rem] leading-snug text-white/90 md:text-[1.85rem]">
                  &ldquo;Most of the problems that make software feel fragile are
                  structural, not cosmetic.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <div className="mt-10 space-y-5 text-[15px] leading-[1.85] text-white/60">
              {profile.paragraphs.map((paragraph) => (
                <Reveal key={paragraph.slice(0, 32)}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
                Outside the build
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/55">
                {profile.interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
