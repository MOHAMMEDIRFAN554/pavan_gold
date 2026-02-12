import Footer from "@/components/footer";
import Header from "@/components/header";
import { getProductById, products } from "@/lib/products";
import ProductDetailsClient from "../../../components/product-details-client";
import { notFound } from "next/navigation";

// Generate static params for all products to enable static export if needed
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(Number(id));

    if (!product) {
        return {
            title: "Product Not Found | PAVAN GOLD",
        };
    }

    return {
        title: `${product.name} | PAVAN GOLD`,
        description: product.description || `Buy ${product.name} - ${product.availability} at PAVAN GOLD`,
    };
}


export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(Number(id));

    if (!product) {
        notFound();
    }

    return (
        <main>
            <Header />
            <div className="pt-52 pb-16 min-h-screen bg-background">
                <ProductDetailsClient product={product} />
            </div>
            <Footer />
        </main>
    );
}
