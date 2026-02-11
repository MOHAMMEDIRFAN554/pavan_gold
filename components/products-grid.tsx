"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, MessageCircle, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FadeInUp, MagneticButton } from "./animations";
import EnquiryModal from "./enquiry-modal";

// Mock Product Data - 40 Items
const products = [
    // Rings (1-10)
    { id: 1, name: "Royal Diamond Ring", category: "Rings", price: 45000, image: "/images/rings.jpg", type: "Diamond", occasion: "Wedding" },
    { id: 2, name: "Classic Gold Band", category: "Rings", price: 15000, image: "/images/rings.jpg", type: "Gold", occasion: "Daily Wear" },
    { id: 3, name: "Platinum Solitaire", category: "Rings", price: 55000, image: "/images/rings.jpg", type: "Platinum", occasion: "Engagement" },
    { id: 4, name: "Ruby Gemstone Ring", category: "Rings", price: 25000, image: "/images/rings.jpg", type: "Gemstone", occasion: "Party" },
    { id: 5, name: "Emerald Gold Ring", category: "Rings", price: 30000, image: "/images/rings.jpg", type: "Gold", occasion: "Festival" },
    { id: 6, name: "Vintage Diamond Ring", category: "Rings", price: 60000, image: "/images/rings.jpg", type: "Diamond", occasion: "Wedding" },
    { id: 7, name: "Rose Gold Stackable", category: "Rings", price: 12000, image: "/images/rings.jpg", type: "Gold", occasion: "Daily Wear" },
    { id: 8, name: "Sapphire Cocktail Ring", category: "Rings", price: 40000, image: "/images/rings.jpg", type: "Gemstone", occasion: "Party" },
    { id: 9, name: "Platinum Love Band", category: "Rings", price: 35000, image: "/images/rings.jpg", type: "Platinum", occasion: "Anniversary" },
    { id: 10, name: "Antique Gold Ring", category: "Rings", price: 28000, image: "/images/rings.jpg", type: "Gold", occasion: "Festival" },

    // Necklaces (11-20)
    { id: 11, name: "Bridal Gold Choker", category: "Necklaces", price: 120000, image: "/images/necklaces.jpg", type: "Gold", occasion: "Wedding" },
    { id: 12, name: "Diamond Pendant Chain", category: "Necklaces", price: 45000, image: "/images/necklaces.jpg", type: "Diamond", occasion: "Daily Wear" },
    { id: 13, name: "Emerald Necklace", category: "Necklaces", price: 85000, image: "/images/necklaces.jpg", type: "Gemstone", occasion: "Party" },
    { id: 14, name: "Platinum Chain", category: "Necklaces", price: 55000, image: "/images/necklaces.jpg", type: "Platinum", occasion: "Daily Wear" },
    { id: 15, name: "Temple Jewellery Set", category: "Necklaces", price: 150000, image: "/images/necklaces.jpg", type: "Gold", occasion: "Festival" },
    { id: 16, name: "Layered Gold Chain", category: "Necklaces", price: 35000, image: "/images/necklaces.jpg", type: "Gold", occasion: "Party" },
    { id: 17, name: "Solitaire Necklace", category: "Necklaces", price: 65000, image: "/images/necklaces.jpg", type: "Diamond", occasion: "Engagement" },
    { id: 18, name: "Ruby Bead Necklace", category: "Necklaces", price: 22000, image: "/images/necklaces.jpg", type: "Gemstone", occasion: "Casual" },
    { id: 19, name: "Kundan Polki Set", category: "Necklaces", price: 95000, image: "/images/necklaces.jpg", type: "Gold", occasion: "Wedding" },
    { id: 20, name: "Mangalsutra Design", category: "Necklaces", price: 48000, image: "/images/necklaces.jpg", type: "Gold", occasion: "Daily Wear" },

    // Earrings (21-30)
    { id: 21, name: "Diamond Studs", category: "Earrings", price: 25000, image: "/images/earrings.jpg", type: "Diamond", occasion: "Daily Wear" },
    { id: 22, name: "Gold Jhumkas", category: "Earrings", price: 35000, image: "/images/earrings.jpg", type: "Gold", occasion: "Festival" },
    { id: 23, name: "Chandbali Earrings", category: "Earrings", price: 45000, image: "/images/earrings.jpg", type: "Gemstone", occasion: "Wedding" },
    { id: 24, name: "Platinum Drops", category: "Earrings", price: 30000, image: "/images/earrings.jpg", type: "Platinum", occasion: "Party" },
    { id: 25, name: "Ruby Studs", category: "Earrings", price: 18000, image: "/images/earrings.jpg", type: "Gemstone", occasion: "Daily Wear" },
    { id: 26, name: "Temple Jhumkas", category: "Earrings", price: 42000, image: "/images/earrings.jpg", type: "Gold", occasion: "Festival" },
    { id: 27, name: "Diamond Hoops", category: "Earrings", price: 55000, image: "/images/earrings.jpg", type: "Diamond", occasion: "Party" },
    { id: 28, name: "Pearl Drop Earrings", category: "Earrings", price: 12000, image: "/images/earrings.jpg", type: "Gemstone", occasion: "Daily Wear" },
    { id: 29, name: "Bridal Earring Set", category: "Earrings", price: 85000, image: "/images/earrings.jpg", type: "Gold", occasion: "Wedding" },
    { id: 30, name: "Sui Dhaga Earrings", category: "Earrings", price: 22000, image: "/images/earrings.jpg", type: "Gold", occasion: "Daily Wear" },

    // Bracelets (31-40)
    { id: 31, name: "Gold Bangle Set", category: "Bracelets", price: 65000, image: "/images/bracelets.jpg", type: "Gold", occasion: "Wedding" },
    { id: 32, name: "Diamond Tennis Bracelet", category: "Bracelets", price: 95000, image: "/images/bracelets.jpg", type: "Diamond", occasion: "Party" },
    { id: 33, name: "Platinum Cuff", category: "Bracelets", price: 45000, image: "/images/bracelets.jpg", type: "Platinum", occasion: "Daily Wear" },
    { id: 34, name: "Gemstone Bracelet", category: "Bracelets", price: 28000, image: "/images/bracelets.jpg", type: "Gemstone", occasion: "Festival" },
    { id: 35, name: "Traditional Kadas", category: "Bracelets", price: 75000, image: "/images/bracelets.jpg", type: "Gold", occasion: "Wedding" },
    { id: 36, name: "Charm Bracelet", category: "Bracelets", price: 18000, image: "/images/bracelets.jpg", type: "Gold", occasion: "Daily Wear" },
    { id: 37, name: "Rose Gold Bangle", category: "Bracelets", price: 32000, image: "/images/bracelets.jpg", type: "Gold", occasion: "Party" },
    { id: 38, name: "Men's Gold Bracelet", category: "Bracelets", price: 55000, image: "/images/bracelets.jpg", type: "Gold", occasion: "Daily Wear" },
    { id: 39, name: "Diamond Kada", category: "Bracelets", price: 110000, image: "/images/bracelets.jpg", type: "Diamond", occasion: "Wedding" },
    { id: 40, name: "Evil Eye Bracelet", category: "Bracelets", price: 15000, image: "/images/bracelets.jpg", type: "Gemstone", occasion: "Daily Wear" },
];

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
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                                            <Image
                                                src={product.image || "/images/placeholder-jewelry.jpg"}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
