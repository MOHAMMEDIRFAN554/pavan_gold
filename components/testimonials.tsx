"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FadeInUp } from "./animations";

const testimonials = [
    {
        text: "Beautiful handmade jewellery. value for money, bound to grab attention wherever you go, love it!",
        author: "Pavan Gold",
    },
    {
        text: "pavan gold have ultimate wedding collections, with reasonable package",
        author: "pavan gold",
    },
    {
        text: "Beautiful handmade jewellery. value for money, bound to grab attention wherever you go, love it!",
        author: "Pavan Gold",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-secondary py-20">
            {/* Background Pattern - Subtle geometric pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <FadeInUp>
                    <div className="mb-12 text-center">
                        <h2 className="font-serif text-3xl font-light tracking-wider text-primary sm:text-4xl">
                            TESTIMONIALS
                        </h2>
                        <div className="mx-auto mt-4 h-px w-20 bg-primary/30" />
                    </div>
                </FadeInUp>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <FadeInUp key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="relative flex h-full flex-col rounded-2xl border border-primary/10 bg-background/50 p-8 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
                            >
                                <Quote className="mb-6 h-8 w-8 text-primary/40" />
                                <p className="mb-6 flex-grow font-serif text-lg leading-relaxed text-muted-foreground italic">
                                    "{testimonial.text}"
                                </p>
                                <div className="mt-auto flex items-center gap-3">
                                    <div className="h-px w-8 bg-primary/30" />
                                    <p className="font-medium tracking-wide text-primary">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </motion.div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
