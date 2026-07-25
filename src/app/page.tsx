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
    tone: "bg-ochre-light text-spruce",
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

        <section className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-10 sm:pt-28">
            <p className="caption text-xs text-spruce/70">Arkusz 02</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,9vw,6.5rem)]">
              Co robimy
            </h2>
          </div>
          <ul className="relative mt-12 border-t-2 border-spruce/25">
            {services.map(([name, note]) => (
              <li key={name} className="border-b-2 border-spruce/25">
                <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-7 transition-colors duration-150 hover:bg-spruce hover:text-stock sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-10">
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
            <p className="caption text-xs text-stock/70">Arkusz 03</p>
            <p
              className="display mt-2 leading-[0.78] text-vermilion"
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
            <p className="caption text-xs text-spruce/70">Arkusz 04</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,9vw,6.5rem)]">
              Jak daleko{" "}
              <br />
              dojeżdżamy
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-spruce/80">
              Pracujemy w promieniu około 30 kilometrów od Świebodzic.
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

          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-10">
            <p className="text-sm leading-relaxed text-spruce/70">
              Pasma odległości są orientacyjne. Jeśli Twojej miejscowości nie ma
              na liście, zadzwoń — najczęściej i tak dojedziemy.
            </p>
          </div>
        </section>

        <section className="relative bg-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
            <p className="caption text-xs text-stock/70">Arkusz 05</p>
            <h2 className="display mt-4 text-stock text-[clamp(2.6rem,9vw,6.5rem)]">
              Certyfikowany{" "}
              <br />
              instalator
            </h2>

            <ul className="display mt-12 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-stock text-[clamp(1.4rem,4.2vw,2.9rem)] sm:gap-x-6">
              {brands.map((brand, index) => (
                <li key={brand} className="flex items-baseline gap-x-4 sm:gap-x-6">
                  <span>{brand}</span>
                  {index < brands.length - 1 ? (
                    <span aria-hidden="true" className="text-vermilion">
                      ◆
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-14 flex flex-col items-start gap-10 border-t-2 border-stock/25 pt-10 sm:flex-row sm:items-center sm:gap-14">
              <svg
                viewBox="0 0 200 200"
                className="h-36 w-36 shrink-0 sm:h-44 sm:w-44"
                role="img"
                aria-label="Pieczęć uprawnień: SEP grupa 1, 2 i 3 oraz certyfikat F-Gaz"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="94"
                  fill="none"
                  stroke="#d8452a"
                  strokeWidth="4"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#d8452a"
                  strokeWidth="2"
                />
                <text
                  x="100"
                  y="82"
                  textAnchor="middle"
                  fill="#efe9da"
                  fontSize="30"
                  fontWeight="800"
                  fontFamily="var(--font-display)"
                  letterSpacing="1"
                >
                  SEP
                </text>
                <text
                  x="100"
                  y="118"
                  textAnchor="middle"
                  fill="#d8452a"
                  fontSize="34"
                  fontWeight="800"
                  fontFamily="var(--font-display)"
                  letterSpacing="2"
                >
                  1·2·3
                </text>
                <path d="M46 132 H154" stroke="#d8452a" strokeWidth="2" />
                <text
                  x="100"
                  y="156"
                  textAnchor="middle"
                  fill="#efe9da"
                  fontSize="26"
                  fontWeight="800"
                  fontFamily="var(--font-display)"
                  letterSpacing="2"
                >
                  F-GAZ
                </text>
              </svg>

              <div className="max-w-xl">
                <p className="text-lg leading-relaxed text-stock/85">
                  Posiadamy certyfikaty montażowe i serwisowe wymienionych
                  producentów, uprawnienia SEP grupy 1, 2 i 3 oraz certyfikat
                  F-Gaz.
                </p>
                <p className="mt-5 text-base leading-relaxed text-stock/70">
                  To znaczy, że montaż nie unieważnia gwarancji producenta, a
                  instalację elektryczną i czynnik chłodniczy obsługuje ktoś, kto
                  ma do tego papiery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
            <p className="caption text-xs text-spruce/70">Arkusz 06</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,9vw,6.5rem)]">
              Ekipa
            </h2>

            <div className="mt-10 border-2 border-dashed border-spruce/45 bg-slate/10">
              <div className="flex aspect-[16/7] flex-col items-center justify-center gap-4 px-6 text-center">
                <svg viewBox="0 0 60 60" className="h-12 w-12" aria-hidden="true">
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    fill="none"
                    stroke="#16332b"
                    strokeWidth="2"
                  />
                  <path d="M30 0 V60 M0 30 H60" stroke="#16332b" strokeWidth="2" />
                </svg>
                <p className="caption text-xs text-spruce/75 sm:text-sm">
                  Miejsce na zdjęcie Roberta i ekipy
                </p>
                <p className="max-w-md text-sm leading-relaxed text-spruce/70">
                  Materiał do dostarczenia. Do tego czasu zostawiamy pustą
                  ramkę — nie wstawiamy zdjęć z banku, które nie pokazują tej
                  firmy.
                </p>
              </div>
            </div>
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
