import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/work";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const rowClass =
  "group grid gap-6 border-b border-ink/15 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10";

function WorkCard({ project, position }: { project: Project; position: number }) {
  const study = project.caseStudy;

  const body = (
    <>
      <div className="flex items-baseline gap-4 md:col-span-1 md:block">
        <span className="font-mono text-[11px] tracking-[0.1em] text-ink/35">
          {String(position + 1).padStart(2, "0")}
        </span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-ink/30 md:hidden">
          {project.category}
        </span>
      </div>

      <div className="md:col-span-6">
        <p className="hidden eyebrow-dark md:block">{project.category}</p>
        <h3 className="serif-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] text-ink">
          {project.name}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/60">
          {project.summary}
        </p>

        {study ? (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/40">
            {study.scope.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}

        <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
          {study ? "Read case study" : "Visit live site"}
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            {study ? "→" : "↗"}
          </span>
        </span>
      </div>

      <div className="md:col-span-5">
        <div className="relative aspect-[16/11] overflow-hidden bg-ink/5 ring-1 ring-ink/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} — ${project.category}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : null}
          <div
            className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/5"
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );

  return project.external ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={rowClass}
    >
      {body}
    </a>
  ) : (
    <Link href={project.href} className={rowClass}>
      {body}
    </Link>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-20 bg-paper text-ink">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          index="01"
          label="Selected work"
          tone="light"
          title={
            <>
              Systems built to run{" "}
              <span className="italic text-ink/70">real operations.</span>
            </>
          }
          note="Five engagements across property marketplaces, pensions, education technology and insurance — each moved from an operational problem to a working product."
        />

        <div className="mt-12 border-t border-ink/15 md:mt-16">
          {projects.slice(0, 5).map((project, index) => (
            <Reveal key={project.name} delay={(index % 3) * 60}>
              <WorkCard project={project} position={index} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink/40">
            More platforms, products and brand builds in the full archive
          </p>
          <Link href="/work" className="btn-ghost-dark">
            All work
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
