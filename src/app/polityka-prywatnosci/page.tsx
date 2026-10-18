import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Polityka prywatności | ${site.name} ${site.owner}`,
  description: `Jak ${site.name} ${site.owner} korzysta z danych podanych w formularzu kontaktowym.`,
  alternates: { canonical: "/polityka-prywatnosci" },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t-2 border-spruce/25 py-8 sm:py-10">
      <h2 className="display text-[clamp(1.4rem,4vw,2.2rem)] leading-[0.95]">{title}</h2>
      <div className="mt-4 max-w-3xl space-y-3 text-lg leading-relaxed text-spruce/80">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <main className="flex-1">
        <PageHeader title="Polityka prywatności">
          <p>
            Krótko i po ludzku: co dzieje się z danymi, które zostawiasz w formularzu na tej stronie.
          </p>
        </PageHeader>

        <div className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
            <Section title="Kto odpowiada za dane">
              <p>
                {site.owner}, prowadzący firmę {site.name} {site.owner}, {site.street}, {site.postalCode}{" "}
                {site.city}, NIP {site.nip}.
              </p>
              <p>
                W każdej sprawie dotyczącej danych możesz napisać na{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                  {site.email}
                </a>{" "}
                albo zadzwonić:{" "}
                <a href={site.phoneHref} className="underline underline-offset-4">
                  {site.phone}
                </a>
                .
              </p>
            </Section>

            <Section title="Jakie dane zbieramy">
              <p>
                Z formularza kontaktowego: imię i nazwisko, telefon, miejscowość, rodzaj usługi i treść
                wiadomości. Nic więcej nie jest potrzebne.
              </p>
              <p>
                Przy wysyłaniu formularza serwer na chwilę zapamiętuje adres IP, żeby blokować spam. Ten wpis
                znika sam najpóźniej po godzinie.
              </p>
            </Section>

            <Section title="Po co">
              <p>
                Tylko po to, żeby odpowiedzieć na zapytanie: oddzwonić, umówić oględziny albo przygotować
                wycenę. Podstawą jest art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy, o które
                prosisz) oraz art. 6 ust. 1 lit. f RODO (odpowiedź na wiadomość i ochrona strony przed
                spamem).
              </p>
              <p>
                Nie wysyłamy reklam, nie sprzedajemy danych i nie przekazujemy ich nikomu do celów
                marketingowych.
              </p>
            </Section>

            <Section title="Jak długo">
              <p>
                Jeśli dojdzie do zlecenia, dane zostają tak długo, jak wymagają tego przepisy podatkowe i
                gwarancja. Jeśli nie, usuwamy je najpóźniej po 12 miesiącach od ostatniego kontaktu.
              </p>
            </Section>

            <Section title="Kto jeszcze ma do nich dostęp">
              <p>Tylko firmy, bez których strona i poczta by nie działały:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Resend, który dostarcza wiadomość z formularza na naszą skrzynkę,</li>
                <li>MyDevil, u którego jest nasza poczta,</li>
                <li>Mikrus, czyli serwer, na którym działa strona,</li>
                <li>Cloudflare, przez który przechodzi ruch do strony.</li>
              </ul>
              <p>
                Część z tych firm ma siedzibę poza Europejskim Obszarem Gospodarczym. Przekazanie danych
                odbywa się wtedy na zasadach przewidzianych w RODO, np. na podstawie standardowych klauzul
                umownych.
              </p>
            </Section>

            <Section title="Twoje prawa">
              <p>
                Możesz poprosić o wgląd w swoje dane, ich poprawienie, usunięcie lub ograniczenie, możesz
                też sprzeciwić się ich wykorzystaniu i poprosić o ich przeniesienie. Wystarczy mail albo
                telefon.
              </p>
              <p>
                Jeśli uznasz, że coś robimy źle, masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych
                Osobowych (ul. Stawki 2, 00-193 Warszawa).
              </p>
              <p>
                Podanie danych jest dobrowolne, ale bez telefonu nie będziemy mogli oddzwonić. Nie
                podejmujemy żadnych decyzji automatycznie i nie tworzymy profili.
              </p>
            </Section>

            <Section title="Pliki cookies">
              <p>
                Strona nie używa cookies do statystyk ani reklam. Jedyne pliki tego typu są techniczne:
                ciasteczko logowania do panelu administracyjnego oraz ewentualne ciasteczko Cloudflare,
                które chroni stronę przed botami. Bez nich strona nie działałaby poprawnie, dlatego nie
                wymagają zgody.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
