'use client';

import { useState } from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ShoppingCart} from "lucide-react";

import products from "@/data/products.json";

const ProductsShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <>
            <section className="container mx-auto px-6 py-12">
            <div className="flex justify-center gap-4 flex-wrap animate-slide-up">
                <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("all")}
                    className="hover:scale-105 transition-transform"
                >
                    All Products
                </Button>
                <Button
                    variant={selectedCategory === "t-shirt" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("t-shirt")}
                    className="hover:scale-105 transition-transform"
                >
                    T-Shirts & Hoodies
                </Button>
                <Button
                    variant={selectedCategory === "accessory" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("accessory")}
                    className="hover:scale-105 transition-transform"
                >
                    Accessories
                </Button>
            </div>
        </section>
            <section className="container mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                    <Card
                        key={product.id}
                        className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                                New
                            </Badge>
                        </div>
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                                <Button
                                    size="sm"
                                    className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                                >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                            {product.colors && (
                                <div className="flex gap-2 mt-4">
                                    {product.colors.slice(0, 4).map((color) => (
                                        <div
                                            key={color}
                                            className="w-6 h-6 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                                            style={{
                                                backgroundColor: color === "natural" ? "#f5f5dc" :
                                                    color === "cream" ? "#fffdd0" :
                                                        color === "sage" ? "#9caf88" :
                                                            color === "coral" ? "#ff7f7f" :
                                                                color === "sky" ? "#87ceeb" :
                                                                    color === "lavender" ? "#e6e6fa" :
                                                                        color === "mint" ? "#98ff98" :
                                                                            color === "rose-gold" ? "#b76e79" :
                                                                                color === "khaki" ? "#f0e68c" :
                                                                                    color === "burgundy" ? "#800020" :
                                                                                        color === "turquoise" ? "#40e0d0" : color
                                            }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
        </>
    );
};

export default ProductsShowcase;