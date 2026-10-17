import type { Texts } from "@/lib/texts";
import Image from "next/image";
import { PlateRail, railGrid } from "@/components/ui/PlateRail";
import { BrandList } from "./BrandList";

export function InstallerPlate({ texts }: { texts: Texts }) {
  return (
    <div className="relative bg-spruce grain">
      <div className={railGrid}>
        <PlateRail letter="A" />
        <div className="flex flex-col py-20 sm:py-28 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-14">
          <div className="lg:col-span-2">
            <h2 className="display whitespace-pre-line text-stock text-[clamp(2.2rem,9vw,6.5rem)] min-[340px]:text-[clamp(2.6rem,9vw,6.5rem)]">
              {texts.installerTitle}
            </h2>
          </div>

          <div className="contents lg:col-start-1 lg:row-start-2 lg:mt-10 lg:flex lg:flex-col">
            <p className="mt-7 max-w-[54ch] text-lg lg:mt-0 leading-relaxed text-stock/85">
              {texts.installerText}
            </p>

            <div className="order-last mt-12 lg:order-none lg:mt-12">
              <BrandList />
            </div>
          </div>

          <figure className="relative mt-10 max-md:hidden flex w-full max-w-[26rem] flex-col items-start lg:col-start-2 lg:w-auto lg:max-w-none lg:row-start-2 lg:-mt-40 lg:self-end">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 h-3/4 w-[62%] -translate-y-1/2 rounded-full bg-stock/15 blur-3xl lg:w-[min(34vw,28rem)]"
            />
            <Image
              src="/instalator.png"
              alt="Robert Wojtysiak przy jednostce klimatyzacji"
              width={899}
              height={1131}
              sizes="(min-width: 1024px) min(34vw, 28rem), 62vw"
              className="relative block h-auto w-[62%] shrink-0 drop-shadow-[0_0_1px_rgba(239,233,218,0.6)] lg:w-[min(34vw,28rem)] lg:max-w-none"
            />
            <figcaption className="absolute bottom-2 right-0 lg:relative lg:bottom-auto lg:right-auto lg:mt-6 lg:w-full lg:border-t-2 lg:border-stock/20 lg:pt-6">
              <p className="display pt-[1.3em] text-stock [text-shadow:0_2px_14px_#16332b] text-[clamp(1.8rem,8vw,4.4rem)] leading-[0.95]">
                <span className="relative inline-block">
                  Robert
                  <svg
                    aria-hidden
                    viewBox="0 0 80 84"
                    className="mascot absolute bottom-[0.14em] left-[calc(100%-0.85em)] h-[2.3em] w-[2.2em] overflow-visible"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M38 62 20 56 9 64" stroke="#16332b" strokeWidth="9" />
                    <path d="M38 62 20 56 9 64" stroke="#efe9da" strokeWidth="5" />
                    <g className="mascot-point">
                      <path d="M38 50 24 40 10 24" stroke="#16332b" strokeWidth="9" />
                      <path d="M38 50 24 40 10 24" stroke="#efe9da" strokeWidth="5" />
                      <path d="M10 24 6 17" stroke="#16332b" strokeWidth="6" />
                      <path d="M10 24 6 17" stroke="#efe9da" strokeWidth="3" />
                      <circle cx="10" cy="24" r="4" fill="#efe9da" stroke="#16332b" strokeWidth="2" />
                    </g>
                    <circle cx="9" cy="65" r="4.5" fill="#efe9da" stroke="#16332b" strokeWidth="2" />
                    <rect x="36" y="28" width="28" height="54" rx="14" fill="#efe9da" stroke="#16332b" strokeWidth="2" />
                    <path d="M37 64h26a13 13 0 0 1-13 17 13 13 0 0 1-13-17Z" fill="#2e5567" />
                    <rect x="42" y="58" width="16" height="9" rx="2" fill="#2e5567" />
                    <circle cx="50" cy="63" r="1.8" fill="#c0803a" />
                    <rect x="36" y="40" width="28" height="4" fill="#16332b" />
                    <circle cx="44" cy="42" r="5.5" fill="#efe9da" stroke="#16332b" strokeWidth="2.5" />
                    <circle cx="56" cy="42" r="5.5" fill="#efe9da" stroke="#16332b" strokeWidth="2.5" />
                    <g className="mascot-blink">
                      <circle cx="42.3" cy="40.3" r="2.2" fill="#16332b" />
                      <circle cx="54.3" cy="40.3" r="2.2" fill="#16332b" />
                    </g>
                    <path d="M45 52q4 3.5 8 0" stroke="#16332b" strokeWidth="2" />
                    <g className="mascot-hat">
                      <path d="M34 30q0-16 16-16t16 16Z" fill="#c0803a" />
                      <rect x="30" y="27" width="40" height="4.5" rx="2.25" fill="#c0803a" />
                    </g>
                  </svg>
                </span>
                <span className="block">Wojtysiak</span>
              </p>
              <p className="caption mt-3 text-xs text-ochre sm:text-sm">Właściciel</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
