"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, MagneticButton, SlideInLeft, SlideInRight } from "./animations";

export default function OffersPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-secondary" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SlideInLeft>
            <div>
              <span className="text-xs tracking-[0.3em] text-primary">
                EXCLUSIVE DEALS
              </span>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
                Special Deals
                <br />
                <span className="gold-shimmer font-medium">&amp; Offers</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Celebrate every moment with exciting offers, discounts, and
                promotions. Up to 20% off on select diamond collections.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Limited-Time Discounts on Diamond Collections",
                  "Festival Exclusive Offers & Gifts",
                  "Buy More, Save More Bundle Deals",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <MagneticButton>
                  <Link
                    href="/offers"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  >
                    View Offers
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="relative">
              <div className="glow-pulse relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/special-offer.jpg"
                  alt="Special diamond jewelry offer"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
              <FadeInUp delay={0.3}>
                <div className="absolute -bottom-6 -left-6 rounded-xl border border-primary/20 bg-card/90 p-6 shadow-xl backdrop-blur">
                  <p className="font-serif text-3xl font-bold text-primary">
                    20% OFF
                  </p>
                  <p className="mt-1 text-xs tracking-wider text-muted-foreground">
                    SELECT DIAMOND COLLECTIONS
                  </p>
                </div>
              </FadeInUp>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
