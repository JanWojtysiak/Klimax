import Image from "next/image";
import { PlateRail, railGrid } from "@/components/ui/PlateRail";
import { BrandList } from "./BrandList";

export function InstallerPlate() {
  return (
    <div className="relative bg-spruce grain">
      <div className={railGrid}>
        <PlateRail letter="A" />
        <div className="py-20 sm:py-28 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-14">
          <div className="lg:col-span-2">
            <p className="caption text-xs text-stock/70">Arkusz 02</p>
            <h2 className="display mt-4 text-stock text-[clamp(2.2rem,9vw,6.5rem)] min-[340px]:text-[clamp(2.6rem,9vw,6.5rem)]">
              Certyfikowany <br />
              instalator
            </h2>
          </div>

          <div className="mt-7 lg:col-start-1 lg:row-start-2 lg:mt-10 lg:flex lg:flex-col">
            <p className="max-w-[54ch] text-lg leading-relaxed text-stock/85">
              Mamy firmowe certyfikaty montażowe i serwisowe wymienionych
              producentów. To znaczy, że montaż nie unieważnia gwarancji
              urządzenia.
            </p>

            <div className="mt-12 lg:mt-auto lg:pt-12">
              <div className="rule-diamond text-stock/35">
                <span className="caption shrink-0 text-xs text-stock/80">
                  09 producentów
                </span>
              </div>
              <BrandList />
            </div>
          </div>

          <figure className="mt-12 flex items-end gap-6 sm:gap-10 lg:col-start-2 lg:row-start-2 lg:mt-10 lg:block lg:self-end">
            <Image
              src="/instalator.png"
              alt="Robert Wojtysiak przy jednostce klimatyzacji"
              width={899}
              height={1131}
              sizes="(min-width: 1024px) min(26vw, 20rem), 52vw"
              className="block h-auto w-[52%] max-w-[17rem] shrink-0 lg:w-[min(26vw,20rem)] lg:max-w-none"
            />
            <figcaption className="pb-2 lg:pb-0">
              <p className="display text-stock text-[clamp(1.5rem,4.4vw,3rem)] lg:mt-7">
                <span className="block">Robert </span>
                Wojtysiak
              </p>
              <p className="caption mt-3 text-xs text-stock/70">Właściciel</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
