import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col justify-center py-20">
      <p className="eyebrow">404 — Not found</p>
      <h1 className="serif-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.98] text-white">
        This page is not in{" "}
        <span className="italic text-white/55">the system.</span>
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/50">
        The link may be outdated. The work and the résumé are still where they
        should be.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Back home
        </Link>
        <Link href="/work" className="btn-ghost">
          View work
        </Link>
      </div>
    </section>
  );
}
