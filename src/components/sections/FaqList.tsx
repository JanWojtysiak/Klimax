export type Faq = { question: string; answer: string };

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t-2 border-spruce/25">
      {items.map(({ question, answer }, index) => {
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
  );
}

export const faqJsonLd = (items: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer.split("\n").join(". ") },
  })),
});
