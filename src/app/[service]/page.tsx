import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { FaqList, faqJsonLd } from "@/components/sections/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { brands } from "@/data/brands";
import { cityPages } from "@/data/city-pages";
import { distanceBands } from "@/data/service-area";
import { servicePages } from "@/data/service-pages";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { getTexts } from "@/lib/texts";

type Props = { params: Promise<{ service: string }> };

const towns = distanceBands.flatMap((band) => band.towns);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const page = cityPages[slug] ?? servicePages[slug];
  return page ? pageMetadata(`/${slug}`, page.title, page.description) : {};
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const cityPage = cityPages[slug];
  const serviceSlug = cityPage?.service ?? slug;
  const service = services.find((item) => item.slug === serviceSlug);
  const servicePage = servicePages[serviceSlug];
  if (!service || !servicePage) notFound();

  await connection();
  const texts = await getTexts();
  const page = cityPage ?? servicePage;
  const heading = `${service.name} ${cityPage?.city ?? site.city}`;
  const url = `${site.url}/${slug}`;
  const serviceUrl = `${site.url}/${serviceSlug}`;
  const nearby = Object.entries(cityPages).filter(
    ([key, item]) => item.service === serviceSlug && key !== slug,
  );

  return (
    <>
      <LocalBusinessJsonLd />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: cityPage ? heading : service.name,
              serviceType: service.name,
              description: page.description,
              url,
              provider: { "@id": `${site.url}/#business` },
              areaServed: (cityPage ? [cityPage.city] : towns).map((town) => ({
                "@type": "City",
                name: town,
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Strona główna", item: site.url },
                { "@type": "ListItem", position: 2, name: service.name, item: serviceUrl },
                ...(cityPage
                  ? [{ "@type": "ListItem", position: 3, name: cityPage.city, item: url }]
                  : []),
              ],
            },
            faqJsonLd(page.faq),
          ],
        }}
      />

      <main className="flex-1">
        <PageHeader title={cityPage ? heading : service.name} heading={heading}>
          <p>{page.lead}</p>
        </PageHeader>

        <section className="relative bg-stock text-spruce grain">
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="display text-[clamp(2rem,6vw,3.6rem)]">Co robimy</h2>
                <ul className="mt-8 space-y-3 text-lg leading-relaxed">
                  {servicePage.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.65em] h-2 w-2 shrink-0 bg-vermilion" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-spruce/80">
                <p>
                  {site.name} {site.owner} to 25 lat doświadczenia oraz uprawnienia SEP 1, 2 i 3 i F-Gaz.
                </p>
                {servicePage.brands ? (
                  <p>
                    Mamy certyfikaty montażowe i serwisowe producentów:{" "}
                    {brands.map((brand) => brand.name).join(", ")}. Dzięki temu montaż nie unieważnia
                    gwarancji urządzenia.
                  </p>
                ) : null}
                {cityPage ? (
                  cityPage.local.map((text) => <p key={text}>{text}</p>)
                ) : (
                  <p>
                    Dojeżdżamy w promieniu około {site.radiusKm} km od Świebodzic: {towns.join(", ")}.
                  </p>
                )}
              </div>
            </div>

            <p className="caption mt-20 mb-6 text-xs text-spruce/60">Warto wiedzieć</p>
            <FaqList items={page.faq} />

            <nav aria-label="Usługi" className="mt-16">
              <p className="caption text-xs text-spruce/60">
                {cityPage ? "Usługi" : "Pozostałe usługi"}
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {nearby.map(([key, item]) => (
                  <li key={key}>
                    <Link
                      href={`/${key}`}
                      className="ink-btn bg-spruce px-5 py-2 text-lg text-stock hover:bg-slate"
                    >
                      {service.name} {item.city}
                    </Link>
                  </li>
                ))}
                {services
                  .filter((item) => item.slug !== slug)
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/${item.slug}`}
                        className="ink-btn border-2 border-spruce px-5 py-2 text-lg hover:bg-spruce hover:text-stock"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </section>

        <ContactSection texts={texts} />
      </main>

      <Footer />
    </>
  );
}
