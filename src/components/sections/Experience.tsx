"use client";

import { useEffect, useRef, useState } from "react";
import type { Texts } from "@/lib/texts";

const YEARS = 25;
const DURATION = 1800;

export function Experience({ texts }: { texts: Texts }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(YEARS);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          setCount(Math.round((1 - Math.pow(1 - progress, 3)) * YEARS));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative bg-spruce grain">
      <div
        ref={ref}
        className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-10"
      >
        <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
          <p
            className="display inline-grid bg-stock px-5 leading-[0.78] text-spruce sm:px-8"
            style={{ fontSize: "clamp(9rem, 34vw, 22rem)" }}
            aria-label={`${YEARS}`}
          >
            <span className="invisible col-start-1 row-start-1" aria-hidden="true">
              {YEARS}
            </span>
            <span className="col-start-1 row-start-1 text-center" aria-hidden="true">
              {count}
            </span>
          </p>
          <p
            className={`display whitespace-pre-line pb-3 text-stock text-[clamp(2.4rem,9vw,5.5rem)] leading-[0.85] transition-all duration-700 sm:pb-6 ${
              count > 0 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {texts.experienceTitle}
          </p>
        </div>
        <ul
          className="mt-10 flex items-end gap-[1.1%] border-b-2 border-stock/25 pb-3"
          aria-hidden="true"
        >
          {Array.from({ length: YEARS }, (_, index) => (
            <li
              key={index}
              className={`flex-1 origin-bottom transition-transform duration-300 ${
                (index + 1) % 5 === 0 ? "h-12 bg-stock/70" : "h-6 bg-stock/30"
              } ${index < count ? "scale-y-100" : "scale-y-0"}`}
            />
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stock/85 sm:text-xl">
          {texts.experienceText}
        </p>
      </div>
    </section>
  );
}
