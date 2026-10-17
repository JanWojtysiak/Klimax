import type { Texts } from "@/lib/texts";
import { services } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

export function Services({ texts }: { texts: Texts }) {
  return (
    <section id="services" className="relative bg-stock text-spruce grain">
      <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-10 sm:pt-28">
        <h2 className="display whitespace-pre-line text-[clamp(2.6rem,9vw,6.5rem)]">
          {texts.servicesTitle}
        </h2>
      </div>
      <div className="relative mx-auto mt-12 max-w-6xl px-5 sm:px-10">
        <ul className="grid border-t-2 border-spruce/25 md:grid-cols-2">
          {services.map(({ name, icon }, index) => (
            <li
              key={name}
              className={`group flex items-center gap-5 border-b-2 border-spruce/25 py-7 transition-colors duration-200 hover:bg-spruce hover:text-stock sm:py-9 md:px-6 ${
                index % 2 === 0 ? "md:border-r-2" : ""
              }`}
            >
              <span className="caption shrink-0 text-[0.65rem] text-spruce/50 group-hover:text-stock/60 sm:text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display flex items-center gap-4 text-[clamp(1.4rem,5vw,2.6rem)] md:text-[clamp(1.25rem,2.6vw,2.4rem)]">
                  <ServiceIcon name={icon} />
                  {name}
                </h3>
                <p className="mt-2 text-base text-spruce/75 group-hover:text-stock/80">
                  {texts[`plate${index}Note`]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-10">
        <p className="max-w-2xl text-lg leading-relaxed text-spruce/80">
          {texts.servicesText}
        </p>
      </div>
    </section>
  );
}
