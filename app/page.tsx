import Collections from "@/components/collections";
import Footer from "@/components/footer";
import GoldSchemesPreview from "@/components/gold-schemes-preview";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MarqueeBanner from "@/components/marquee-banner";
import OffersPreview from "@/components/offers-preview";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <MarqueeBanner />
      <Collections />
      <OffersPreview />
      <GoldSchemesPreview />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
