import { brands } from "@/data/brands";
import { distanceBands } from "@/data/service-area";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function LocalBusinessJsonLd() {
  const business = {
    "@type": "HVACBusiness",
    "@id": `${site.url}/#business`,
    name: `${site.name} ${site.owner}`,
    url: site.url,
    image: `${site.url}/instalator.png`,
    logo: `${site.url}/icon.png`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 50.8586, longitude: 16.3203 },
    areaServed: distanceBands.flatMap((band) =>
      band.towns.map((town) => ({ "@type": "City", name: town })),
    ),
    knowsAbout: [...services.map((service) => service.name), ...brands.map((brand) => brand.name)],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name },
    })),
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: `${site.name} ${site.owner}`,
        alternateName: site.name,
        url: site.url,
      },
      business,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
