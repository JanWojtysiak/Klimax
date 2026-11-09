"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "@/lib/photos";

const number = (index: number) => String(index + 1).padStart(2, "0");

const MOBILE_LIMIT = 6;

const spanClasses = {
  base: {
    col: ["", "col-span-1", "col-span-2", "col-span-3"],
    row: ["", "row-span-1", "row-span-2"],
  },
  lg: {
    col: ["", "lg:col-span-1", "lg:col-span-2", "lg:col-span-3", "lg:col-span-4"],
    row: ["", "lg:row-span-1", "lg:row-span-2"],
  },
};

function span(index: number, count: number, cols: number, bigFrom: number) {
  const big = count >= bigFrom;
  if (index === 0 && big) return { col: 2, row: 2 };
  const rem = ((big ? 4 : 1) + count - 1) % cols;
  if (index === count - 1 && rem) return { col: cols - rem + 1, row: 1 };
  return { col: 1, row: 1 };
}

function tile(index: number, count: number) {
  const visible = Math.min(count, MOBILE_LIMIT);
  const lg = span(index, count, 4, 5);
  const base = index < visible ? span(index, visible, 3, 3) : null;
  return {
    className: [
      base
        ? `${spanClasses.base.col[base.col]} ${spanClasses.base.row[base.row]}`
        : "hidden lg:block",
      spanClasses.lg.col[lg.col],
      spanClasses.lg.row[lg.row],
    ].join(" "),
    sizes: `(min-width: 1024px) ${lg.col * 15}rem, ${(base?.col ?? 1) * 25}vw`,
  };
}

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const photo = photos[active];
  const tiles = photos.map((_, index) => tile(index, photos.length));

  const open = (index: number) => {
    setActive(index);
    dialog.current?.showModal();
  };
  const step = (delta: number) =>
    setActive((index) => (index + delta + photos.length) % photos.length);

  return (
    <>
      <ul className="grid auto-rows-[25vw] grid-cols-3 gap-2 sm:auto-rows-[22vw] sm:gap-4 lg:auto-rows-[15rem] lg:grid-cols-4 lg:gap-5">
        {photos.map((item, index) => (
          <li
            key={item.file}
            className={tiles[index].className}
          >
            <button
              type="button"
              onClick={() => open(index)}
              className="proof flex h-full w-full flex-col bg-stock p-1.5 text-left text-spruce sm:p-2 lg:p-3"
            >
              <span className="relative block min-h-0 flex-1 overflow-hidden">
                <Image
                  src={`/photos/${item.file}`}
                  alt={item.alt}
                  fill
                  sizes={tiles[index].sizes}
                  className="object-cover"
                />
                <span className="proof-ink absolute inset-0">
                  <Image
                    src={`/photos/${item.file}`}
                    alt=""
                    fill
                    sizes={tiles[index].sizes}
                    className="object-cover grayscale contrast-125"
                  />
                  <span className="absolute inset-0 bg-slate mix-blend-multiply" />
                </span>
                {index === MOBILE_LIMIT - 1 && photos.length > MOBILE_LIMIT ? (
                  <span className="display absolute inset-0 flex items-center justify-center bg-spruce/80 text-4xl text-stock lg:hidden">
                    +{photos.length - MOBILE_LIMIT}
                  </span>
                ) : null}
              </span>
              <span className="caption hidden items-baseline gap-2 pt-2 text-[0.7rem] lg:flex">
                <span className="shrink-0 text-slate">Nr {number(index)}</span>
                <span className="truncate">{item.alt}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-[92vh] w-[min(94vw,80rem)] max-w-none bg-stock p-3 text-spruce backdrop:bg-spruce/90 sm:p-4"
      >
        {photo ? (
          <div className="flex h-full flex-col">
            <div className="relative min-h-0 flex-1">
              <Image
                key={photo.file}
                src={`/photos/${photo.file}`}
                alt={photo.alt}
                fill
                sizes="94vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="caption min-w-0 text-xs leading-snug sm:text-sm">
                <span className="text-slate">Nr {number(active)}</span>{" "}
                {photo.alt}
              </p>
              <div className="flex shrink-0 gap-2">
                {photos.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Poprzednie zdjęcie"
                      className="ink-btn h-11 w-11 bg-spruce text-2xl text-stock"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Następne zdjęcie"
                      className="ink-btn h-11 w-11 bg-spruce text-2xl text-stock"
                    >
                      →
                    </button>
                  </>
                ) : null}
                <button
                  type="button"
                  onClick={() => dialog.current?.close()}
                  className="ink-btn h-11 bg-spruce px-5 text-lg text-stock"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
