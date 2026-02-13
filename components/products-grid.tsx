"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, MessageCircle, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FadeInUp, MagneticButton } from "./animations";
import EnquiryModal from "./enquiry-modal";
import { products } from "@/lib/products";
import Link from "next/link";

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];
const types = ["All", "Gold", "Diamond", "Platinum", "Gemstone"];
const occasions = ["All", "Daily Wear", "Wedding", "Engagement", "Party", "Festival"];

export default function ProductsGrid() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [selectedOccasion, setSelectedOccasion] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    const [wishlist, setWishlist] = useState<Set<number>>(new Set());

    const toggleWishlist = (id: number) => {
        setWishlist(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesType = selectedType === "All" || product.type === selectedType;
        const matchesOccasion = selectedOccasion === "All" || product.occasion === selectedOccasion;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesType && matchesOccasion && matchesSearch;
    });

    return (
        <section className="py-12 min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-6">

                {/* Controls Header */}
                <FadeInUp>
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">

                        {/* Search */}
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search jewellery..."
                                className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filter Toggle (Mobile) & Category Tabs (Desktop) */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card md:hidden"
                            >
                                <Filter className="h-4 w-4" />
                                Filters
                            </button>

                            <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeInUp>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <motion.aside
                        initial={false}
                        animate={{
                            height: showFilters ? "auto" : "auto",
                            opacity: showFilters ? 1 : 1
                        }}
                        className={`w-full lg:w-64 space-y-8 ${showFilters ? "block" : "hidden lg:block"}`}
                    >
                        <div>
                            <h3 className="font-serif text-lg font-medium mb-4">Material</h3>
                            <div className="flex flex-wrap gap-2">
                                {types.map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        className={`px-3 py-1 text-xs rounded-full border transition-all ${selectedType === type
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-border text-muted-foreground hover:border-primary/50"
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-lg font-medium mb-4">Occasion</h3>
                            <div className="space-y-2">
                                {occasions.map(occasion => (
                                    <div
                                        key={occasion}
                                        onClick={() => setSelectedOccasion(occasion)}
                                        className="flex items-center gap-2 cursor-pointer group"
                                    >
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedOccasion === occasion ? "border-primary" : "border-muted-foreground group-hover:border-primary"
                                            }`}>
                                            {selectedOccasion === occasion && <div className="w-2 h-2 rounded-full bg-primary" />}
                                        </div>
                                        <span className={`text-sm transition-colors ${selectedOccasion === occasion ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-primary"
                                            }`}>
                                            {occasion}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <motion.div
                            layout
                            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                        >
                            <AnimatePresence>
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        className="group"
                                    >
                                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
                                            <Link href={`/products/${product.id}`} className="block h-full w-full relative">
                                                <Image
                                                    src={product.image || "/images/placeholder-jewelry.jpg"}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"

                                                />
                                            </Link>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                                            {/* Wishlist Button */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleWishlist(product.id);
                                                }}
                                                className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all z-10"
                                            >
                                                <Heart
                                                    className={`h-5 w-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : ""}`}
                                                />
                                            </button>

                                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                                <MagneticButton className="w-full">
                                                    <button
                                                        onClick={() => setSelectedProduct(product)}
                                                        className="w-full bg-white text-black font-medium py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-primary hover:text-white transition-colors"
                                                    >
                                                        <MessageCircle className="h-4 w-4" />
                                                        Enquire Now
                                                    </button>
                                                </MagneticButton>
                                            </div>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="text-xs text-primary tracking-wider uppercase">{product.category}</p>
                                            <h3 className="font-serif text-lg font-medium mt-1">{product.name}</h3>
                                            <p className="text-muted-foreground mt-1">₹{product.price.toLocaleString()}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory("All");
                                        setSelectedType("All");
                                        setSelectedOccasion("All");
                                        setSearchQuery("");
                                    }}
                                    className="mt-4 text-primary hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                productName={selectedProduct?.name || ""}
            />
        </section>
    );
}
