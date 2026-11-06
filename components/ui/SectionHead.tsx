import type { ReactNode } from "react";

type SectionHeadProps = {
  index: string;
  label: string;
  title: ReactNode;
  note?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHead({
  index,
  label,
  title,
  note,
  tone = "dark",
  className = "",
}: SectionHeadProps) {
  const isLight = tone === "light";

  return (
    <div className={`grid gap-8 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-8">
        <p className={isLight ? "eyebrow-dark" : "eyebrow"}>
          {index} — {label}
        </p>
        <h2
          className={`serif-display mt-5 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] ${
            isLight ? "text-ink" : "text-white"
          }`}
        >
          {title}
        </h2>
      </div>
      {note ? (
        <div className="md:col-span-4">
          <p
            className={`max-w-sm text-sm leading-relaxed ${
              isLight ? "text-ink/60" : "text-white/55"
            } md:ml-auto`}
          >
            {note}
          </p>
        </div>
      ) : null}
    </div>
  );
}
