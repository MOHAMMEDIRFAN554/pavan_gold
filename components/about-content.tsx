"use client";

import { motion } from "framer-motion";
import { Award, Gem, Heart, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  GoldLine,
  MagneticButton,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "./animations";

const values = [
  {
    icon: ShieldCheck,
    title: "Authenticity",
    description:
      "Every piece of jewellery is BIS hallmarked and comes with certification of purity and quality.",
  },
  {
    icon: Gem,
    title: "Craftsmanship",
    description:
      "Our master artisans bring decades of expertise to create jewellery that is truly exceptional.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "We believe in building lasting relationships through personalized attention and care.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "A legacy of quality and trust that has been built over years of dedicated service.",
  },
];

const milestones = [
  { year: "Foundation", text: "Established with a vision to bring authentic gold jewellery to every household." },
  { year: "Growth", text: "Expanded our collection to include certified diamond and platinum pieces." },
  { year: "Innovation", text: "Launched gold savings schemes to make jewellery accessible to all." },
  { year: "Today", text: "Trusted by thousands of families across Kerala for their precious moments." },
];

export default function AboutContent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Story Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SlideInLeft>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/craftsmanship.jpg"
                  alt="Master jeweler at work crafting gold jewellery"
                  width={600}
                  height={500}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
              <FadeInUp delay={0.3}>
                <div className="absolute -right-4 -bottom-6 rounded-xl border border-primary/20 bg-card/90 p-6 shadow-xl backdrop-blur sm:-right-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-primary">
                        10,000+
                      </p>
                      <p className="text-xs tracking-wider text-muted-foreground">
                        HAPPY FAMILIES
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div>
              <span className="text-xs tracking-[0.3em] text-primary">
                OUR HERITAGE
              </span>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl">
                A Legacy of
                <br />
                <span className="gold-shimmer font-medium">
                  Timeless Beauty
                </span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                At PAVAN GOLD, we believe that jewellery is more than
                adornment; it is a reflection of your identity, a celebration
                of your milestones, and a treasure for generations. Our
                journey began with a simple vision: to offer authentic,
                beautifully crafted jewellery that resonates with tradition
                while embracing modern elegance.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Under the umbrella of MITHRA GOLD AND DIAMONDS LLP, we have
                built a reputation for integrity, quality, and exceptional
                customer service. Every piece in our collection is a
                testament to our commitment to excellence.
              </p>
              <div className="mt-8">
                <MagneticButton>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  >
                    Explore Collections
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </SlideInRight>
        </div>

        {/* Milestones */}
        <div className="mt-28">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-light tracking-wide">
                Our Journey
              </h2>
              <GoldLine className="mt-6 w-20" />
            </div>
          </FadeInUp>

          <StaggerContainer className="mt-12" staggerDelay={0.15}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

              <div className="flex flex-col gap-12">
                {milestones.map((ms, i) => (
                  <StaggerItem key={ms.year}>
                    <div
                      className={`flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                      <div className="flex-1 md:text-right">
                        {i % 2 === 0 && (
                          <div
                            className={`rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                              }`}
                          >
                            <p className="font-serif text-lg font-semibold text-primary">
                              {ms.year}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {ms.text}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="relative z-10 hidden md:block">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                          <div className="h-3 w-3 rounded-full bg-primary" />
                        </div>
                      </div>

                      <div className="flex-1">
                        {i % 2 !== 0 && (
                          <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 md:ml-8">
                            <p className="font-serif text-lg font-semibold text-primary">
                              {ms.year}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {ms.text}
                            </p>
                          </div>
                        )}
                        {i % 2 === 0 && (
                          <div className="hidden md:block" />
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </StaggerContainer>
        </div>

        {/* Values */}
        <div className="mt-28">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-light tracking-wide">
                Our Core Values
              </h2>
              <GoldLine className="mt-6 w-20" />
            </div>
          </FadeInUp>

          <StaggerContainer
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.12}
          >
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-lg font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
