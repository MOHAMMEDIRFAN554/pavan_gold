import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { FadeInUp, FloatingParticles, MagneticButton } from "@/components/animations";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />

            <div className="relative flex flex-1 flex-col items-center justify-center bg-background px-6 pt-32 pb-32 text-center overflow-hidden">
                {/* Animated Background Particles */}
                <FloatingParticles />

                <FadeInUp>
                    <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">

                        {/* 404 Jeweler Image */}
                        {/* <div className="relative w-full max-w-md aspect-[4/3] mb-8">
                            <img
                                src="/images/404.png"
                                alt="Jeweler looking for a hidden gem"
                                className="object-contain w-full h-full drop-shadow-2xl"
                            />
                        </div> */}

                        {/* Text Content */}
                        <div className="relative">
                            <h1 className="sr-only">404 - Page Not Found</h1>

                            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6">
                               Page Not Found
                            </h2>

                            <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed">
                                The page you're searching for seems to be as elusive as a rare diamond. It might have been moved or doesn't exist.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <MagneticButton>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02]"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Return Home
                                    </Link>
                                </MagneticButton>

                                <MagneticButton>
                                    <Link
                                        href="/products"
                                        className="flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-base font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
                                    >
                                        <Search className="h-4 w-4" />
                                        Browse Collections
                                    </Link>
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </FadeInUp>

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            <Footer />
        </main>
    );
}
