import { site } from "@/content/site";

const contactLinks = [
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "GitHub", href: site.github, external: true },
  { label: "WhatsApp", href: site.whatsapp, external: true },
  { label: "Résumé", href: "/resume", external: false },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-amber text-ink">
      <div className="wrap py-20 md:py-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/50">
          06 — Contact
        </p>

        <h2 className="serif-display mt-6 max-w-4xl text-[clamp(2.6rem,7.5vw,5.6rem)] leading-[0.94]">
          Let&rsquo;s build something
          <span className="italic text-ink/60"> that holds up.</span>
        </h2>

        <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-ink/70 md:text-base">
          I take on a small number of engineering, systems and product
          engagements at a time — from architecture and full-stack delivery to
          interface design and technical growth. If the problem is real and the
          standard is high, I would like to hear about it.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center justify-between gap-6 bg-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-ink-soft"
          >
            <span className="break-all">{site.email}</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
          <a
            href={site.cv}
            className="inline-flex items-center justify-center gap-3 border border-ink/30 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/80 transition-colors hover:border-ink/70 hover:text-ink"
          >
            Download CV
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="mt-16 grid gap-8 border-t border-ink/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/45">
              Location
            </p>
            <p className="mt-3 text-sm text-ink/75">{site.location}</p>
            <p className="mt-1 text-[13px] text-ink/50">Working remotely</p>
          </div>
          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/45">
              Availability
            </p>
            <p className="mt-3 text-sm text-ink/75">Select engagements</p>
            <p className="mt-1 text-[13px] text-ink/50">2026 openings</p>
          </div>
          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/45">
              Direct
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 block text-sm text-ink/75 underline decoration-ink/25 underline-offset-4 hover:text-ink"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/45">
              Elsewhere
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {contactLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/75 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-ink/75 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
