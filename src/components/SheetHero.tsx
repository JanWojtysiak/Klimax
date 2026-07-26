"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

export default function SheetHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [summer, setSummer] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="relative h-[160vh]"
      style={{ ["--progress" as string]: 0, ["--sy" as string]: 0 }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
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
          `}</style>

          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <rect className="plane plane-sky" x="0" y="0" width="1600" height="900" />

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
                d="M0,900 L0,552 L110,508 L200,534 L320,470 L410,508 L530,456 L640,498 L760,450 L880,494 L1000,456 L1120,502 L1240,468 L1380,506 L1520,472 L1600,500 L1600,900 Z"
              />
            </g>

            <g style={{ transform: "translateY(calc(var(--sy) * -78px))" }}>
              <path
                className="plane plane-cliff"
                d="M1600,900 L1030,900 L1030,486 L1082,438 L1118,356 L1178,330 L1224,262 L1292,296 L1344,244 L1402,286 L1458,240 L1524,278 L1600,228 Z"
              />
              <g className="plane plane-cliff-shade">
                <path d="M1128,352 L1152,346 L1168,900 L1140,900 Z" />
                <path d="M1246,276 L1272,288 L1288,900 L1258,900 Z" />
                <path d="M1372,266 L1398,282 L1414,900 L1384,900 Z" />
                <path d="M1494,258 L1520,276 L1536,900 L1506,900 Z" />
              </g>
            </g>

            <g style={{ transform: "translateY(calc(var(--sy) * -110px))" }}>
              <path
                className="plane plane-mid"
                d="M0,900 L0,648 L120,614 L240,640 L360,590 L470,624 L580,578 L700,618 L820,592 L940,626 L1060,598 L1180,630 L1300,604 L1440,634 L1600,608 L1600,900 Z"
              />
            </g>

            <g style={{ transform: "translateY(calc(var(--sy) * -140px))" }}>
              <path className="plane plane-ground" d="M0,900 L0,772 L1600,742 L1600,900 Z" />
              <path
                className="plane plane-ground-shade"
                d="M0,900 L0,858 L420,836 L900,864 L1600,830 L1600,900 Z"
              />
              <path
                className="plane plane-forest"
                d={spruceRow(776, -20, 1640, 34, 46, 104, 7)}
              />

              <g>
                <path className="plane plane-wall" d="M296,800 L296,700 L500,700 L500,800 Z" />
                <path className="plane plane-roof" d="M272,706 L398,626 L524,706 Z" />
                <path className="plane plane-roof" d="M448,646 L474,646 L474,690 L448,690 Z" />
                <g className="plane plane-heat">
                  <path d="M330,742 L370,742 L370,782 L330,782 Z" />
                  <path d="M420,742 L460,742 L460,782 L420,782 Z" />
                </g>
              </g>

              <g>
                <path className="plane plane-heat" d="M512,748 L586,748 L586,800 L512,800 Z" />
                <circle cx="549" cy="774" r="17" className="plane plane-wall" />
                <path className="plane plane-heat" d="M544,762 L554,762 L554,786 L544,786 Z" />
              </g>
            </g>

            <g style={{ transform: "translateY(calc(var(--sy) * -180px))" }}>
              <path
                className="plane plane-forest"
                d="M120,920 L120,704 L58,920 Z M120,920 L120,704 L182,920 Z M1436,920 L1436,672 L1360,920 Z M1436,920 L1436,672 L1512,920 Z"
              />
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
                sizes="(min-width: 640px) 11rem, (min-width: 360px) 10rem, 9rem"
                loading="eager"
                className="h-auto w-36 max-w-full shrink-0 min-[360px]:w-40 sm:w-44"
              />
              <span
                className="display min-w-0 text-center text-sm leading-none min-[360px]:text-[0.9375rem] sm:text-lg"
                style={{
                  color: summer ? "var(--color-spruce)" : "var(--color-stock)",
                  fontWeight: 900,
                  WebkitTextStroke: `1px ${summer ? "var(--color-stock)" : "var(--color-spruce)"}`,
                  paintOrder: "stroke fill",
                  fontVariationSettings: '"opsz" 72',
                }}
              >
                Klimax · Robert Wojtysiak
              </span>
            </div>
            <span className="caption shrink-0 pt-1 text-[0.68rem] sm:text-xs">
              Arkusz 01
            </span>
          </div>

          <div className="pointer-events-none absolute left-4 top-24 z-10 w-52 bg-spruce px-3 py-3 text-stock [@media(max-height:640px)]:hidden sm:left-auto sm:right-8 sm:top-16 sm:w-64">
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
            <h1
              className={`display text-[clamp(3.4rem,15vw,11rem)] ${summer ? "" : "text-stock"}`}
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
              Pompy{" "}
              <br />
              ciepła
              <span className="sr-only">
                {" "}
                — Klimax Robert Wojtysiak, Świebodzice i okolice
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stock/85 sm:text-xl">
              {summer
                ? "Latem ta sama instalacja chłodzi dom. Jedno urządzenie, dwie pory roku."
                : "Dobór, montaż i serwis. Instalacja, która grzeje dom także wtedy, gdy na zewnątrz jest mróz."}
            </p>
          </div>

          <div className="bg-spruce">
            <div className="flex flex-col gap-4 px-5 pb-24 pt-5 sm:px-10 md:flex-row md:items-center md:justify-between md:py-5">
              <div className="flex flex-col gap-2">
                <p className="caption text-xs text-stock sm:text-sm">
                  25 lat · SEP 1/2/3 · F-Gaz
                </p>
                <p className="caption text-xs text-stock/70 sm:text-sm">
                  Świebodzice i 30 km wokół
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="hidden md:block">
                  <a
                    href="tel:+48601573887"
                    className="ink-btn bg-vermilion px-6 py-3 text-lg text-stock hover:bg-stock hover:text-vermilion sm:text-xl"
                  >
                    Zadzwoń +48 601 573 887
                  </a>
                </div>
                <a
                  href="#kontakt"
                  className="ink-btn border-2 border-stock px-6 py-3 text-lg text-stock hover:bg-stock hover:text-spruce sm:text-xl"
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
