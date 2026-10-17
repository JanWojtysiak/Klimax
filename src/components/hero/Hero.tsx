"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import type { Texts } from "@/lib/texts";
import { HeroScene } from "./HeroScene";
import { plates } from "./plates";

const titleClass =
  "display flex min-h-[1.72em] items-end whitespace-pre-line text-[clamp(3.4rem,15vw,11rem)] [@media(max-height:800px)]:text-[clamp(3.4rem,15vw,8.75rem)]";

export function Hero({ texts }: { texts: Texts }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [summer, setSummer] = useState(false);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (step: number) => {
    setDir(step);
    setIndex((v) => (v + step + plates.length) % plates.length);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 4000);
    return () => clearInterval(timer);
  }, [index]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      setSummer(progress > 0.45);
      section.style.setProperty("--progress", String(progress));
      section.style.setProperty("--sy", reduced ? "0" : String(progress));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const plate = plates[index];
  const title = texts[`plate${index}Title`];
  const note =
    summer && plate.summerNote
      ? texts[`plate${index}SummerNote`]
      : texts[`plate${index}Note`];
  const anim = dir ? "plate-wipe" : "";

  return (
    <section
      ref={sectionRef}
      className="relative h-[160vh]"
      style={{ ["--progress" as string]: 0, ["--sy" as string]: 0 }}
    >
      <div
        data-dir={dir}
        className="sticky top-0 h-[calc(100svh-60px)] overflow-hidden md:h-screen"
      >
        <HeroScene
          summer={summer}
          plateKey={index}
          plateAnimated={dir !== 0}
          plateObject={plate.object}
        />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3 px-4 py-4 text-stock sm:gap-4 sm:px-8 sm:py-5">
            <div className="flex min-w-0 flex-col items-center">
              <Image
                src={
                  summer
                    ? "/brand/logo-mark-summer.png"
                    : "/brand/logo-mark-winter.png"
                }
                alt=""
                width={1039}
                height={341}
                sizes="(min-width: 640px) 11rem, (min-width: 360px) 7rem, 6rem"
                loading="eager"
                className="h-auto w-24 max-w-full shrink-0 min-[360px]:w-28 sm:w-44"
              />
              <span
                className="wordmark min-w-0 text-center text-[0.55rem] min-[360px]:text-[0.62rem] sm:text-sm"
                style={{
                  color: summer ? "var(--color-spruce)" : "var(--color-stock)",
                }}
              >
                {site.name} · {site.owner}
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute z-10 hidden bg-spruce px-3 py-3 text-stock [@media(max-height:640px)]:hidden sm:right-8 sm:top-16 sm:block sm:w-64">
            <div
              className="flex items-center justify-between text-[0.62rem] caption sm:text-[0.68rem]"
              aria-label={`Aktualny sezon: ${summer ? "lato" : "zima"}`}
              aria-live="polite"
            >
              <span className={summer ? "text-stock/70" : "text-stock"}>Zima</span>
              <span aria-hidden="true">→</span>
              <span className={summer ? "text-stock" : "text-stock/70"}>Lato</span>
            </div>
            <div className="mt-2 h-1 bg-stock/25" aria-hidden="true">
              <span
                className="block h-full origin-left bg-stock"
                style={{ transform: "scaleX(var(--progress))" }}
              />
            </div>
            <p className="mt-2 text-[0.66rem] leading-tight text-stock/75">
              Przewiń, aby zmienić sezon
            </p>
          </div>

          <div className="px-5 pb-6 sm:px-10">
            <div id="service" aria-live="polite" aria-atomic="true">
              <div className="relative">
                {dir ? (
                  <span
                    key={`ghost-${index}`}
                    aria-hidden="true"
                    className={`${titleClass} plate-ghost pointer-events-none absolute inset-0 text-vermilion`}
                  >
                    {title}
                  </span>
                ) : null}
                <h1
                  key={`title-${index}`}
                  className={`${titleClass} relative ${anim} ${summer ? "" : "text-stock"}`}
                  style={
                    summer
                      ? {
                          color: "#203D3A",
                          WebkitTextStroke: "4px #F1E9D5",
                          paintOrder: "stroke fill",
                        }
                      : undefined
                  }
                >
                  {title}
                  <span className="sr-only">
                    {" "}
                    — {site.name} {site.owner}, {site.city} i okolice
                  </span>
                </h1>
              </div>
              <p
                key={`note-${note}`}
                className={`mt-6 min-h-[3.25em] max-w-xl text-lg leading-relaxed text-stock/85 sm:text-xl ${anim} ${anim ? "plate-wipe-late" : ""}`}
              >
                {note}
              </p>
            </div>

            <div
              className="mt-6 flex items-center gap-4 text-stock"
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") go(-1);
                if (event.key === "ArrowRight") go(1);
              }}
            >
              <div className="flex">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Poprzednia usługa"
                  aria-controls="service"
                  className="ink-btn h-12 w-12 border-2 border-r-0 border-stock/70 hover:bg-stock hover:text-spruce focus-visible:outline-stock"
                >
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M9,0 L1,6 L9,12 Z" fill="currentColor" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Następna usługa"
                  aria-controls="service"
                  className="ink-btn h-12 w-12 border-2 border-stock/70 hover:bg-stock hover:text-spruce focus-visible:outline-stock"
                >
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M3,0 L11,6 L3,12 Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <p
                key={`count-${index}`}
                className={`caption text-xs text-stock/80 sm:text-sm ${anim}`}
              >
                Usługa {String(index + 1).padStart(2, "0")} /{" "}
                {String(plates.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="bg-white text-spruce">
            <div className="flex flex-col gap-4 px-5 pb-5 pt-5 sm:px-10 md:flex-row md:items-center md:justify-between md:py-5">
              <div className="flex flex-col gap-2">
                <p className="caption text-xs sm:text-sm">
                  25 lat · SEP 1/2/3 · F-Gaz
                </p>
                <p className="caption text-xs text-spruce/70 sm:text-sm">
                  {site.city} i {site.radiusKm} km wokół
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="hidden md:block">
                  <a
                    href={site.phoneHref}
                    className="ink-btn bg-vermilion px-6 py-3 text-lg text-stock hover:bg-spruce hover:text-stock sm:text-xl"
                  >
                    Zadzwoń {site.phone}
                  </a>
                </div>
                <a
                  href="#contact"
                  className="ink-btn border-2 border-spruce px-6 py-3 text-lg text-spruce hover:bg-spruce hover:text-stock sm:text-xl"
                >
                  Napisz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
