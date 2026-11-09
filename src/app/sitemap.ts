import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...services.map(({ slug }) => ({
      url: `${site.url}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${site.url}/pytania`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/polityka-prywatnosci`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
