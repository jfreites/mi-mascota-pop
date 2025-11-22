import { notFound } from 'next/navigation';
import ProductDetails from "@/components/product-details";

import type Product from "@/types/product.type";

import { fakeProducts } from "@/lib/fakeData";

// Simulate a data fetching function
async function getProductBySlug(slug: string): Promise<Product | null> {
    // In a real application, you would fetch data from a database or API
    return fakeProducts.find(product => product.slug === slug) || null;
}

export default async function ProductPage({ params } : { params: { slug: string } }) {

    const { slug } = await params;

    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <section className="container mx-auto px-4 py-8">
            <ProductDetails product={product} />
        </section>
    )
}