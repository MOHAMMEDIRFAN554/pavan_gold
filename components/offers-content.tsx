"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Gift, Percent, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  GoldLine,
  MagneticButton,
  StaggerContainer,
  StaggerItem,
} from "./animations";

const offers = [
  {
    icon: Clock,
    title: "Limited-Time Discounts",
    description:
      "Hurry! Don't miss out on these short-term deals designed to save you big on select diamond and gold collections.",
    highlight: "Up to 20% OFF",
    tag: "ENDING SOON",
  },
  {
    icon: Gift,
    title: "Festival Offers",
    description:
      "Make your celebrations extra special with our festival-exclusive discounts, free gifts, and bonus rewards.",
    highlight: "Free Gold Coin",
    tag: "SEASONAL",
  },
  {
    icon: ShoppingBag,
    title: "Buy More, Save More",
    description:
      "The more you shop, the more you save! Grab bundle deals on bangles, chains, and earring sets.",
    highlight: "Bundle Savings",
    tag: "POPULAR",
  },
];

export default function OffersContent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Featured Banner */}
        <FadeInUp>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card">
            <div className="grid items-center lg:grid-cols-2">
              <div className="relative p-8 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs tracking-wider text-primary">
                  <Percent className="h-3 w-3" />
                  FEATURED OFFER
                </span>
                <h2 className="mt-6 font-serif text-3xl font-light tracking-wide sm:text-4xl">
                  Diamond Collection
                  <br />
                  <span className="gold-shimmer font-medium">
                    20% Off
                  </span>
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Celebrate with our most prestigious diamond pieces at
                  exclusive prices. Limited period offer on certified solitaires
                  and diamond sets.
                </p>
                <div className="mt-8">
                  <MagneticButton>
                    <Link
                      href="/products"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                    >
                      Shop Now
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src="/images/special-offer.jpg"
                  alt="Diamond collection special offer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/30 to-transparent lg:via-transparent" />
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Offer Cards */}
        <div className="mt-20">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-light tracking-wide">
                Current Promotions
              </h2>
              <GoldLine className="mt-6 w-20" />
            </div>
          </FadeInUp>

          <StaggerContainer
            className="mt-12 grid gap-8 md:grid-cols-3"
            staggerDelay={0.15}
          >
            {offers.map((offer) => (
              <StaggerItem key={offer.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] tracking-wider text-primary">
                      {offer.tag}
                    </span>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <offer.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                    <span className="font-serif text-lg font-semibold text-primary">
                      {offer.highlight}
                    </span>
                    <Link
                      href="/products"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
