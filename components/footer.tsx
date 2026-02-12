"use client";

import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, GoldLine } from "./animations";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collections" },
  { href: "/offers", label: "Special Offers" },
  { href: "/gold-schemes", label: "Gold Schemes" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FadeInUp>
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="PAVAN GOLD Logo"
                  width={220}
                  height={220}
                  className="h-36 w-auto"
                />
              </Link>
              <p className="leading-relaxed text-muted-foreground">
                Crafting timeless jewellery with tradition, trust, and
                excellence since generations.
              </p>
              <div className="mt-2 flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@pavangoldofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919846192222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div>
              <h3 className="mb-6 font-serif text-lg font-semibold text-primary">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div>
              <h3 className="mb-6 font-serif text-lg font-semibold text-primary">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li>
                  <p className="leading-relaxed">
                    PAVAN GOLD
                    <br />
                    20/29, A-C, P-R, K.M. Complex,
                    <br />
                    Thazhepalam, Town Hall Road,
                    <br />
                    Tirur, Malappuram - 670101
                  </p>
                </li>
                <li className="mt-2">
                  <span className="font-semibold text-primary">Telephone: </span>
                  <a
                    href="tel:04942423916"
                    className="transition-colors hover:text-primary"
                  >
                    0494 2423916
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-primary">Mobile: </span>
                  <a
                    href="tel:+919846192222"
                    className="transition-colors hover:text-primary"
                  >
                    +91 98461 92222
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-primary">Mail: </span>
                  <a
                    href="mailto:mail@pavangold.com"
                    className="transition-colors hover:text-primary"
                  >
                    mail@pavangold.com
                  </a>
                </li>
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div>
              <h3 className="mb-6 font-serif text-lg font-semibold text-primary">
                Store Hours
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span className="text-foreground">9:30 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">10:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </FadeInUp>
        </div>

        <GoldLine className="my-10" />

        <div className="mb-8 flex justify-center">
          <Image
            src="/images/certifications.png"
            alt="BIS 916 Hallmark Certification"
            width={400}
            height={60}
            className="h-auto w-full max-w-[300px] object-contain opacity-80"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} PAVAN GOLD. All rights reserved.
          </p>
          {/* <p>MITHRA GOLD AND DIAMONDS LLP</p> */}
        </div>
      </div>
    </footer>
  );
}
