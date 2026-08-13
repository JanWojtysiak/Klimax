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
    stamp: "bg-stock text-spruce",
    ring: 0,
    towns: ["Świebodzice", "Szczawno-Zdrój", "Świdnica"],
  },
  {
    range: "10–20 km",
    tone: "bg-slate text-stock",
    stamp: "bg-stock text-slate",
    ring: 1,
    towns: ["Wałbrzych", "Jaworzyna Śląska", "Dobromierz", "Strzegom", "Żarów"],
  },
  {
    range: "20–30 km",
    tone: "bg-ochre text-spruce",
    stamp: "bg-spruce text-ochre",
    ring: 2,
    towns: ["Bolków", "Boguszów-Gorce", "Jedlina-Zdrój", "Marcinowice", "Kamienna Góra"],
  },
];

const ringRadii = [20, 38, 56];

function RangeRing({ active }: { active: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-14 w-14 shrink-0 sm:h-20 sm:w-20"
      fill="none"
      stroke="currentColor"
    >
      {ringRadii.map((radius, index) => (
        <path
          key={radius}
          d={`M ${4 + radius} 60 A ${radius} ${radius} 0 0 0 4 ${60 - radius}`}
          strokeWidth={index === active ? 7 : 2}
          opacity={index === active ? 1 : 0.35}
        />
      ))}
      <path d="M4,54 L4,60 L10,60 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
  {
    family: "SEP",
    stamp: "1",
    scope: "Urządzenia, instalacje i sieci elektroenergetyczne",
    emblem: (
      <>
        <path d="M20,6 L36,6 L36,10 L20,10 Z" />
        <path d="M26,10 L30,10 L30,20 L26,20 Z" />
        <path
          d="M28,22 L18,36 L27,36 L24,50 L38,32 L29,32 Z"
          fillRule="evenodd"
        />
        <path d="M8,54 L48,54 L48,58 L8,58 Z" />
      </>
    ),
  },
  {
    family: "SEP",
    stamp: "2",
    scope: "Urządzenia wytwarzające i zużywające ciepło",
    emblem: (
      <>
        <path d="M12,8 L44,8 L44,40 L12,40 Z M18,14 L38,14 L38,34 L18,34 Z" />
        <path d="M22,44 L26,44 L26,58 L22,58 Z" />
        <path d="M30,44 L34,44 L34,58 L30,58 Z" />
        <path d="M6,20 L12,20 L12,24 L6,24 Z M44,20 L50,20 L50,24 L44,24 Z" />
      </>
    ),
  },
  {
    family: "SEP",
    stamp: "3",
    scope: "Urządzenia i instalacje gazowe",
    emblem: (
      <>
        <path d="M28,4 L40,20 L40,34 L16,34 L16,20 Z M24,20 L32,20 L32,30 L24,30 Z" />
        <path d="M14,36 L42,36 L42,40 L14,40 Z" />
        <path d="M20,44 L24,44 L24,58 L20,58 Z" />
        <path d="M32,44 L36,44 L36,58 L32,58 Z" />
      </>
    ),
  },
  {
    family: "F-Gaz",
    stamp: (
      <svg viewBox="0 0 56 56" aria-hidden="true" className="h-[0.62em] w-[0.62em]">
        <path
          fill="currentColor"
          d="M25,2 L31,2 L31,54 L25,54 Z M2,15 L54,15 L54,21 L2,21 Z M2,35 L54,35 L54,41 L2,41 Z"
          transform="rotate(45 28 28)"
        />
      </svg>
    ),
    scope: "Czynniki chłodnicze i układy chłodnicze",
    emblem: (
      <>
        <path d="M10,10 L46,10 L46,14 L10,14 Z" />
        <path d="M14,18 L18,18 L18,44 L14,44 Z" />
        <path d="M38,18 L42,18 L42,44 L38,44 Z" />
        <path d="M22,24 L34,24 L34,28 L22,28 Z M22,34 L34,34 L34,38 L22,38 Z" />
        <path d="M10,48 L46,48 L46,52 L10,52 Z" />
      </>
    ),
  },
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
                          className={`display flex items-baseline gap-3 border-t-2 border-stock/20 py-4 pr-2 text-stock sm:gap-5 sm:py-6 sm:pr-6 lg:py-7 ${
                            index === 0
                              ? "col-span-2 justify-between text-[clamp(2rem,9vw,3.75rem)] lg:text-[clamp(2.5rem,5.6vw,5.25rem)]"
                              : `text-[clamp(1.6rem,7vw,3rem)] lg:text-[clamp(2rem,4.4vw,4rem)] ${
                                  index % 2 === 1
                                    ? "border-r-2 pr-4 sm:pr-8 lg:pr-10"
                                    : "pl-4 sm:pl-8 lg:pl-10"
                                }`
                          }`}
                        >
                          <span className="flex items-baseline gap-3 sm:gap-5">
                            <span className="caption shrink-0 text-[0.6rem] text-stock/45 sm:text-[0.7rem]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {brand}
                          </span>
                          {index === 0 ? (
                            <RegisterMark className="h-4 w-4 shrink-0 self-center text-stock/45 sm:h-5 sm:w-5" />
                          ) : null}
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
            <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-2">
              <p
                className="display inline-flex items-center bg-stock px-5 leading-[0.78] text-spruce sm:px-8"
                style={{ fontSize: "clamp(9rem, 34vw, 22rem)" }}
              >
                25
              </p>
              <p className="display pb-3 text-stock text-[clamp(2.4rem,9vw,5.5rem)] leading-[0.85] sm:pb-6">
                lat
                <br />
                doświadczenia
              </p>
            </div>
            <ul
              className="mt-10 flex items-end gap-[1.1%] border-b-2 border-stock/25 pb-3"
              aria-hidden="true"
            >
              {Array.from({ length: 25 }, (_, index) => (
                <li
                  key={index}
                  className={`flex-1 ${
                    (index + 1) % 5 === 0 ? "h-12 bg-stock/70" : "h-6 bg-stock/30"
                  }`}
                />
              ))}
            </ul>
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
