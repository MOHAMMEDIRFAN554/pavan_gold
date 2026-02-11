"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Crown,
  Shield,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";
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

const schemes = [
  {
    name: "Monthly Plan",
    icon: Calendar,
    duration: "12 Months",
    highlight: "Most Popular",
    benefits: [
      "Fixed monthly installments",
      "Bonus gold on completion",
      "Flexible payment options",
      "No processing charges",
    ],
  },
  {
    name: "Quarterly Plan",
    icon: Clock,
    duration: "12 Months",
    highlight: "Best Value",
    benefits: [
      "Quarterly installments",
      "Higher bonus percentage",
      "Priority access to new collections",
      "Free making charges waiver",
    ],
  },
  {
    name: "Annual Plan",
    icon: Crown,
    duration: "12 Months",
    highlight: "Premium",
    benefits: [
      "One-time annual investment",
      "Maximum bonus gold",
      "Exclusive member benefits",
      "Personal relationship manager",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Scheme",
    description: "Select the plan that best suits your savings goals and budget.",
    icon: Wallet,
  },
  {
    step: "02",
    title: "Make Regular Payments",
    description: "Pay your installments on time through multiple payment methods.",
    icon: TrendingUp,
  },
  {
    step: "03",
    title: "Earn Bonus Gold",
    description: "Receive additional gold as a bonus on scheme completion.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Redeem Your Jewellery",
    description: "Choose from our stunning collection using your accumulated gold value.",
    icon: Shield,
  },
];

export default function GoldSchemesContent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Investment Image + Text */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SlideInLeft>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/gold-investment.jpg"
                alt="Gold investment bars and coins"
                width={600}
                height={400}
                className="w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </SlideInLeft>
          <SlideInRight>
            <div>
              <h2 className="font-serif text-3xl font-light tracking-wide sm:text-4xl">
                Invest in Your
                <br />
                <span className="gold-shimmer font-medium">
                  Golden Future
                </span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Our gold schemes are designed to help you save systematically
                and build your jewellery collection over time. With flexible
                payment options and generous bonuses, investing in gold has
                never been easier or more rewarding.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "0%", label: "Processing Fee" },
                  { value: "100%", label: "Safe & Secure" },
                  { value: "5%+", label: "Bonus Gold" },
                  { value: "24/7", label: "Account Access" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <p className="font-serif text-2xl font-semibold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>

        {/* Scheme Cards */}
        <div className="mt-28">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-light tracking-wide">
                Choose Your Scheme
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Select the savings plan that matches your investment goals.
              </p>
              <GoldLine className="mt-6 w-20" />
            </div>
          </FadeInUp>

          <StaggerContainer
            className="mt-12 grid gap-8 md:grid-cols-3"
            staggerDelay={0.15}
          >
            {schemes.map((scheme) => (
              <StaggerItem key={scheme.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/30"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <scheme.icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs tracking-wider text-primary">
                        {scheme.highlight}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                      {scheme.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Duration: {scheme.duration}
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      {scheme.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-foreground/80">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <MagneticButton>
                        <Link
                          href="/contact"
                          className="group/btn flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-transparent py-3 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          Join Now
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* How It Works */}
        <div className="mt-28">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-light tracking-wide">
                How It Works
              </h2>
              <GoldLine className="mt-6 w-20" />
            </div>
          </FadeInUp>

          <StaggerContainer
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.12}
          >
            {howItWorks.map((item, i) => (
              <StaggerItem key={item.step}>
                <div className="group relative rounded-xl border border-border bg-card p-6 text-center transition-all duration-500 hover:border-primary/30">
                  <div className="absolute top-4 right-4 font-serif text-4xl font-bold text-primary/10">
                    {item.step}
                  </div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  {i < howItWorks.length - 1 && (
                    <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-primary/30 lg:block" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
