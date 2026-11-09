import Link from "next/link";
import type { Texts } from "@/lib/texts";
import { site } from "@/data/site";
import { ContactForm } from "./ContactForm";

export function ContactSection({ texts, faqLink = true }: { texts: Texts; faqLink?: boolean }) {
  return (
    <section id="contact" className="relative bg-spruce grain">
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
        <h2 className="display whitespace-pre-line text-stock text-[clamp(2.6rem,9vw,6.5rem)]">
          {texts.contactTitle}
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-stock/85">
              {texts.contactText}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="display block text-vermilion text-[clamp(1.9rem,6vw,3.1rem)] hover:text-stock"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-lg text-stock underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-10 border-t-2 border-stock/25 pt-6">
              <p className="caption text-xs text-stock/70">Adres</p>
              <address className="mt-2 mb-6 text-base not-italic text-stock/85">
                {site.name} {site.owner}
                <br />
                {site.street}, {site.postalCode} {site.city}
              </address>
              <p className="caption text-xs text-stock/70">Godziny pracy</p>
              <p className="mt-2 mb-6 text-base text-stock/85">{site.hours}</p>
              <p className="caption text-xs text-stock/70">Obszar</p>
              <p className="mt-2 text-base text-stock/85">
                {site.city} i okolice w promieniu około {site.radiusKm} km.
              </p>
              <a
                href={site.googleProfile}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-base text-stock underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion"
              >
                Mapa i opinie w Google →
              </a>
            </div>

            {faqLink ? (
              <div className="mt-10 border-t-2 border-stock/25 pt-6">
                <p className="caption text-xs text-stock/70">Masz pytanie?</p>
                <Link
                  href="/pytania"
                  className="ink-btn mt-4 border-2 border-stock px-6 py-3 text-lg text-stock hover:bg-stock hover:text-spruce"
                >
                  Często zadawane pytania →
                </Link>
              </div>
            ) : null}
          </div>

          <div aria-live="polite">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
