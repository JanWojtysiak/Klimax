import { services } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

export function Services() {
  return (
    <section id="services" className="relative bg-stock text-spruce grain">
      <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-10 sm:pt-28">
        <p className="caption text-xs text-spruce/70">Arkusz 03</p>
        <h2 className="display mt-4 text-[clamp(2.6rem,9vw,6.5rem)]">
          Co robimy
        </h2>
      </div>
      <ul className="relative mt-12 border-t-2 border-spruce/25">
        {services.map(({ name, note, icon }) => (
          <li
            key={name}
            className="group border-b-2 border-spruce/25 transition-colors duration-200 hover:bg-spruce hover:text-stock"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-10">
              <h3 className="display flex items-center gap-4 text-[clamp(1.9rem,5.5vw,3.4rem)]">
                <ServiceIcon name={icon} />
                {name}
              </h3>
              <p className="caption shrink-0 text-xs opacity-80 sm:text-sm">
                {note}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-10">
        <p className="max-w-2xl text-lg leading-relaxed text-spruce/80">
          Pompa ciepła to dziś nasza główna robota, ale dom to jedna instalacja
          — elektryka, woda i wentylacja muszą do siebie pasować. Robimy je pod
          jednym adresem.
        </p>
      </div>
    </section>
  );
}
