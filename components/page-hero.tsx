"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingParticles } from "./animations";

export default function PageHero({
  title,
  subtitle,
  badge,
  image,
}: {
  title: string;
  subtitle: string;
  badge: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-secondary pt-44">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
      )}

      {!image && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_55%_52%/0.05),transparent_70%)]" />
      )}

      <FloatingParticles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs tracking-wider text-primary">{badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 max-w-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 h-px w-20 origin-left bg-primary"
        />
      </div>
    </section>
  );
}
