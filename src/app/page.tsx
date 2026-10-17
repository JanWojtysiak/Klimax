import { connection } from "next/server";
import { ContactSection } from "@/components/contact/ContactSection";
import { Hero } from "@/components/hero/Hero";
import { Gallery } from "@/components/gallery/Gallery";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { getTexts } from "@/lib/texts";

export default async function HomePage() {
  await connection();
  const texts = await getTexts();

  return (
    <>
      <LocalBusinessJsonLd />
      <SkipLink />

      <main className="flex-1">
        <Hero texts={texts} />
        <Certifications texts={texts} />
        <Services texts={texts} />
        <Gallery texts={texts} />
        <Experience texts={texts} />
        <ServiceArea texts={texts} />
        <ContactSection texts={texts} />
      </main>

      <Footer />
    </>
  );
}
