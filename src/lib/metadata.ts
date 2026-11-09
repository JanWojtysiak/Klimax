import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pl_PL",
      siteName: `${site.name} ${site.owner}`,
      url: path,
      title,
      description,
      images: "/opengraph-image",
    },
    twitter: { card: "summary_large_image", title, description, images: "/opengraph-image" },
  };
}
