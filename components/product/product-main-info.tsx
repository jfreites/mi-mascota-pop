"use client";

import { Package, Star, Truck } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Product } from "@/app/actions/products";

const colors = [
    { name: "Blanco", value: "#ffffff" },
    { name: "Azul marino", value: "#1e3a8a" },
    { name: "Negro", value: "#1a1a1a" },
    { name: "Gris", value: "#6b7280" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

interface ProductInfoProps {
    selectedColor: string;
    onColorChange: (color: string) => void;
    selectedSize: string;
    onSizeChange: (size: string) => void;
    product: Product;
}

const rating = 4.6;
const reviews = 33220;

export default function ProductMainInfo({
    selectedColor,
    onColorChange,
    selectedSize,
    onSizeChange,
    product }: ProductInfoProps) {

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                    {product.name}
                </h1>
                <div className="text-muted-foreground text-md py-4">{product.description}</div>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-amber-300 text-accent" />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{rating} ({reviews} opiniones)</span>
                </div>
            </div>
            <div className="text-3xl font-bold text-foreground">${product.price}</div>

            {/* 
            <div className="space-y-3">
                <Label>Color: {colors.find(c => c.value === selectedColor)?.name}</Label>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => onColorChange(color.value)}
                            className={`w-10 h-10 rounded-full border-2 transition-all apparel-color-${color.value} ${selectedColor === color.value
                                ? "border-primary scale-110"
                                : "border-border hover:border-primary/50"
                                }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>
            */}

            <div className="space-y-3">
                <Label>Color: {product.colors && product.colors.find(color => color === selectedColor)}</Label>
                <div className="flex flex-wrap gap-2">
                    {product.colors && product.colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => onColorChange(color)}
                            className={`w-10 h-10 rounded-full border-2 transition-all apparel-color-${color} ${selectedColor === color
                                ? "border-primary scale-110"
                                : "border-border hover:border-primary/50"
                                }`}
                            title={color}
                        />
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <Label>Elige talla</Label>
                <div className="grid grid-cols-5 gap-2">
                    {sizes.map((size) => (
                        <Button
                            key={size}
                            variant={selectedSize === size ? "default" : "outline"}
                            onClick={() => onSizeChange(size)}
                            className="font-semibold"
                        >
                            {size}
                        </Button>
                    ))}
                </div>
            </div>

            <Button className="w-full h-12 text-lg font-semibold cursor-pointer" size="lg">
                Añadir a la cesta
            </Button>

            <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Estándar: 20 Nov - 25 Nov ¡Gratis!</span>
                </div>
                <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span>Cambios o devoluciones hasta 90 días</span>
                </div>
            </div>
        </div>
    );
}