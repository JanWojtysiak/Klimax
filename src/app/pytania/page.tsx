import type { Metadata } from "next";
import { connection } from "next/server";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { site } from "@/data/site";
import { getTexts } from "@/lib/texts";

const title = `Często zadawane pytania: pompy ciepła | ${site.name} ${site.owner}`;
const description =
  "Jaką pompę ciepła wybrać, ile zużywa prądu, ile trwa montaż i od czego zależy cena. Klimax Robert Wojtysiak, Świebodzice i okolice.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pytania" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: `${site.name} ${site.owner}`,
    url: "/pytania",
    title,
    description,
    images: "/opengraph-image",
  },
  twitter: { card: "summary_large_image", title, description, images: "/opengraph-image" },
};

const QUESTIONS = 6;

export default async function FaqPage() {
  await connection();
  const texts = await getTexts();
  const faq = Array.from({ length: QUESTIONS }, (_, index) => ({
    question: texts[`faq${index}Question`],
    answer: texts[`faq${index}Answer`],
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer.split("\n").join(". ") },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <main className="flex-1">
        <PageHeader title="Często zadawane pytania">
          <p>{texts.faqText}</p>
        </PageHeader>

        <section className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
            <div className="border-t-2 border-spruce/25">
              {faq.map(({ question, answer }, index) => {
                const lines = answer.split("\n");
                return (
                  <div
                    key={index}
                    className="grid gap-4 border-b-2 border-spruce/25 py-8 sm:py-10 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-8"
                  >
                    <span className="caption text-xs text-spruce/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display text-[clamp(1.4rem,4vw,2.2rem)] leading-[0.95]">
                      {question}
                    </h2>
                    {lines.length > 1 ? (
                      <ul className="space-y-2 text-lg leading-relaxed text-spruce/80">
                        {lines.map((line) => (
                          <li key={line} className="flex gap-3">
                            <span aria-hidden="true" className="mt-[0.65em] h-2 w-2 shrink-0 bg-vermilion" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg leading-relaxed text-spruce/80">{lines[0]}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection texts={texts} faqLink={false} />
      </main>

      <Footer />
    </>
  );
}
