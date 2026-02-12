"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Heart, Share2, CheckCircle, XCircle } from "lucide-react";
import { Product } from "@/lib/products";
import EnquiryModal from "@/components/enquiry-modal";
import { FadeInUp } from "@/components/animations";

interface ProductDetailsClientProps {
    product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    return (
        <div className="mx-auto max-w-7xl px-6">
            {/* Breadcrumb / Back Button */}
            <div className="mb-8">
                <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Collections
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Left Column: Image */}
                <FadeInUp>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary border border-border">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex flex-col gap-3">
                            <button className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all shadow-lg">
                                <Heart className="h-5 w-5" />
                            </button>
                            <button className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-blue-500 transition-all shadow-lg">
                                <Share2 className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </FadeInUp>

                {/* Right Column: Details */}
                <div className="flex flex-col justify-center">
                    <FadeInUp delay={0.1}>
                        <div className="mb-2">
                            <span className="text-sm font-medium text-primary tracking-wider uppercase">{product.category}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <p className="text-2xl font-medium text-foreground">₹{product.price.toLocaleString()}</p>
                            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${product.availability === "In Stock"
                                ? "bg-green-500/10 text-green-600 border-green-200"
                                : "bg-red-500/10 text-red-600 border-red-200"
                                }`}>
                                {product.availability === "In Stock" ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                {product.availability}
                            </div>
                        </div>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            {product.description || `Exquisite ${product.name} crafted with precision. This piece features high-quality ${product.type} set in a stunning design, perfect for ${product.occasion} and special moments.`}
                        </p>

                        {/* Product Codes & Specs */}
                        <div className="bg-card rounded-xl border border-border p-6 mb-8">
                            <h3 className="font-serif text-lg font-medium mb-4">Product Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Product Code</span>
                                    <span className="font-medium">{product.code}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Product Type</span>
                                    <span className="font-medium">{product.type}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Gross Weight</span>
                                    <span className="font-medium">{product.grossWeight}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Net Gold Weight</span>
                                    <span className="font-medium">{product.netWeight}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Occasion</span>
                                    <span className="font-medium">{product.occasion}</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Category</span>
                                    <span className="font-medium">{product.category}</span>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsEnquiryOpen(true)}
                                className="flex-1 bg-primary text-primary-foreground font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Enquire Now
                            </button>
                        </div>
                    </FadeInUp>
                </div>
            </div>

            <EnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                productName={product.name}
            />
        </div>
    );
}
