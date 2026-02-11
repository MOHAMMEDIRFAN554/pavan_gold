import ContactContent from "@/components/contact-content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageHero from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PAVAN GOLD",
  description:
    "Get in touch with PAVAN GOLD. Visit our store, call us, or send us a message.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHero
        badge="GET IN TOUCH"
        title="Connect With Us"
        subtitle="We'd love to hear from you. Reach out for enquiries, appointments, or any assistance."
        image="/images/bracelets.jpg"
      />
      <ContactContent />
      <Footer />
    </main>
  );
}
