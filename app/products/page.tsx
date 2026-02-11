import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHero from "@/components/page-hero";
import ProductsGrid from "@/components/products-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | PAVAN GOLD",
  description:
    "Explore our curated jewellery collections that beautifully blend tradition with modern elegance.",
};

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <PageHero
        badge="OUR COLLECTIONS"
        title="Exquisite Jewellery"
        subtitle="Explore our wide range of gold, diamond, and platinum jewellery designed for every occasion."
        image="/images/bracelets.jpg"
      />
      <ProductsGrid />
      <Footer />
    </main>
  );
}
