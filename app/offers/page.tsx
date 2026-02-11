import Footer from "@/components/footer";
import Header from "@/components/header";
import OffersContent from "@/components/offers-content";
import PageHero from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Offers | PAVAN GOLD",
  description:
    "Grab exclusive deals, discounts, and promotions on gold, diamond, and platinum jewellery.",
};

export default function OffersPage() {
  return (
    <main>
      <Header />
      <PageHero
        badge="EXCLUSIVE DEALS"
        title="Special Offers"
        subtitle="Limited time offers on our premium diamond and gold collections. Don't miss out."
        image="/images/bracelets.jpg"
      />
      <OffersContent />
      <Footer />
    </main>
  );
}
