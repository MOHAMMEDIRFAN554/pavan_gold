"use client";

import React from "react"

import { motion } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import {
  FadeInUp,
  GoldLine,
  MagneticButton,
  SlideInLeft,
  SlideInRight,
} from "./animations";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "PAVAN GOLD ",
    detail: "20/29, A-C, P-R, K.M. Complex, Thazhepalam, Town Hall Road, Tirur, Malappuram - 670101",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "0494 2423916",
    detail: "",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 98461 92222",
    detail: "",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mail@pavangold.com",
    detail: "We respond within 24 hours",
  },
  {
    icon: Clock,
    label: "Store Hours",
    value: "Mon - Sat: 9:30 AM - 8:00 PM",
    detail: "Sunday: 10:00 AM - 6:00 PM",
  },
];

export default function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <SlideInLeft>
            <div>
              <span className="text-xs tracking-[0.3em] text-primary">
                SEND A MESSAGE
              </span>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-wide">
                {"We'd Love to Hear"}
                <br />
                <span className="gold-shimmer font-medium">From You</span>
              </h2>
              <GoldLine className="mt-6 w-20" />

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs tracking-wider text-muted-foreground"
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-3 text-foreground transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs tracking-wider text-muted-foreground"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-3 text-foreground transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs tracking-wider text-muted-foreground"
                  >
                    TELEPHONE
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent py-3 text-foreground transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs tracking-wider text-muted-foreground"
                  >
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="mt-2">
                  <MagneticButton>
                    <button
                      type="submit"
                      className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                    >
                      {submitted ? (
                        "Message Sent!"
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </SlideInLeft>

          {/* Contact Info */}
          <SlideInRight>
            <div className="flex flex-col gap-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex gap-5 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider text-primary">
                      {info.label}
                    </p>
                    <p className="mt-1 font-medium text-foreground">
                      {info.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideInRight>
        </div>

        {/* Map - Full Width */}
        <FadeInUp delay={0.5}>
          <div className="mt-16 flex flex-col gap-6">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-light text-primary">
                Visit Our Store
              </h3>
              <p className="mt-2 text-muted-foreground">
                Find us easily on the map below for directions to our showroom
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6550376851205!2d75.91718827479397!3d10.913799656645306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b1f250c039cf%3A0x4d577df24b1f25c4!2sPAVAN%20GOLD%20TIRUR!5e0!3m2!1sen!2sin!4v1770799036025!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PAVAN GOLD location on Google Maps"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
