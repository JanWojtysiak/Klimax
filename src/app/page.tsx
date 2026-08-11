import Image from "next/image";
import SheetHero from "@/components/SheetHero";
import ContactSheet from "@/components/ContactSheet";

const services = [
  ["Pompy ciepła", "Dobór, montaż i serwis."],
  ["Klimatyzacja", "Montaż i przeglądy."],
  ["Rekuperacja", "Wentylacja z odzyskiem ciepła."],
  ["Instalacje elektryczne", "Wykonanie i modernizacja."],
  ["Instalacje wod-kan", "Woda i kanalizacja."],
  ["Ogrzewanie podłogowe", "Wykonanie instalacji."],
];

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
              <div className="py-20 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8 sm:py-28 lg:gap-x-14">
                <div className="sm:col-span-2 sm:row-start-1">
                  <p className="caption text-xs text-stock/70">Arkusz 02</p>
                  <h2 className="display mt-4 text-stock text-[clamp(2.2rem,9vw,6.5rem)] min-[340px]:text-[clamp(2.6rem,9vw,6.5rem)]">
                    Certyfikowany{" "}
                    <br />
                    instalator
                  </h2>
                </div>

                <div className="mt-7 sm:col-span-2 sm:row-start-2 lg:col-span-1 lg:col-start-1 lg:row-start-3 lg:self-end">
                  <p className="max-w-[54ch] text-lg leading-relaxed text-stock/85">
                    Mamy firmowe certyfikaty montażowe i serwisowe wymienionych
                    producentów. To znaczy, że montaż nie unieważnia gwarancji
                    urządzenia.
                  </p>
                  <p className="display mt-14 text-stock text-[clamp(1.5rem,4.4vw,3rem)] lg:mt-16">
                    <span className="lg:block">Robert </span>
                    Wojtysiak
                  </p>
                  <p className="caption mt-3 text-xs text-stock/70">Właściciel</p>
                </div>

                <Image
                  src="/instalator.png"
                  alt="Robert Wojtysiak przy jednostce klimatyzacji"
                  width={899}
                  height={1131}
                  sizes="(min-width: 1024px) min(38vw, 26rem), (min-width: 640px) 26rem, 100vw"
                  className="mt-10 ml-auto block h-auto w-full max-w-[22rem] sm:col-span-2 sm:row-start-3 sm:max-w-[26rem] lg:col-span-1 lg:col-start-2 lg:row-start-3 lg:mt-0 lg:w-[min(38vw,26rem)] lg:max-w-none lg:self-end"
                />

                <div className="sm:col-span-2 sm:row-start-4">
                  <div className="rule-diamond text-stock/35">
                    <span className="caption shrink-0 text-xs text-stock/80">
                      09 producentów
                    </span>
                  </div>
                  <ul className="mt-8 grid grid-cols-3 border-b-2 border-stock/20">
                    {brands.map((brand) => (
                      <li
                        key={brand}
                        className="display border-t-2 border-stock/20 py-4 pr-2 text-stock text-[clamp(1rem,3.6vw,2.75rem)] sm:pr-6 sm:py-5"
                      >
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>
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
            {services.map(([name, note]) => (
              <li key={name} className="border-b-2 border-spruce/25">
                <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-10">
                  <h3 className="display text-[clamp(1.9rem,5.5vw,3.4rem)]">
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
