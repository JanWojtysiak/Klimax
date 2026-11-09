import { brands } from "@/data/brands";
import { distanceBands } from "@/data/service-area";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { JsonLd } from "./JsonLd";

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
    taxID: site.nip,
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
    sameAs: [site.googleProfile],
    hasMap: site.googleProfile,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: site.opens,
      closes: site.closes,
    },
    areaServed: distanceBands.flatMap((band) =>
      band.towns.map((town) => ({ "@type": "City", name: town })),
    ),
    knowsAbout: [...services.map((service) => service.name), ...brands.map((brand) => brand.name)],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${site.url}/${service.slug}`,
      },
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

  return <JsonLd data={data} />;
}
