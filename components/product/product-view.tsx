"use client";

import { useState } from "react";

import ProductCustomizer from "./product-customizer";
import ProductGallery from "./product-gallery";
import ProductMainInfo from "./product-main-info";
import RelatedProducts from "./related-products";
import { Product } from "@/app/actions/products";


export default function ProductView({ product }: { product: Product }) {

    const [selectedColor, setSelectedColor] = useState("#6b7280");
    const [selectedSize, setSelectedSize] = useState("L");

    return (
        <section className="min-h-screen py-12 px-6 bg-gradient-to-t from-primary/20 to-primary/10">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <ProductGallery product={product} />
                    <ProductMainInfo product={product} selectedColor={selectedColor} onColorChange={setSelectedColor} selectedSize={selectedSize} onSizeChange={setSelectedSize} />
                    {product.is_customizable && (
                        <ProductCustomizer config={product.customizationConfig} />
                    )}
                </div>
                <RelatedProducts productId={product.id} />
            </div>
        </section>
    );
}