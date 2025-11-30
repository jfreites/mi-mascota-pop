"use client";

import { useState } from "react";

import ProductMainInfo from "./product-main-info";
import { Product } from "@/app/actions/products";


export default function ProductView({ product }: { product: Product }) {

    const [selectedColor, setSelectedColor] = useState("#6b7280");
    const [selectedSize, setSelectedSize] = useState("L");

    return (
        <section className="min-h-screen py-12 px-6 bg-gradient-to-t from-primary/20 to-primary/10">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <ProductMainInfo product={product} selectedColor={selectedColor} onColorChange={setSelectedColor} selectedSize={selectedSize} onSizeChange={setSelectedSize} />
                </div>
            </div>
        </section>
    );
}