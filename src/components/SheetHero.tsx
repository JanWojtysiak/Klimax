"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { plates } from "./servicePlates";

const spruceRow = (
  baseline: number,
  from: number,
  to: number,
  step: number,
  minH: number,
  maxH: number,
  seed: number
) => {
  const parts: string[] = [];
  let n = seed;
  for (let x = from; x < to; x += step) {
    n = (n * 1103515245 + 12345) % 2147483648;
    const h = minH + (n / 2147483648) * (maxH - minH);
    const w = step * 0.72;
    parts.push(
      `M${x - w / 2},${baseline} L${x},${baseline - h} L${x + w / 2},${baseline} Z`
    );
  }
  return parts.join(" ");
};

const titleClass =
  "display flex min-h-[1.72em] items-end whitespace-pre-line text-[clamp(3.4rem,15vw,11rem)] [@media(max-height:800px)]:text-[clamp(3.4rem,15vw,8.75rem)]";

export default function SheetHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [summer, setSummer] = useState(false);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (step: number) => {
    setDir(step);
    setIndex((v) => (v + step + plates.length) % plates.length);
  };

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
  const note =
    summer && plate.summerNote ? plate.summerNote : plate.note;
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
        <div className={`absolute inset-0 grain ${summer ? "summer" : ""}`}>
          <style>{`
            .plane-sky { fill: #2e5567 }
            .plane-cloud { fill: #efe9da }
            .plane-far { fill: #24485a }
            .plane-cliff { fill: #2a5163 }
            .plane-cliff-shade { fill: #1d3f4f }
            .plane-mid { fill: #1c3b32 }
            .plane-forest { fill: #16332b }
            .plane-ground { fill: #efe9da }
            .plane-ground-shade { fill: #d5d2c2 }
            .plane-wall { fill: #efe9da }
            .plane-roof { fill: #16332b }
            .plane-heat { fill: #d8452a }
            .plane-heat-line { fill: none; stroke: #d8452a }
            .plane-paper-line { fill: none; stroke: #efe9da }
            .summer .plane-sky { fill: #e8dcbe }
            .summer .plane-cloud { fill: #f4eede }
            .summer .plane-far { fill: #2e5567 }
            .summer .plane-cliff { fill: #c0803a }
            .summer .plane-cliff-shade { fill: #9d6528 }
            .summer .plane-mid { fill: #1c3b32 }
            .summer .plane-forest { fill: #16332b }
            .summer .plane-ground { fill: #c0803a }
            .summer .plane-ground-shade { fill: #a86c2c }
            .summer .plane-wall { fill: #efe9da }
            .summer .plane-roof { fill: #16332b }
            .scene { transform: translate(340px, -88px) }
            @media (min-width: 640px) { .scene { transform: translate(190px, -60px) } }
            @media (min-width: 1024px) { .scene { transform: none } }
          `}</style>

          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <g className="scene">
              <rect className="plane plane-sky" x="-400" y="-200" width="2400" height="1400" />

              <g style={{ transform: "translateY(calc(var(--sy) * -22px))" }}>
                <g className="plane plane-cloud">
                  <ellipse cx="250" cy="180" rx="130" ry="26" />
                  <ellipse cx="330" cy="152" rx="86" ry="22" />
                  <ellipse cx="900" cy="120" rx="150" ry="22" />
                  <ellipse cx="980" cy="96" rx="92" ry="18" />
                </g>
              </g>

              <g style={{ transform: "translateY(calc(var(--sy) * -46px))" }}>
                <path
                  className="plane plane-far"
                  d="M-400,1220 L-400,552 L110,508 L200,534 L320,470 L410,508 L530,456 L640,498 L760,450 L880,494 L1000,456 L1120,502 L1240,468 L1380,506 L1520,472 L2000,500 L2000,1220 Z"
                />
              </g>

              <g style={{ transform: "translateY(calc(var(--sy) * -78px))" }}>
                <path
                  className="plane plane-cliff"
                  d="M2000,1220 L1030,1220 L1030,486 L1082,438 L1118,356 L1178,330 L1224,262 L1292,296 L1344,244 L1402,286 L1458,240 L1524,278 L1600,228 L2000,228 Z"
                />
                <g className="plane plane-cliff-shade">
                  <path d="M1128,352 L1152,346 L1168,1220 L1140,1220 Z" />
                  <path d="M1246,276 L1272,288 L1288,1220 L1258,1220 Z" />
                  <path d="M1372,266 L1398,282 L1414,1220 L1384,1220 Z" />
                  <path d="M1494,258 L1520,276 L1536,1220 L1506,1220 Z" />
                </g>
              </g>

              <g style={{ transform: "translateY(calc(var(--sy) * -110px))" }}>
                <path
                  className="plane plane-mid"
                  d="M-400,1220 L-400,648 L120,614 L240,640 L360,590 L470,624 L580,578 L700,618 L820,592 L940,626 L1060,598 L1180,630 L1300,604 L1440,634 L2000,608 L2000,1220 Z"
                />
              </g>

              <g style={{ transform: "translateY(calc(var(--sy) * -140px))" }}>
                <path
                  className="plane plane-ground"
                  d="M-400,1220 L-400,779 L2000,735 L2000,1220 Z"
                />
                <path
                  className="plane plane-ground-shade"
                  d="M-400,1220 L-400,858 L420,836 L900,864 L2000,826 L2000,1220 Z"
                />
                <path
                  className="plane plane-forest"
                  d={spruceRow(776, -420, 2040, 34, 46, 104, 7)}
                />

                <g>
                  <path className="plane plane-wall" d="M288,800 L288,690 L520,690 L520,800 Z" />
                  <path className="plane plane-roof" d="M456,612 L482,612 L482,662 L456,662 Z" />
                  <path className="plane plane-roof" d="M262,696 L404,600 L546,696 Z" />
                  <path className="plane plane-roof" d="M288,788 L520,788 L520,800 L288,800 Z" />
                </g>

                <g key={index} className={dir ? "plate-object" : undefined}>
                  {plate.object}
                </g>
              </g>

              <g style={{ transform: "translateY(calc(var(--sy) * -180px))" }}>
                <path
                  className="plane plane-forest"
                  d="M120,920 L120,704 L58,920 Z M120,920 L120,704 L182,920 Z M1436,920 L1436,672 L1360,920 Z M1436,920 L1436,672 L1512,920 Z"
                />
              </g>
            </g>
          </svg>
        </div>

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
                Klimax · Robert Wojtysiak
              </span>
            </div>
            <span className="caption shrink-0 pt-1 text-[0.68rem] sm:text-xs">
              Arkusz 01
            </span>
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
            <div id="usluga" aria-live="polite" aria-atomic="true">
              <div className="relative">
                {dir ? (
                  <span
                    key={`ghost-${index}`}
                    aria-hidden="true"
                    className={`${titleClass} plate-ghost pointer-events-none absolute inset-0 text-vermilion`}
                  >
                    {plate.title}
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
                  {plate.title}
                  <span className="sr-only">
                    {" "}
                    — Klimax Robert Wojtysiak, Świebodzice i okolice
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
                  aria-controls="usluga"
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
                  aria-controls="usluga"
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
                  Świebodzice i 30 km wokół
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="hidden md:block">
                  <a
                    href="tel:+48601573887"
                    className="ink-btn bg-vermilion px-6 py-3 text-lg text-stock hover:bg-spruce hover:text-stock sm:text-xl"
                  >
                    Zadzwoń +48 601 573 887
                  </a>
                </div>
                <a
                  href="#kontakt"
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
