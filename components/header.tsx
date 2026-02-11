"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 shadow-lg shadow-primary/5 backdrop-blur-xl border-b border-primary/5"
          : "bg-transparent py-4"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <Link href="/" className="flex items-center gap-3 group">
            <AnimatePresence>
              {!isScrolled && (
                <motion.div
                  initial={{ opacity: 0, width: 0, scale: 0.5 }}
                  animate={{ opacity: 1, width: "auto", scale: 1 }}
                  exit={{ opacity: 0, width: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="origin-left"
                >
                  <Image
                    src="/images/logo.png"
                    alt="PAVAN GOLD Logo"
                    width={220}
                    height={220}
                    className="h-40 w-auto object-contain"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
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
