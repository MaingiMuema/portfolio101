"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-ink/90 backdrop-blur-md"
          : "border-white/[0.06] bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center bg-amber font-serif text-[15px] leading-none text-ink">
            MM
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-[17px] text-white">{site.name}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
              Engineer · Builder
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                pathname === item.href
                  ? "text-amber"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
            </span>
            Available
          </span>
          <a href={site.cv} className="btn-primary !px-4 !py-2.5 !text-[10px]">
            CV
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-px w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ink px-5 pb-12 pt-8 md:top-[72px] md:h-[calc(100dvh-72px)] lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-white/10 py-5"
            >
              <span className="font-serif text-3xl text-white">{item.label}</span>
              <span className="font-mono text-[10px] text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <a
            href={site.cv}
            className="mt-8 flex items-center justify-between border border-white/20 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white"
          >
            Download CV
            <span aria-hidden="true">↗</span>
          </a>
          <div className="mt-8 space-y-1 font-mono text-[11px] text-white/45">
            <a href={`mailto:${site.email}`} className="block">
              {site.email}
            </a>
            <a href={site.phoneHref} className="block">
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
