"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Wallet } from "lucide-react";
import Link from "next/link";
import {
  FadeInUp,
  GoldLine,
  StaggerContainer,
  StaggerItem,
} from "./animations";

const steps = [
  {
    icon: Wallet,
    title: "Choose Your Plan",
    description: "Select from monthly, quarterly, or annual schemes",
  },
  {
    icon: TrendingUp,
    title: "Invest & Grow",
    description: "Watch your gold savings grow over time",
  },
  {
    icon: Shield,
    title: "Secure & Rewarding",
    description: "100% safe investment with guaranteed returns",
  },
];

export default function GoldSchemesPreview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInUp>
          <div className="flex flex-col items-center text-center">
            <span className="text-xs tracking-[0.3em] text-primary">
              INVEST IN GOLD
            </span>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
              Gold Savings Schemes
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Invest in your future with our flexible gold schemes. Safe,
              secure, and rewarding.
            </p>
            <GoldLine className="mt-6 w-20" />
          </div>
        </FadeInUp>

        <StaggerContainer
          className="mt-16 grid gap-8 md:grid-cols-3"
          staggerDelay={0.15}
        >
          {steps.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30"
              >
                <div className="absolute top-0 right-0 font-serif text-7xl font-bold text-primary/5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif text-lg font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4} className="mt-12 text-center">
          <Link
            href="/gold-schemes"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
