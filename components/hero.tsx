"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FloatingParticles, MagneticButton } from "./animations";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jewelry.jpg"
          alt="Luxury gold and diamond jewelry collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <FloatingParticles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-48 pb-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <FadeInUp delay={0.2}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs tracking-wider text-primary">
                DIAMOND | PLATINUM | GOLD
              </span>
            </div>
          </FadeInUp>

          {/* Heading */}
          <FadeInUp delay={0.4}>
            <h1 className="font-serif text-4xl leading-tight font-light tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">Discover</span>
              <br />
              <span className="gold-shimmer font-medium">Timeless Elegance</span>
            </h1>
          </FadeInUp>

          {/* Subheadline */}
          <FadeInUp delay={0.6}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Explore curated collections, special offers, and exclusive gold
              schemes. Every piece tells a story of craftsmanship and luxury.
            </p>
          </FadeInUp>

          {/* CTAs */}
          <FadeInUp delay={0.8}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton>
                <Link
                  href="/products"
                  className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://pavangold.com/catalog/view/theme/pavangold/image/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-primary/30 bg-transparent px-8 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10"
                >
                  <Download className="h-4 w-4" />
                  Download Brochure
                </a>
              </MagneticButton>
            </div>
          </FadeInUp>

          {/* Stats */}
          <FadeInUp delay={1.0}>
            <div className="mt-16 flex gap-12">
              {[
                { value: "25+", label: "Years Legacy" },
                { value: "10K+", label: "Happy Clients" },
                { value: "100%", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/30 p-1.5"
        >
          <motion.div className="h-2 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
