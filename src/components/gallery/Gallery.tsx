import type { Texts } from "@/lib/texts";
import { connection } from "next/server";
import { getPhotos } from "@/lib/photos";
import { GalleryGrid } from "./GalleryGrid";

export async function Gallery({ texts }: { texts: Texts }) {
  await connection();
  const photos = await getPhotos();
  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="relative bg-slate grain">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <h2 className="display whitespace-pre-line text-[clamp(2.6rem,9vw,6.5rem)]">
              {texts.galleryTitle}
            </h2>
          </div>
          <p className="max-w-xs text-stock/80 sm:text-right">
            {texts.galleryText}
          </p>
        </div>

        <div className="relative mt-24 sm:mt-32">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="absolute bottom-full left-0 h-16 w-full text-spruce sm:h-24"
            aria-hidden="true"
          >
            <path
              d="M24 40 50 2 76 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="absolute bottom-full left-1/2 mb-[3.6rem] h-3 w-3 -translate-x-1/2 rotate-45 bg-spruce sm:mb-[5.6rem]" />
          <div className="frame bg-spruce p-3 sm:p-7">
            <GalleryGrid photos={photos} />
          </div>
        </div>

        <p className="caption mx-auto mt-10 w-fit bg-stock px-4 py-2 text-[0.65rem] text-spruce sm:text-xs">
          Klimax · Odbitki: {String(photos.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
