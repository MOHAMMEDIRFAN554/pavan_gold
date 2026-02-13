"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collections" },
  { href: "/offers", label: "Offers" },
  { href: "/gold-schemes", label: "Gold Schemes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Smooth scroll transformations
  // Background opacity: 0 -> 1 between scroll 0 and 100
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const headerBackdropBlur = useTransform(scrollY, [0, 100], [0, 12]);
  const headerBorderOpacity = useTransform(scrollY, [0, 100], [0, 0.05]);
  const headerShadowOpacity = useTransform(scrollY, [0, 100], [0, 0.05]);

  // Transform values into CSS strings (using HSL from globals.css)
  const backgroundColor = useTransform(headerBgOpacity, (v) => `hsl(var(--background) / ${v})`);
  const backdropFilter = useTransform(headerBackdropBlur, (v) => `blur(${v}px)`);
  const borderColor = useTransform(headerBorderOpacity, (v) => `hsl(var(--primary) / ${v})`);
  const boxShadow = useTransform(headerShadowOpacity, (v) => `0 10px 15px -3px hsl(var(--primary) / ${v})`);

  // Logo animation
  // Logo scales down and fades out: 1 -> 0 between scroll 0 and 50
  const logoScale = useTransform(scrollY, [0, 50], [1, 0.8]);
  const logoOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const logoWidth = useTransform(scrollY, [0, 50], ["auto", 0]);
  const logoDisplay = useTransform(scrollY, (latest) => latest > 50 ? "none" : "block");

  // Padding adjustment for smooth height change
  const headerPadding = useTransform(scrollY, [0, 100], [16, 12]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{
          backgroundColor, // Apply dynamic background
          backdropFilter, // Apply dynamic blur
          borderBottomColor: borderColor,
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          boxShadow,
          paddingTop: headerPadding,
          paddingBottom: headerPadding
        }}
        className="fixed top-0 right-0 left-0 z-50 transition-colors duration-200"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              style={{
                scale: logoScale,
                opacity: logoOpacity,
                width: logoWidth,
                display: logoDisplay,
                transformOrigin: "left center"
              }}
              className="origin-left"
            >
              <Image
                src="/images/logo.png"
                alt="PAVAN GOLD Logo"
                width={220}
                height={220}
                className="h-[7.5rem] w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm tracking-wide transition-colors duration-300 font-medium ${pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              href="tel:+919846192222"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground md:flex"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </motion.a>
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="p-2 text-foreground transition-colors hover:text-primary lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex h-full flex-col px-8 py-6"
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/images/logo.png"
                  alt="PAVAN GOLD Logo"
                  width={160}
                  height={80}
                  className="h-20 w-auto object-contain"
                  priority
                />
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-foreground hover:text-primary"
                  aria-label="Close navigation menu"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              <nav className="mt-12 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-3xl font-serif tracking-wide transition-colors ${pathname === link.href
                        ? "text-primary font-medium"
                        : "text-foreground/70 hover:text-primary"
                        }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-10">
                <a
                  href="tel:+919846192222"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-lg font-medium text-primary-foreground shadow-lg shadow-primary/20"
                >
                  <Phone className="h-5 w-5" />
                  +91 98461 92222
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
