"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide splash screen after 2.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
                >
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1], // Custom bezier for "featheristic" feel
                            }}
                            className="relative mb-6 h-32 w-32 md:h-48 md:w-48"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="PAVAN GOLD Logo"
                                fill
                                sizes="(max-width: 768px) 128px, 192px"
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Text Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-center"
                        >
                            <h1 className="font-serif text-3xl font-light tracking-[0.2em] text-primary md:text-5xl">
                                PAVAN GOLD
                            </h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="mx-auto mt-4 h-0.5 bg-primary/40"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1.2,
                                    duration: 0.8,
                                }}
                                className="mt-2 text-xs font-light tracking-[0.4em] text-muted-foreground md:text-sm"
                            >
                                DIAMOND | PLATINUM
                            </motion.p>
                        </motion.div>

                        {/* Loading Indicator (Optional futuristic touch) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="absolute bottom-[-100px]"
                        >
                            <div className="flex gap-2">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut",
                                        }}
                                        className="h-1.5 w-1.5 rounded-full bg-primary/60"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
