import Link from "next/link";
import { selectedWork } from "@/content/work";
import { navigation, site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-white/10 bg-ink-deep">
      <div className="wrap py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-amber font-serif text-base text-ink">
                MM
              </span>
              <span className="font-serif text-2xl text-white">{site.name}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              Software engineer, systems designer and product builder working
              across architecture, delivery and growth.
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {site.location} · Working remotely
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Navigate
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/work"
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    All work
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Selected work
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {selectedWork.map((project) => (
                  <li key={project.name}>
                    {project.external ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/65 transition-colors hover:text-white"
                      >
                        {project.name} ↗
                      </a>
                    ) : (
                      <Link
                        href={project.href}
                        className="text-white/65 transition-colors hover:text-white"
                      >
                        {project.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Contact
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-white/65 transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={site.cv}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    Download CV ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Designed and built by Mark Maingi · Next.js</p>
        </div>
      </div>
    </footer>
  );
}
