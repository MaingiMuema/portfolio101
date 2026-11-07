import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products, platforms and systems designed and engineered by Mark Maingi across education, property, fintech, sport and insurance.",
  alternates: { canonical: "/work" },
};

const rowClass =
  "group grid gap-6 border-b border-ink/15 py-8 md:grid-cols-12 md:items-center md:gap-8";

function ProjectRow({ project, position }: { project: Project; position: number }) {
  const study = project.caseStudy;

  const body = (
    <>
      <div className="md:col-span-1">
        <span className="font-mono text-[11px] text-ink/35">
          {String(position + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="md:col-span-6">
        <p className="eyebrow-dark">{project.category}</p>
        <h3 className="serif-display mt-2 text-[clamp(1.6rem,3vw,2.25rem)] leading-tight">
          {project.name}
        </h3>
        <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-ink/60">
          {project.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/65">
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
        {project.image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 ring-1 ring-ink/10">
            <Image
              src={project.image}
              alt={`${project.name} — ${project.category}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="hidden aspect-[16/10] items-center justify-center border border-ink/10 md:flex">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/30">
              Live product
            </span>
          </div>
        )}
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
            Twenty-plus builds across five sectors, ordered by significance. Six
            are written up as full case studies; the rest open the live product.
          </p>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="eyebrow-dark">The index</h2>
            <p className="max-w-sm text-sm leading-relaxed text-ink/50">
              Every project in one sequence, from the most significant delivery
              down.
            </p>
          </div>

          <div className="mt-8 border-t border-ink/15">
            {projects.map((project, position) => (
              <ProjectRow
                key={project.name}
                project={project}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
