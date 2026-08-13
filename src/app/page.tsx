import type { ReactNode } from "react";
import Image from "next/image";
import SheetHero from "@/components/SheetHero";
import ContactSheet from "@/components/ContactSheet";

const services: [string, string, string][] = [
  ["Pompy ciepła", "Dobór, montaż i serwis.", "heatPump"],
  ["Klimatyzacja", "Montaż i przeglądy.", "ac"],
  ["Rekuperacja", "Wentylacja z odzyskiem ciepła.", "recuperation"],
  ["Instalacje elektryczne", "Wykonanie i modernizacja.", "electric"],
  ["Instalacje wod-kan", "Woda i kanalizacja.", "water"],
  ["Ogrzewanie podłogowe", "Wykonanie instalacji.", "floor"],
];

const serviceIcons: Record<string, ReactNode> = {
  heatPump: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" />
      <circle cx="9" cy="12" r="3.6" />
      <path d="M9 8.4V12h3.6M16 8.5h3M16 12h3M16 15.5h3" />
    </>
  ),
  ac: (
    <>
      <rect x="2.5" y="4.5" width="19" height="6.5" />
      <path d="M6 8h8" />
      <path d="M6 14.5 9 17l3-2.5M12 14.5 15 17l3-2.5M6 18.5 9 21l3-2.5M12 18.5 15 21l3-2.5" />
    </>
  ),
  recuperation: (
    <>
      <rect x="7.5" y="7.5" width="9" height="9" />
      <path d="M7.5 10H2.5M2.5 10V4M16.5 14h5M21.5 14v6" />
      <path d="M4.5 6.5 2.5 4 .8 6.5M19.5 17.5l2 2.5 1.7-2.5" />
    </>
  ),
  electric: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" />
      <path d="M13.5 6 9.5 12.5h5L10.5 18" />
    </>
  ),
  water: (
    <>
      <path d="M12 3.5c3 4 5 6.6 5 9a5 5 0 0 1-10 0c0-2.4 2-5 5-9Z" />
      <path d="M12 12.5v4" />
    </>
  ),
  floor: (
    <>
      <path d="M2.5 19.5h19" />
      <path d="M3.5 16V7.5h3.4V16h3.4V7.5h3.4V16h3.4V7.5h3.4V16" />
    </>
  ),
};

const serviceIconColors: Record<string, string> = {
  heatPump: "text-vermilion",
  ac: "text-slate",
  recuperation: "text-spruce/70 group-hover:text-stock/80",
  electric: "text-ochre",
  water: "text-slate",
  floor: "text-vermilion",
};

function ServiceIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-[1em] w-[1em] shrink-0 ${serviceIconColors[name]}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {serviceIcons[name]}
    </svg>
  );
}

const bands = [
  {
    range: "0–10 km",
    tone: "bg-spruce text-stock",
    towns: ["Świebodzice", "Szczawno-Zdrój", "Świdnica"],
  },
  {
    range: "10–20 km",
    tone: "bg-slate text-stock",
    towns: ["Wałbrzych", "Jaworzyna Śląska", "Dobromierz", "Strzegom", "Żarów"],
  },
  {
    range: "20–30 km",
    tone: "bg-ochre text-spruce",
    towns: ["Bolków", "Boguszów-Gorce", "Jedlina-Zdrój", "Marcinowice", "Kamienna Góra"],
  },
];

const brands = [
  "Rotenso",
  "Panasonic",
  "Atlantic",
  "Gree",
  "Kaisai",
  "Midea",
  "Fuji",
  "Daikin",
  "Vaillant",
];

const permits = [
  ["SEP 1", "Urządzenia, instalacje i sieci elektroenergetyczne"],
  ["SEP 2", "Urządzenia wytwarzające i zużywające ciepło"],
  ["SEP 3", "Urządzenia i instalacje gazowe"],
  ["F-Gaz", "Czynniki chłodnicze i układy chłodnicze"],
];

const railGrid =
  "relative mx-auto grid max-w-6xl grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 px-5 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-x-10 sm:px-10";

function RegisterMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0V7M12 17V24M0 12H7M17 12H24"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 7.5 16.5 12 12 16.5 7.5 12Z" fill="currentColor" />
    </svg>
  );
}

