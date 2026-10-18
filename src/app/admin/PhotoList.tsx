"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import type { Photo } from "@/lib/photos";
import { remove, rename, reorder } from "./actions";

const arrow = "ink-btn h-9 w-9 bg-spruce text-lg text-stock disabled:opacity-30";

export function PhotoList({ photos: initial }: { photos: Photo[] }) {
  const [photos, setPhotos] = useState(initial);
  const [dragged, setDragged] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const [pending, startTransition] = useTransition();

  const move = (from: number, to: number) => {
    if (from === to || to < 0 || to >= photos.length) return;
    const next = [...photos];
    next.splice(to, 0, next.splice(from, 1)[0]);
    setPhotos(next);
    startTransition(() => reorder(next.map((photo) => photo.file)));
  };

  const edit = (file: string, alt: string) => {
    const text = alt.trim();
    const photo = photos.find((item) => item.file === file);
    if (!text || !photo || photo.alt === text) return;
    setPhotos(photos.map((item) => (item.file === file ? { ...item, alt: text } : item)));
    startTransition(() => rename(file, text));
  };

  const drop = (file: string) => {
    if (!confirm("Usunąć to zdjęcie?")) return;
    setPhotos(photos.filter((photo) => photo.file !== file));
    startTransition(() => remove(file));
  };

  if (photos.length === 0) {
    return <p className="mt-10 text-stock/70">Nie ma jeszcze żadnych zdjęć.</p>;
  }

  return (
    <>
      <p className="mt-10 text-stock/70">
        Przeciągnij zdjęcie albo użyj strzałek, żeby zmienić kolejność. Pierwsze jest wyróżnione w galerii.
        {pending ? " Zapisuję…" : ""}
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <li
            key={photo.file}
            draggable
            onDragStart={() => setDragged(index)}
            onDragOver={(event) => {
              event.preventDefault();
              setOver(index);
            }}
            onDrop={() => dragged !== null && move(dragged, index)}
            onDragEnd={() => {
              setDragged(null);
              setOver(null);
            }}
            className={`cursor-grab bg-stock p-2 text-spruce transition ${
              dragged === index ? "opacity-40" : ""
            } ${over === index && dragged !== index ? "outline-4 outline-vermilion" : ""}`}
          >
            <div className="relative aspect-square">
              <Image
                src={`/photos/${photo.file}`}
                alt={photo.alt}
                fill
                draggable={false}
                sizes="(min-width: 1024px) 18rem, 45vw"
                className="object-cover"
              />
              <span className="caption absolute left-0 top-0 bg-spruce px-2 py-1 text-xs text-stock">
                Nr {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <textarea
              defaultValue={photo.alt}
              onBlur={(event) => edit(photo.file, event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  event.currentTarget.blur();
                }
              }}
              draggable={false}
              onDragStart={(event) => event.stopPropagation()}
              aria-label="Opis zdjęcia"
              maxLength={200}
              rows={2}
              className="mt-2 w-full resize-none border-2 border-spruce/20 bg-transparent px-2 py-1 text-sm leading-snug focus:border-spruce focus:outline-none"
            />
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => move(index, index - 1)}
                disabled={index === 0}
                aria-label="Przesuń wcześniej"
                className={arrow}
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => move(index, index + 1)}
                disabled={index === photos.length - 1}
                aria-label="Przesuń dalej"
                className={arrow}
              >
                →
              </button>
              <button
                type="button"
                onClick={() => drop(photo.file)}
                className="caption ml-auto text-xs text-vermilion"
              >
                Usuń
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
