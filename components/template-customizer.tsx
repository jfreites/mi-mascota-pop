'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Canvas as FabricCanvas, FabricImage, IText, Path } from "fabric";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

import { ShoppingCart } from "lucide-react";

import borderCollie from "@/assets/pets/border-collie.png";
import husky from "@/assets/pets/husky.png";
import chihuahua from "@/assets/pets/chihuahua.png";
import poodle from "@/assets/pets/poodle.png";
import pastorAleman from "@/assets/pets/pastor-aleman.png";

import grayTshirt from "@/assets/playera-gray.png";
import whiteTshirt from "@/assets/playera-white.png";
import blackTshirt from "@/assets/playera-black.png";
//import blueTshirt from "@/assets/tshirt-navy.png";

const TSHIRT_COLORS = [
    { name: "Blanco", textColor: "#000000", image: whiteTshirt },
    { name: "Negro", textColor: "#f7d113ff", image: blackTshirt },
    { name: "Gris", textColor: "#2f3236ff", image: grayTshirt },
    //{ name: "Azul", textColor: "#dededeff", image: blueTshirt },
];

const SIZES = ["S", "M", "L", "XL", "2XL"];

const DOG_HEADS = [
    { name: "Border Collie", src: borderCollie },
    { name: "Husky", src: husky },
    { name: "Chihuahua", src: chihuahua },
    { name: "Poodle", src: poodle },
    { name: "Pastor Aleman", src: pastorAleman },
];

const DEFAULT_PET_NAME = "El Nombre";
const DEFAULT_PHRASE = "El Rey de la Casa";

