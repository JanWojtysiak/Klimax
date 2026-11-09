import { connection } from "next/server";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { FaqList, faqJsonLd } from "@/components/sections/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { getTexts } from "@/lib/texts";

export const metadata = pageMetadata(
  "/pytania",
  `Często zadawane pytania: pompy ciepła | ${site.name} ${site.owner}`,
  "Jaką pompę ciepła wybrać, ile zużywa prądu, ile trwa montaż i od czego zależy cena. Klimax Robert Wojtysiak, Świebodzice i okolice.",
);

const QUESTIONS = 6;

export default async function FaqPage() {
  await connection();
  const texts = await getTexts();
  const faq = Array.from({ length: QUESTIONS }, (_, index) => ({
    question: texts[`faq${index}Question`],
    answer: texts[`faq${index}Answer`],
  }));

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...faqJsonLd(faq) }} />

      <main className="flex-1">
        <PageHeader title="Często zadawane pytania">
          <p>{texts.faqText}</p>
        </PageHeader>

        <section className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
            <FaqList items={faq} />
          </div>
        </section>

        <ContactSection texts={texts} faqLink={false} />
      </main>

      <Footer />
    </>
  );
}
