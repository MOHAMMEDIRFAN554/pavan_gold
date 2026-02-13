"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  GoldLine,
  StaggerContainer,
  StaggerItem,
} from "./animations";

const collections = [
  {
    title: "Rings",
    description: "Elegant designs for every occasion",
    image: "/images/rings.jpg",
    href: "/products?category=Rings",
  },
  {
    title: "Necklaces",
    description: "Statement pieces and daily wear",
    image: "/images/necklaces.jpg",
    href: "/products?category=Necklaces",
  },
  {
    title: "Earrings",
    description: "From classic studs to intricate designs",
    image: "/images/earrings.jpg",
    href: "/products?category=Earrings",
  },
  {
    title: "Bracelets",
    description: "Handcrafted with precision and elegance",
    image: "/images/bracelets.jpg",
    href: "/products?category=Bracelets",
  },
];

export default function Collections() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInUp>
          <div className="flex flex-col items-center text-center">
            <span className="text-xs tracking-[0.3em] text-primary">
              OUR COLLECTIONS
            </span>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
              Featured Collections
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Each piece is a testament to our commitment to excellence and
              timeless beauty.
            </p>
            <GoldLine className="mt-6 w-20" />
          </div>
        </FadeInUp>

        <StaggerContainer
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
          staggerDelay={0.15}
        >
          {collections.map((item) => (
            <StaggerItem key={item.title}>
              <Link href={item.href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-full overflow-hidden rounded-lg border border-border bg-card"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image || "/images/placeholder.svg"}
                      alt={`${item.title} collection`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                    <div className="flex items-end justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-sm font-medium text-foreground sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:h-10 sm:w-10">
                        <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4} className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
          >
            Explore All Collections
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
