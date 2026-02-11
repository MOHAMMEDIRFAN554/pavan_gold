import AboutContent from "@/components/about-content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHero from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PAVAN GOLD",
  description:
    "Discover the heritage, craftsmanship, and trust behind PAVAN GOLD. Tradition meets modern excellence.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero
        badge="OUR STORY"
        title="Tradition, Craftsmanship & Trust"
        subtitle="Discover the heritage and passion that drives every piece of jewellery we create."
        image="/images/bracelets.jpg"
      />
      <AboutContent />
      <Footer />
    </main>
  );
}
