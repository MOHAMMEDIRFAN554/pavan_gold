import Footer from "@/components/footer";
import GoldSchemesContent from "@/components/gold-schemes-content";
import Header from "@/components/header";
import PageHero from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Schemes | PAVAN GOLD",
  description:
    "Invest in your future with our flexible gold savings schemes. Safe, secure, and rewarding.",
};

export default function GoldSchemesPage() {
  return (
    <main>
      <Header />
      <PageHero
        badge="SMART INVESTMENT"
        title="Gold Schemes"
        subtitle="Secure your future with our flexible and profitable gold purchase plans."
        image="/images/bracelets.jpg"
      />
      <GoldSchemesContent />
      <Footer />
    </main>
  );
}
