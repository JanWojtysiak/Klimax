import type { Texts } from "@/lib/texts";
import { PlateRail, railGrid } from "@/components/ui/PlateRail";
import { permits } from "@/data/permits";

export function PermitsPlate({ texts }: { texts: Texts }) {
  return (
    <div className="relative bg-slate grain">
      <div className={railGrid}>
        <PlateRail letter="B" closing />
        <div className="py-20 sm:py-28">
          <h2 className="display whitespace-pre-line text-stock text-[clamp(2.2rem,9vw,6.5rem)] min-[340px]:text-[clamp(2.6rem,9vw,6.5rem)]">
            {texts.permitsTitle}
          </h2>
          <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-stock/85">
            {texts.permitsText}
          </p>

          <div className="rule-diamond mt-12 text-stock/35">
            <span className="caption shrink-0 text-xs text-stock/80">
              04 uprawnienia
            </span>
          </div>
          <dl className="mt-8 grid border-b-2 border-stock/25 sm:grid-cols-2">
            {permits.map((permit, index) => (
              <div
                key={`${permit.family}-${index}`}
                className={`flex items-start gap-5 border-t-2 border-stock/25 py-7 pr-4 sm:gap-8 sm:py-9 ${
                  index % 2 === 0 ? "sm:border-r-2 sm:pr-10" : "sm:pl-10"
                }`}
              >
                <svg
                  viewBox="0 0 56 62"
                  aria-hidden="true"
                  className="mt-2 h-16 w-14 shrink-0 fill-stock/55 sm:h-20 sm:w-[4.5rem]"
                >
                  {permit.emblem}
                </svg>
                <div className="min-w-0">
                  <dt className="flex items-center gap-3 sm:gap-4">
                    <span className="display text-stock text-[clamp(1.6rem,5vw,2.6rem)]">
                      {permit.family}
                    </span>
                    <span className="display inline-flex h-[1.35em] min-w-[1.35em] items-center justify-center bg-stock px-2 text-slate text-[clamp(2.2rem,7vw,3.4rem)] leading-none">
                      {permit.stamp}
                    </span>
                  </dt>
                  <dd className="caption mt-5 text-[0.7rem] leading-relaxed text-stock/80 sm:text-xs">
                    {permit.scope}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
