"use client";

import { useState } from "react";

const services = [
  "Pompy ciepła",
  "Klimatyzacja",
  "Rekuperacja",
  "Instalacje elektryczne",
  "Instalacje wod-kan",
  "Ogrzewanie podłogowe",
];

export default function ContactSheet() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Imię i nazwisko: ${data.get("imie")}`,
      `Telefon: ${data.get("telefon")}`,
      `Miejscowość: ${data.get("miejscowosc")}`,
      `Zakres: ${data.get("zakres")}`,
      "",
      String(data.get("wiadomosc") ?? ""),
    ].join("\n");
    window.location.href = `mailto:biuro@klimax.co.pl?subject=${encodeURIComponent(
      `Zapytanie: ${data.get("zakres")}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full border-2 border-spruce bg-stock px-4 py-3 text-base text-spruce placeholder:text-spruce/55 focus:outline-none focus:ring-4 focus:ring-vermilion/45";
  const label = "caption block text-xs text-stock/80";

  return (
    <section id="kontakt" className="relative bg-spruce grain">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
        <p className="caption text-xs text-stock/70">Arkusz 07</p>
        <h2 className="display mt-4 text-stock text-[clamp(2.6rem,9vw,6.5rem)]">
          Napisz albo
          <br />
          zadzwoń
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-stock/85">
              Najszybciej załatwimy sprawę przez telefon — Robert odbiera osobiście
              i powie, czy Twój dom nadaje się pod pompę ciepła.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+48601573887"
                className="display block text-vermilion text-[clamp(1.9rem,6vw,3.1rem)] hover:text-stock"
              >
                +48 601 573 887
              </a>
              <a
                href="mailto:biuro@klimax.co.pl"
                className="block text-lg text-stock underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion"
              >
                biuro@klimax.co.pl
              </a>
            </div>

            <div className="mt-10 border-t-2 border-stock/25 pt-6">
              <p className="caption text-xs text-stock/70">Obszar</p>
              <p className="mt-2 text-base text-stock/85">
                Świebodzice i okolice w promieniu około 30 km.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="imie">
                  Imię i nazwisko
                </label>
                <input id="imie" name="imie" required className={`${field} mt-2`} />
              </div>
              <div>
                <label className={label} htmlFor="telefon">
                  Telefon
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  required
                  className={`${field} mt-2`}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="miejscowosc">
                  Miejscowość
                </label>
                <input
                  id="miejscowosc"
                  name="miejscowosc"
                  required
                  className={`${field} mt-2`}
                />
              </div>
              <div>
                <label className={label} htmlFor="zakres">
                  Czego dotyczy
                </label>
                <select id="zakres" name="zakres" className={`${field} mt-2`}>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                  <option>Inne</option>
                </select>
              </div>
            </div>

            <div>
              <label className={label} htmlFor="wiadomosc">
                Wiadomość
              </label>
              <textarea
                id="wiadomosc"
                name="wiadomosc"
                rows={5}
                placeholder="Metraż domu, obecne ogrzewanie, termin."
                className={`${field} mt-2 resize-y`}
              />
            </div>

            <button
              type="submit"
              className="ink-btn w-full bg-vermilion px-8 py-4 text-xl text-stock hover:bg-stock hover:text-vermilion sm:w-auto"
            >
              Wyślij zapytanie
            </button>

            <p aria-live="polite" className="text-sm leading-relaxed text-stock/70">
              {sent
                ? "Otworzyliśmy Twój program pocztowy z gotowym zapytaniem. Jeśli nic się nie stało, zadzwoń albo napisz na biuro@klimax.co.pl."
                : "Formularz otwiera Twój program pocztowy z gotową treścią zapytania."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
