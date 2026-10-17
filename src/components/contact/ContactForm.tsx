"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

type Status = "" | "sending" | "sent" | "error";

const field =
  "w-full border-2 border-spruce bg-stock px-4 py-3 text-base text-spruce placeholder:text-spruce/70 focus:outline-none focus:ring-4 focus:ring-vermilion/45";
const label = "caption block text-xs text-stock/80";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("");
  const [error, setError] = useState("");
  const [cities, setCities] = useState<string[]>([]);

  const onCityChange = async (value: string) => {
    const response = await fetch(
      `/api/cities?q=${encodeURIComponent(value)}`,
    ).catch(() => null);
    setCities(response?.ok ? await response.json() : []);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
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
        `Nie udało się wysłać. Zadzwoń: ${site.phone} albo napisz na ${site.email}.`,
    );
    setStatus("error");
  };

  if (status === "sent") {
    return (
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
          <p className="display text-[clamp(2.2rem,7vw,3.6rem)]">Wysłane</p>
        </div>

        <div className="rule-diamond mt-8 text-spruce/40">
          <span className="caption shrink-0 text-xs text-spruce/80">
            Potwierdzenie
          </span>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-spruce/85">
          Zapytanie do nas dotarło. Odezwiemy się telefonicznie — zwykle jeszcze
          tego samego dnia.
        </p>
        <p className="mt-4 text-base leading-relaxed text-spruce/75">
          Pilna sprawa? Zadzwoń:{" "}
          <a
            href={site.phoneHref}
            className="underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion"
          >
            {site.phone}
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
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Imię i nazwisko
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
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
          <label className={label} htmlFor="city">
            Miejscowość
          </label>
          <input
            id="city"
            name="city"
            autoComplete="off"
            list="cities"
            required
            className={`${field} mt-2`}
            onChange={(event) => onCityChange(event.target.value)}
          />
          <datalist id="cities">
            {cities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>
        <div>
          <label className={label} htmlFor="service">
            Czego dotyczy
          </label>
          <select id="service" name="service" className={`${field} mt-2`}>
            {services.map((service) => (
              <option key={service.name}>{service.name}</option>
            ))}
            <option>Inne</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
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
        name="website"
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
  );
}