function PlateRail({ letter, closing }: { letter: string; closing?: boolean }) {
  const mark = "h-4 w-4 shrink-0 sm:h-5 sm:w-5";
  return (
    <div className="flex flex-col items-center border-r-2 border-stock/25 py-20 text-stock/65 sm:py-28">
      <RegisterMark className={mark} />
      <span className="plate-mark mt-5 text-[0.72rem] sm:text-[0.95rem]">
        Płyta {letter}
      </span>
      {closing ? <RegisterMark className={`${mark} mt-auto`} /> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#kontakt"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-vermilion focus:px-5 focus:py-3 focus:text-stock"
      >
        Przejdź do kontaktu
      </a>

      <main className="flex-1">
        <SheetHero />

        <section className="relative">
          <div className="relative bg-spruce grain">
            <div className={railGrid}>
              <PlateRail letter="A" />
              <div className="py-20 sm:py-28 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-14">
                <div className="lg:col-span-2">
                  <p className="caption text-xs text-stock/70">Arkusz 02</p>
                  <h2 className="display mt-4 text-stock text-[clamp(2.2rem,9vw,6.5rem)] min-[340px]:text-[clamp(2.6rem,9vw,6.5rem)]">
                    Certyfikowany{" "}
                    <br />
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
                    <ul className="mt-8 grid grid-cols-2 border-b-2 border-stock/20">
                      {brands.map((brand, index) => (
                        <li
                          key={brand}
                          className={`display flex items-baseline gap-3 border-t-2 border-stock/20 py-4 pr-2 text-stock text-[clamp(1.6rem,7vw,3rem)] last:col-span-2 last:border-r-0 sm:gap-5 sm:py-6 sm:pr-6 lg:py-7 lg:text-[clamp(2rem,4.4vw,4rem)] ${
                            index % 2 === 0
                              ? "border-r-2 pr-4 sm:pr-8 lg:pr-10"
                              : "pl-4 sm:pl-8 lg:pl-10"
                          }`}
                        >
                          <span className="caption shrink-0 text-[0.6rem] text-stock/45 sm:text-[0.7rem]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {brand}
                        </li>
                      ))}
                    </ul>
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
                    <p className="caption mt-3 text-xs text-stock/70">
                      Właściciel
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="relative bg-slate grain">
            <div className={railGrid}>
              <PlateRail letter="B" closing />
              <div className="py-20 sm:py-28">
                <h2 className="display text-stock text-[clamp(2.2rem,9vw,6.5rem)] min-[340px]:text-[clamp(2.6rem,9vw,6.5rem)]">
                  Uprawnienia{" "}
                  <br />
                  zawodowe
                </h2>
                <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-stock/85">
                  Instalację elektryczną i czynnik chłodniczy obsługuje u nas
                  ktoś, kto ma do tego uprawnienia wymagane prawem.
                </p>

                <div className="rule-diamond mt-12 text-stock/35">
                  <span className="caption shrink-0 text-xs text-stock/80">
                    04 uprawnienia
                  </span>
                </div>
                <dl className="mt-8 grid border-b-2 border-stock/25 sm:grid-cols-2">
                  {permits.map(([code, scope], index) => (
                    <div
                      key={code}
                      className={`border-t-2 border-stock/25 py-7 pr-4 sm:py-9 ${
                        index % 2 === 0 ? "sm:border-r-2 sm:pr-10" : "sm:pl-10"
                      }`}
                    >
                      <dt className="display text-stock text-[clamp(4.5rem,13vw,8rem)]">
                        {code}
                      </dt>
                      <dd className="caption mt-5 text-[0.7rem] leading-relaxed text-stock/80 sm:text-xs">
                        {scope}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-10 sm:pt-28">
            <p className="caption text-xs text-spruce/70">Arkusz 03</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,9vw,6.5rem)]">
              Co robimy
            </h2>
          </div>
          <ul className="relative mt-12 border-t-2 border-spruce/25">
            {services.map(([name, note, icon]) => (
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
              Pompa ciepła to dziś nasza główna robota, ale dom to jedna
              instalacja — elektryka, woda i wentylacja muszą do siebie pasować.
              Robimy je pod jednym adresem.
            </p>
          </div>
        </section>

        <section className="relative bg-spruce grain">
          <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-10">
            <p className="caption text-xs text-stock/70">Arkusz 04</p>
            <p
              className="display mt-2 leading-[0.78] text-stock"
              style={{ fontSize: "clamp(9rem, 40vw, 26rem)" }}
            >
              25
            </p>
            <div className="rule-diamond mt-6 text-stock/45">
              <span className="caption shrink-0 text-xs text-stock sm:text-sm">
                lat doświadczenia
              </span>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stock/85 sm:text-xl">
              Ćwierć wieku przy różnorodnych instalacjach w firmach i u klientów
              prywatnych. Przez ten czas zmieniły się kotły, przepisy i urządzenia
              — a jakość została ta sama.
            </p>
          </div>
        </section>

        <section className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-10 sm:pt-28">
            <p className="caption text-xs text-spruce/70">Arkusz 05</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,9vw,6.5rem)]">
              Jak daleko{" "}
              <br />
              dojeżdżamy
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-spruce/80">
              Pracujemy w promieniu około 30 kilometrów od Świebodzic. Pasma są
              orientacyjne — jeśli Twojej miejscowości nie ma na liście, zadzwoń,
              najczęściej i tak dojedziemy.
            </p>
          </div>

          <div className="relative mt-12">
            {bands.map((band) => (
              <div key={band.range} className={`${band.tone}`}>
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:gap-10 sm:px-10">
                  <p className="display shrink-0 text-[clamp(1.6rem,4.5vw,2.6rem)]">
                    {band.range}
                  </p>
                  <p className="caption text-xs leading-relaxed sm:text-sm">
                    {band.towns.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactSheet />
      </main>

      <footer className="bg-stock text-spruce">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="caption text-xs">Klimax · Robert Wojtysiak</p>
          <p className="text-sm text-spruce/75">
            Świebodzice ·{" "}
            <a href="tel:+48601573887" className="underline underline-offset-4">
              +48 601 573 887
            </a>{" "}
            ·{" "}
            <a
              href="mailto:biuro@klimax.co.pl"
              className="underline underline-offset-4"
            >
              biuro@klimax.co.pl
            </a>
          </p>
        </div>
      </footer>

      <div className="sticky bottom-0 z-40 bg-vermilion md:hidden">
        <a
          href="tel:+48601573887"
          className="ink-btn w-full px-5 py-4 text-xl text-stock"
        >
          Zadzwoń +48 601 573 887
        </a>
      </div>
    </>
  );
}