const TemplateCustomizer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
    const [selectedColor, setSelectedColor] = useState(TSHIRT_COLORS[0]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [petName, setPetName] = useState(DEFAULT_PET_NAME);
    const [selectedHead, setSelectedHead] = useState(DOG_HEADS[0]);
    const [isMale, setIsMale] = useState(true);

    // Initialize Canvas
    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = new FabricCanvas(canvasRef.current, {
            width: 200,
            height: 250,
            backgroundColor: "transparent",
            selection: false, // Disable group selection
        });

        setFabricCanvas(canvas);

        return () => {
            canvas.dispose();
        };
    }, []);

    // Update Canvas Content
    useEffect(() => {
        if (!fabricCanvas) return;

        fabricCanvas.clear();

        // 1. Top Text: Pet Name
        // Create a curved path
        const path = new Path('M 0 0 Q 100 -50 200 0', {
            visible: false,
            fill: '',
            stroke: '',
        });

        const topText = new IText(petName.toUpperCase(), {
            left: fabricCanvas.width! / 2,
            top: 50,
            originX: "center",
            originY: "center",
            fontSize: 32,
            fill: selectedColor.textColor,
            fontFamily: "Chewy, Arial, sans-serif",
            selectable: false,
            evented: false,
            path: path,
            textAlign: 'center',
        });
        fabricCanvas.add(topText);

        // 2. Center Image: Dog Head
        FabricImage.fromURL(selectedHead.src.src).then((img) => {
            const maxWidth = 120;
            const maxHeight = 120;
            const scale = Math.min(maxWidth / img.width!, maxHeight / img.height!);

            img.scale(scale);
            img.set({
                left: fabricCanvas.width! / 2,
                top: fabricCanvas.height! / 2,
                originX: "center",
                originY: "center",
                selectable: false,
                evented: false,
            });
            fabricCanvas.add(img);

            // Ensure render happens after image load
            fabricCanvas.renderAll();
        });

        // 3. Bottom Text: Fixed Phrase
        const bottomText = new IText(DEFAULT_PHRASE.toUpperCase(), {
            left: fabricCanvas.width! / 2,
            top: fabricCanvas.height! - 30,
            originX: "center",
            originY: "bottom",
            fontSize: 20,
            fill: selectedColor.textColor,
            fontFamily: "Chewy, Arial, sans-serif",
            selectable: false,
            evented: false,
        });
        fabricCanvas.add(bottomText);

        fabricCanvas.renderAll();

    }, [fabricCanvas, petName, selectedHead, selectedColor]);

    const handleAddToCart = () => {
        // Save canvas state along with t-shirt details
        const canvasState = fabricCanvas?.toJSON();
        const previewImage = fabricCanvas?.toDataURL({
            format: 'png',
            quality: 1,
            multiplier: 2,
        });

        const designData = {
            canvasState,
            previewImage,
            color: selectedColor.name,
            size: selectedSize,
            timestamp: new Date().toISOString(),
            type: "template-name",
            details: {
                petName,
                head: selectedHead.name
            }
        };

        // Get existing cart items from localStorage
        const existingCart = localStorage.getItem("customTshirtCart");
        const cartItems = existingCart ? JSON.parse(existingCart) : [];

        // Add new design to cart
        cartItems.push(designData);
        localStorage.setItem("customTshirtCart", JSON.stringify(cartItems));

        toast.success("Producto agregado al carrito!");
    };

    return (
        <div className="flex flex-col lg:flex-row gap-2 max-w-6xl mx-auto">
            {/* Preview Section */}
            <Card className="animate-slide-up w-full">
                <CardHeader>
                    <CardTitle>Preview Playera</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-[500px]">
                            {/* T-shirt image */}
                            <img
                                src={selectedColor.image.src}
                                alt={`${selectedColor.name} t-shirt`}
                                className="w-full h-auto"
                            />

                            {/* Canvas overlay positioned on the t-shirt */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-[200px] aspect-[4/5]">
                                <canvas ref={canvasRef} className="w-full h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Color Selection */}
                    <div className="space-y-2">
                        <Label>Color Playera</Label>
                        <RadioGroup
                            value={selectedColor.name}
                            onValueChange={(value) => {
                                const color = TSHIRT_COLORS.find((c) => c.name === value);
                                if (color) setSelectedColor(color);
                            }}
                        >
                            <div className="flex gap-3 flex-wrap">
                                {TSHIRT_COLORS.map((color) => (
                                    <div key={color.name} className="flex items-center space-x-2">
                                        <RadioGroupItem value={color.name} id={color.name} />
                                        <Label
                                            htmlFor={color.name}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <img
                                                src={color.image.src}
                                                alt={color.name}
                                                className="w-12 h-12 object-cover rounded-md border-2 border-border"
                                            />
                                            {color.name}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </CardContent>
            </Card>

            {/* Controls Section */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-2xl font-bold">
                            Playera Personalizada "El Rey de la Casa" Unisex
                        </h2>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Pet Name Input */}
                    <div className="space-y-2">
                        <Label>Nombre de tu Mascota</Label>
                        <Input
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                            placeholder="Nombre Mascota"
                        />
                    </div>

                    {/* Dog Head Selection */}
                    <div className="space-y-2">
                        <Label>Elige la raza</Label>
                        <div className="grid grid-cols-3 gap-2">
                            {DOG_HEADS.map((head) => (
                                <button
                                    key={head.name}
                                    onClick={() => setSelectedHead(head)}
                                    className={`relative aspect-square rounded-lg border-2 transition-all overflow-hidden bg-background hover:scale-105 ${selectedHead.name === head.name ? "border-primary ring-2 ring-primary/50" : "border-border"
                                        }`}
                                    title={head.name}
                                >
                                    <Image
                                        src={head.src}
                                        alt={head.name}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="space-y-2">
                        <Label>Selecciona la Talla</Label>
                        <RadioGroup
                            value={selectedSize}
                            onValueChange={setSelectedSize}
                        >
                            <div className="flex gap-2 flex-wrap">
                                {SIZES.map((size) => (
                                    <div key={size} className="flex items-center">
                                        <RadioGroupItem value={size} id={size} className="sr-only" />
                                        <Label
                                            htmlFor={size}
                                            className={`cursor-pointer px-4 py-2 rounded-md border-2 transition-all ${selectedSize === size
                                                ? "border-primary bg-primary text-primary-foreground"
                                                : "border-border hover:border-primary/50"
                                                }`}
                                        >
                                            {size}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Price and Add to Cart */}
                    <div className="pt-6 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-semibold text-foreground">
                                Playera Mascota
                            </span>
                            <span className="text-2xl font-bold text-primary">$249.99</span>
                        </div>
                        <Button
                            onClick={handleAddToCart}
                            className="w-full hover:scale-105 transition-transform"
                            size="lg"
                        >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Comprar Ahora
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TemplateCustomizer;
