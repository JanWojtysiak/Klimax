import { ContactSection } from "@/components/contact/ContactSection";
import { Hero } from "@/components/hero/Hero";
import { CallBar } from "@/components/layout/CallBar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <SkipLink />

      <main className="flex-1">
        <Hero />
        <Certifications />
        <Services />
        <Experience />
        <ServiceArea />
        <ContactSection />
      </main>

      <Footer />
      <CallBar />
    </>
  );
}
