import { RegisterMark } from "@/components/ui/RegisterMark";
import { brands } from "@/data/brands";

export function BrandList() {
  return (
    <ul className="mt-8 grid grid-cols-2 border-b-2 border-stock/20">
      {brands.map((brand, index) => (
        <li
          key={brand.name}
          className={`display border-t-2 border-stock/20 text-stock ${
            index === 0
              ? "col-span-2"
              : index % 2 === 1
                ? "border-r-2"
                : ""
          }`}
        >
          <a
            href={brand.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center justify-between gap-4 pr-2 transition-colors duration-200 focus-visible:outline-none sm:gap-6 sm:pr-6 ${
              index === 0
                ? "py-7 leading-[1.06] sm:py-9 lg:py-11 text-[clamp(2.4rem,13vw,4.5rem)] lg:text-[clamp(3rem,12vw,9.5rem)]"
                : `py-4 sm:py-6 lg:py-7 text-[clamp(1.6rem,7vw,3rem)] lg:text-[clamp(2rem,4.4vw,3.7rem)] ${
                    index % 2 === 1
                      ? "pr-4 hover:bg-stock focus-visible:bg-stock sm:pr-8 lg:pr-10"
                      : "pl-4 hover:bg-ochre focus-visible:bg-ochre sm:pl-8 lg:pl-10"
                  }`
            }`}
          >
            <span className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
              <span
                className={`caption shrink-0 text-[0.6rem] sm:text-[0.7rem] ${
                  index === 0
                    ? "text-stock/45 group-hover:text-ochre"
                    : "text-stock/45 group-hover:text-spruce/60"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`relative ${
                  index === 0 ? "h-[0.62em] w-[86%]" : "h-[0.7em] w-full"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`brand-logo absolute inset-0 transition-colors duration-200 ${
                    index === 0
                      ? "text-stock group-hover:text-ochre"
                      : index % 2 === 1
                        ? "text-stock group-hover:text-spruce"
                        : "text-ochre group-hover:text-spruce"
                  }`}
                  style={{
                    maskImage: `url(${brand.logo})`,
                    WebkitMaskImage: `url(${brand.logo})`,
                  }}
                />
                {brand.mark ? (
                  <span
                    aria-hidden="true"
                    className="brand-logo absolute inset-0 text-ochre transition-colors duration-200 group-hover:text-stock"
                    style={{
                      maskImage: `url(${brand.mark})`,
                      WebkitMaskImage: `url(${brand.mark})`,
                    }}
                  />
                ) : null}
              </span>
              <span className="sr-only">{brand.name}</span>
            </span>
            {index === 0 ? (
              <RegisterMark className="h-4 w-4 shrink-0 text-stock/45 group-hover:text-ochre sm:h-5 sm:w-5" />
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
