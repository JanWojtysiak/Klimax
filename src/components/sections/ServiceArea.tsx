import type { Texts } from "@/lib/texts";
import { distanceBands } from "@/data/service-area";
import { RangeRing } from "./RangeRing";

export function ServiceArea({ texts }: { texts: Texts }) {
  return (
    <section id="service-area" className="relative bg-stock text-spruce grain">
      <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-10 sm:pt-28">
        <h2 className="display whitespace-pre-line text-[clamp(2.6rem,9vw,6.5rem)]">
          {texts.areaTitle}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-spruce/80">
          {texts.areaText}
        </p>
      </div>

      <div className="relative mt-12">
        {distanceBands.map((band) => (
          <div key={band.range} className={band.tone}>
            <div className="mx-auto flex max-w-6xl items-start gap-5 px-5 py-8 sm:items-center sm:gap-10 sm:px-10">
              <RangeRing active={band.ring} />
              <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-10">
                <p
                  className={`display inline-flex shrink-0 self-start px-3 py-1 text-[clamp(1.6rem,4.5vw,2.6rem)] leading-none sm:self-auto sm:px-4 ${band.stamp}`}
                >
                  {band.range}
                </p>
                <p className="caption text-xs leading-relaxed sm:text-sm">
                  {band.towns.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
