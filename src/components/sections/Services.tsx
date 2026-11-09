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
              className={`group flex items-center gap-5 border-b-2 border-spruce/25 py-8 transition-colors duration-200 hover:bg-spruce hover:text-stock sm:py-10 md:px-6 ${
                index % 2 === 0 ? "md:border-r-2" : ""
              }`}
            >
              <span className="caption shrink-0 text-[0.65rem] text-spruce/50 group-hover:text-stock/60 sm:text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display flex items-center gap-4 text-[clamp(1.6rem,6vw,2.6rem)] md:text-[clamp(1.5rem,3vw,2.6rem)]">
                  <ServiceIcon name={icon} />
                  {name}
                </h3>
                <p className="mt-3 max-w-[38ch] leading-relaxed text-spruce/75 group-hover:text-stock/80">
                  {texts[`service${index}Text`]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-10 sm:py-16">
        <div className="services-note relative flex items-start gap-5 bg-spruce/5 py-6 pr-6 pl-7 sm:gap-6 sm:py-8 sm:pr-8 sm:pl-8">
          <span className="relative mt-1 shrink-0 text-[2.25rem] sm:text-[2.75rem]">
            <ServiceIcon name="heatPump" />
            <span className="absolute -top-4 -right-4 rounded-full bg-stock p-1 shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="services-note-bulb block h-6 w-6 text-ochre sm:h-7 sm:w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path
                  className="services-note-rays"
                  d="M12 1.5V3M4.6 4.2l1.1 1.1M19.4 4.2l-1.1 1.1M2 10h1.5M20.5 10H22"
                />
                <path
                  d="M9.5 15.5c0-1.2-.6-2-1.4-2.8a5 5 0 1 1 7.8 0c-.8.8-1.4 1.6-1.4 2.8Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <path d="M9.5 18h5M10.5 20.5h3" />
              </svg>
            </span>
          </span>
          <p className="text-lg leading-relaxed text-spruce sm:text-xl">
            {texts.servicesText}
          </p>
        </div>
      </div>
    </section>
  );
}
