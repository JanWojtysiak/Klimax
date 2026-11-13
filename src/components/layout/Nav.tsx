"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

const link =
  "nav-link relative flex items-center whitespace-nowrap transition-colors duration-150 ease-linear hover:bg-stock hover:text-spruce aria-[current]:bg-stock aria-[current]:text-spruce";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) =>
    pathname === href || pathname.startsWith(`${href}-`) ? "page" : undefined;

  if (pathname.startsWith("/admin")) return null;

  return (
    <nav
      aria-label="Główna"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
      className="sticky top-0 z-40 flex items-stretch justify-between border-b-[3px] border-double border-stock/35 bg-spruce font-display text-lg font-extrabold uppercase tracking-[0.04em] text-stock xl:px-5 xl:text-base"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="nav-sheet"
        onClick={() => setOpen(!open)}
        className={`${link} h-11 gap-3 px-5 uppercase xl:hidden`}
      >
        {open ? "Zamknij" : "Menu"}
        <svg
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M0,2 L12,2 L6,11 Z" fill="currentColor" />
        </svg>
      </button>

      <div
        id="nav-sheet"
        onClick={() => setOpen(false)}
        className={`${open ? "" : "max-xl:hidden"} max-xl:absolute max-xl:inset-x-0 max-xl:top-full max-xl:max-h-[calc(100svh-2.75rem)] max-xl:overflow-y-auto max-xl:border-y-[3px] max-xl:border-double max-xl:border-stock/35 max-xl:bg-spruce xl:flex xl:flex-1 xl:justify-between`}
      >
        <ol className="xl:flex">
          {services.map(({ name, slug }, index) => (
            <li key={slug} className="max-xl:border-b-2 max-xl:border-stock/20">
              <Link
                href={`/${slug}`}
                aria-current={current(`/${slug}`)}
                className={`${link} gap-4 px-5 max-xl:py-4 max-xl:text-[clamp(1.25rem,6.4vw,1.875rem)] max-xl:tracking-normal xl:h-11 xl:gap-2 xl:px-2.5`}
              >
                <span className="caption font-sans text-[0.65rem] opacity-55 xl:hidden 2xl:inline">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {name}
                <span aria-hidden="true" className="ml-auto shrink-0 opacity-40 xl:hidden">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-2 xl:flex">
          <Link
            href="/pytania"
            aria-current={current("/pytania")}
            className={`${link} h-14 justify-center px-5 max-xl:border-r-2 max-xl:border-stock/20 xl:h-11 xl:px-2.5`}
          >
            Pytania
          </Link>
          <a
            href={pathname === "/polityka-prywatnosci" ? "/#contact" : "#contact"}
            className={`${link} h-14 justify-center px-5 xl:h-11 xl:px-2.5`}>
            Kontakt
          </a>
        </div>
      </div>

      <a href={site.phoneHref} className={`${link} h-11 px-5 xl:px-2.5`}>
        {site.phone}
      </a>
    </nav>
  );
}
