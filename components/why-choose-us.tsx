"use client";

import { motion } from "framer-motion";
import { Award, Gem, Heart, ShieldCheck } from "lucide-react";
import {
  FadeInUp,
  GoldLine,
  StaggerContainer,
  StaggerItem,
} from "./animations";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    description: "Certified Diamonds & Gold with BIS hallmark on every piece.",
  },
  {
    icon: Gem,
    title: "Expert Craftsmanship",
    description:
      "Each piece handcrafted to perfection by master artisans.",
  },
  {
    icon: Heart,
    title: "Customer-First Approach",
    description: "Personalized service and care for every customer.",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    description:
      "Years of heritage in jewellery excellence and customer trust.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInUp>
          <div className="flex flex-col items-center text-center">
            <span className="text-xs tracking-[0.3em] text-primary">
              THE PAVAN GOLD PROMISE
            </span>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
              Why Choose Us
            </h2>
            <GoldLine className="mt-6 w-20" />
          </div>
        </FadeInUp>

        <StaggerContainer
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.12}
        >
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-medium text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
