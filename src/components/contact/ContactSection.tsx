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
  const [status, setStatus] = useState<"" | "sending" | "sent" | "error">("");
  const [error, setError] = useState("");
  const [cities, setCities] = useState<string[]>([]);

  const onCityChange = async (value: string) => {
    const response = await fetch(
      `/api/miejscowosci?q=${encodeURIComponent(value)}`,
    ).catch(() => null);
    setCities(response?.ok ? await response.json() : []);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/kontakt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        Object.fromEntries(new FormData(event.currentTarget)),
      ),
    }).catch(() => null);

    if (response?.ok) {
      setStatus("sent");
      return;
    }

    const data = await response?.json().catch(() => null);
    setError(
      data?.error ??
        "Nie udało się wysłać. Zadzwoń: +48 601 573 887 albo napisz na biuro@klimax.co.pl.",
    );
    setStatus("error");
  };

  const field =
    "w-full border-2 border-spruce bg-stock px-4 py-3 text-base text-spruce placeholder:text-spruce/70 focus:outline-none focus:ring-4 focus:ring-vermilion/45";
  const label = "caption block text-xs text-stock/80";

  return (
    <section id="kontakt" className="relative bg-spruce grain">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
        <p className="caption text-xs text-stock/70">Arkusz 06</p>
        <h2 className="display mt-4 text-stock text-[clamp(2.6rem,9vw,6.5rem)]">
          Napisz albo{" "}
          <br />
          zadzwoń
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-stock/85">
              Najszybciej załatwimy sprawę przez telefon — odbieramy osobiście i
              pomożemy ci z każdym pytaniem.
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

          <div aria-live="polite">
            {status === "sent" ? (
              <div className="bg-stock p-8 text-spruce sm:p-10">
                <div className="flex items-center gap-5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    aria-hidden="true"
                  >
                    <path d="M2.5 12.5 9 19 21.5 4.5" />
                  </svg>
                  <p className="display text-[clamp(2.2rem,7vw,3.6rem)]">
                    Wysłane
                  </p>
                </div>

                <div className="rule-diamond mt-8 text-spruce/40">
                  <span className="caption shrink-0 text-xs text-spruce/80">
                    Potwierdzenie
                  </span>
                </div>

                <p className="mt-8 text-lg leading-relaxed text-spruce/85">
                  Zapytanie do nas dotarło. Odezwiemy się telefonicznie — zwykle
                  jeszcze tego samego dnia.
                </p>
                <p className="mt-4 text-base leading-relaxed text-spruce/75">
                  Pilna sprawa? Zadzwoń:{" "}
                  <a
                    href="tel:+48601573887"
                    className="underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion"
                  >
                    +48 601 573 887
                  </a>
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("")}
                  className="caption mt-10 text-xs text-spruce/70 underline underline-offset-4 hover:text-vermilion"
                >
                  Wyślij kolejne zapytanie
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="imie">
                      Imię i nazwisko
                    </label>
                    <input
                      id="imie"
                      name="imie"
                      autoComplete="name"
                      required
                      className={`${field} mt-2`}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="telefon">
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="(?=(?:\D*\d){9})[\d+()\s-]+"
                      title="Podaj polski numer telefonu, np. 601 573 887."
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
                      autoComplete="off"
                      list="miejscowosci"
                      required
                      className={`${field} mt-2`}
                      onChange={(event) => onCityChange(event.target.value)}
                    />
                    <datalist id="miejscowosci">
                      {cities.map((city) => (
                        <option key={city} value={city} />
                      ))}
                    </datalist>
                  </div>
                  <div>
                    <label className={label} htmlFor="zakres">
                      Czego dotyczy
                    </label>
                    <select
                      id="zakres"
                      name="zakres"
                      className={`${field} mt-2`}
                    >
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
                    minLength={30}
                    maxLength={4000}
                    required
                    placeholder="Metraż domu, obecne ogrzewanie, termin."
                    title="Opisz sprawę w co najmniej 30 znakach."
                    className={`${field} mt-2 resize-y`}
                  />
                </div>

                <input
                  type="text"
                  name="firma"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="ink-btn w-full bg-vermilion px-8 py-4 text-xl text-stock hover:bg-stock hover:text-vermilion disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Wysyłanie…" : "Wyślij zapytanie"}
                </button>

                <p
                  className={`text-sm leading-relaxed ${
                    status === "error"
                      ? "border-l-2 border-vermilion pl-4 text-stock"
                      : "text-stock/70"
                  }`}
                >
                  {status === "error"
                    ? error
                    : "Zostaw numer, oddzwonimy. Zwykle odzywamy się tego samego dnia."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
