'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Canvas as FabricCanvas, FabricImage, IText } from "fabric";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Upload, RotateCw, ZoomIn, ZoomOut, Trash2, ShoppingCart, Type } from "lucide-react";

import { toast } from "sonner";

import pawPrint from "@/assets/gallery/paw-print.png";
import dogFace from "@/assets/gallery/dog-face.png";
import catFace from "@/assets/gallery/cat-face.png";
import dogBone from "@/assets/gallery/dog-bone.png";
import catFish from "@/assets/gallery/cat-fish.png";

import grayTshirt from "@/assets/playera-gray.png";
import whiteTshirt from "@/assets/playera-white.png";
import blackTshirt from "@/assets/playera-black.png";

const TSHIRT_COLORS = [
    { name: "Blanco", textColor: "#000000", image: whiteTshirt },
    { name: "Negro", textColor: "#ffffff", image: blackTshirt },
    { name: "Gris", textColor: "#6b7280", image: grayTshirt },
];

const SIZES = ["S", "M", "L", "XL", "2XL"];

const GALLERY_IMAGES = [
    { name: "Paw Print", src: pawPrint },
    { name: "Dog Face", src: dogFace },
    { name: "Cat Face", src: catFace },
    { name: "Dog Bone", src: dogBone },
    { name: "Cat Fish", src: catFish },
];

const Customizer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
    const [selectedColor, setSelectedColor] = useState(TSHIRT_COLORS[0]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [textInput, setTextInput] = useState("");
    const [hasDesign, setHasDesign] = useState(false);
    const [removeBg, setRemoveBg] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = new FabricCanvas(canvasRef.current, {
            width: 200,
            height: 250,
            backgroundColor: "transparent",
        });



        setFabricCanvas(canvas);

        return () => {
            canvas.dispose();
        };
    }, []);

    // Handle click outside canvas to deselect objects
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fabricCanvas && canvasRef.current) {
                // Fabric wraps the canvas in a div, so we check if the click is outside that wrapper
                // If wrapper doesn't exist (unlikely if initialized), fallback to canvasRef
                const canvasWrapper = canvasRef.current.parentElement;
                const target = event.target as Node;

                const isClickInside = canvasWrapper
                    ? canvasWrapper.contains(target)
                    : canvasRef.current.contains(target);

                if (!isClickInside) {
                    fabricCanvas.discardActiveObject();
                    fabricCanvas.requestRenderAll();
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [fabricCanvas]);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Please upload an image file");
            return;
        }

        setSelectedFile(file);
        toast.success("Image selected! Click 'Add to Canvas' to proceed.");
    };

    const handleProcessImage = async () => {
        if (!selectedFile) return;

        const file = selectedFile;

        let imageUrl = "";

        if (removeBg) {
            const apiKey = process.env.NEXT_PUBLIC_REMOVE_BG_API_KEY;
            if (!apiKey) {
                toast.error("API Key for remove.bg is missing in .env.local");
                return;
            }

            const toastId = toast.loading("Removing background...");

            try {
                const formData = new FormData();
                formData.append("size", "auto");
                formData.append("image_file", file);

                const response = await fetch("https://api.remove.bg/v1.0/removebg", {
                    method: "POST",
                    headers: {
                        "X-Api-Key": apiKey,
                    },
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error("Failed to remove background");
                }

                const blob = await response.blob();
                imageUrl = URL.createObjectURL(blob);
                toast.success("Background removed successfully!", { id: toastId });
            } catch (error) {
                console.error("Error removing background:", error);
                toast.error("Failed to remove background. Using original image.", { id: toastId });
                // Fallback to original image
                imageUrl = URL.createObjectURL(file);
            }
        } else {
            imageUrl = URL.createObjectURL(file);
        }

        FabricImage.fromURL(imageUrl).then((img) => {
            if (!fabricCanvas) return;

            // Scale image to fit nicely on the t-shirt
            const maxWidth = 250;
            const maxHeight = 250;
            const scale = Math.min(maxWidth / img.width!, maxHeight / img.height!);

            img.scale(scale);
            img.set({
                left: fabricCanvas.width! / 2,
                top: fabricCanvas.height! / 2,
                originX: "center",
                originY: "center",
            });

            fabricCanvas.add(img);
            fabricCanvas.setActiveObject(img);

            // Bring all text objects to front
            fabricCanvas.getObjects().forEach((obj) => {
                if (obj.type === 'text') {
                    fabricCanvas.bringObjectToFront(obj);
                }
            });

            fabricCanvas.renderAll();
            setHasDesign(true);
            toast.success("Pet photo uploaded! Adjust size and position as needed.");
        });
    };

    const handleGalleryImageSelect = (imageSrc: { src: string }) => {
        FabricImage.fromURL(imageSrc.src).then((img) => {
            if (!fabricCanvas) return;

            // Scale image to fit nicely on the t-shirt
            const maxWidth = 200;
            const maxHeight = 200;
            const scale = Math.min(maxWidth / img.width!, maxHeight / img.height!);

            img.scale(scale);
            img.set({
                left: fabricCanvas.width! / 2,
                top: fabricCanvas.height! / 2,
                originX: "center",
                originY: "center",
            });

            fabricCanvas.add(img);
            fabricCanvas.setActiveObject(img);

            // Bring all text objects to front
            fabricCanvas.getObjects().forEach((obj) => {
                if (obj.type === 'text') {
                    fabricCanvas.bringObjectToFront(obj);
                }
            });

            fabricCanvas.renderAll();
            setHasDesign(true);
            toast.success("Gallery image added!");
        });
    };

    const handleAddText = () => {
        if (!fabricCanvas || !textInput.trim()) {
            toast.error("Please enter some text first!");
            return;
        }

        const text = new IText(textInput, {
            left: fabricCanvas.width! / 2,
            top: fabricCanvas.height! / 2,
            originX: "center",
            originY: "center",
            fontSize: 40,
            fill: selectedColor.textColor,
            fontFamily: "Chewy, Arial, sans-serif",
        });

        fabricCanvas.add(text);
        fabricCanvas.setActiveObject(text);
        fabricCanvas.bringObjectToFront(text); // Keep text always on top
        fabricCanvas.renderAll();
        setHasDesign(true);
        setTextInput("");
        toast.success("Text added! Drag to reposition.");
    };

    const handleZoomIn = () => {
        const activeObject = fabricCanvas?.getActiveObject();
        if (activeObject) {
            const currentScale = activeObject.scaleX || 1;
            activeObject.scale(currentScale * 1.1);
            fabricCanvas?.renderAll();
        }
    };

    const handleZoomOut = () => {
        const activeObject = fabricCanvas?.getActiveObject();
        if (activeObject) {
            const currentScale = activeObject.scaleX || 1;
            activeObject.scale(currentScale * 0.9);
            fabricCanvas?.renderAll();
        }
    };

    const handleRotate = () => {
        const activeObject = fabricCanvas?.getActiveObject();
        if (activeObject) {
            const currentAngle = activeObject.angle || 0;
            activeObject.rotate(currentAngle + 15);
            fabricCanvas?.renderAll();
        }
    };

    const handleDeleteSelected = () => {
        const activeObject = fabricCanvas?.getActiveObject();
        if (activeObject) {
            fabricCanvas?.remove(activeObject);
            fabricCanvas?.renderAll();

            // Check if canvas still has objects
            if (fabricCanvas?.getObjects().length === 0) {
                setHasDesign(false);
            }
            toast("Object removed");
        } else {
            toast.error("Please select an object to delete");
        }
    };

    const handleClearAll = () => {
        fabricCanvas?.clear();
        setHasDesign(false);
        toast("Design cleared");
    };

    const handleAddToCart = () => {
        if (!hasDesign) {
            toast.error("Please select a design first!");
            return;
        }

        // Save canvas state along with t-shirt details
        const canvasState = fabricCanvas?.toJSON();
        const previewImage = fabricCanvas?.toDataURL({
            format: 'png',
            quality: 1,
            multiplier: 2, // Higher resolution for printing
        });

        const designData = {
            canvasState,
            previewImage,
            color: selectedColor.name,
            size: selectedSize,
            timestamp: new Date().toISOString(),
        };

        // Get existing cart items from localStorage
        const existingCart = localStorage.getItem("customTshirtCart");
        const cartItems = existingCart ? JSON.parse(existingCart) : [];

        // Add new design to cart
        cartItems.push(designData);
        localStorage.setItem("customTshirtCart", JSON.stringify(cartItems));

        toast.success("Custom t-shirt added to cart!");
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
                                <canvas ref={canvasRef} className="w-full h-full border-2 border-dashed border-red-500" />
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
                    <CardTitle>Herramientas de Personalización</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Upload Section */}
                    <div className="space-y-2">
                        <Label>Sube la foto de tu Mascota</Label>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                        <div className="flex flex-col gap-2">
                            <Button
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full"
                                variant="outline"
                            >
                                <Upload className="w-4 h-4 mr-2" />
                                {selectedFile ? "Change Photo" : "Choose Photo"}
                            </Button>

                            {selectedFile && (
                                <div className="text-sm text-muted-foreground text-center truncate px-2">
                                    {selectedFile.name}
                                </div>
                            )}

                            <div className="flex items-center space-x-2 pt-2 justify-center">
                                <input
                                    type="checkbox"
                                    id="remove-bg"
                                    checked={removeBg}
                                    onChange={(e) => setRemoveBg(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <Label htmlFor="remove-bg" className="text-sm font-normal cursor-pointer">
                                    Quitar fondo (Powered by remove.bg)
                                </Label>
                            </div>

                            <Button
                                onClick={handleProcessImage}
                                disabled={!selectedFile}
                                className="w-full mt-2"
                            >
                                Add to Canvas
                            </Button>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="space-y-2">
                        <div className="text-center items-center justify-center flex font-semibold py-6">
                            O Elige un diseño de la galería
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            {GALLERY_IMAGES.map((image) => (
                                <button
                                    key={image.name}
                                    onClick={() => handleGalleryImageSelect(image.src)}
                                    className="relative aspect-square rounded-lg border-2 border-border hover:border-primary transition-all overflow-hidden bg-background hover:scale-105"
                                    title={image.name}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.name}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add Text Section */}
                    <div className="space-y-2">
                        <Label>Agrega un Texto</Label>
                        <div className="flex gap-2">
                            <Input
                                value={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                                placeholder="Ej: el nombre de tu mascota..."
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleAddText();
                                }}
                            />
                            <Button onClick={handleAddText} variant="outline">
                                <Type className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Adjustment Controls */}
                    {hasDesign && (
                        <div className="space-y-4 animate-fade-in">
                            <Label>Adjust Your Design</Label>
                            <div className="grid grid-cols-2 gap-3">
                                <Button
                                    onClick={handleZoomIn}
                                    variant="outline"
                                    className="hover:scale-105 transition-transform"
                                >
                                    <ZoomIn className="w-4 h-4 mr-2" />
                                    Zoom In
                                </Button>
                                <Button
                                    onClick={handleZoomOut}
                                    variant="outline"
                                    className="hover:scale-105 transition-transform"
                                >
                                    <ZoomOut className="w-4 h-4 mr-2" />
                                    Zoom Out
                                </Button>
                                <Button
                                    onClick={handleRotate}
                                    variant="outline"
                                    className="hover:scale-105 transition-transform"
                                >
                                    <RotateCw className="w-4 h-4 mr-2" />
                                    Rotate
                                </Button>
                                <Button
                                    onClick={handleDeleteSelected}
                                    variant="outline"
                                    className="hover:scale-105 transition-transform text-destructive"
                                >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete Selected
                                </Button>
                            </div>

                            <Button
                                onClick={handleClearAll}
                                variant="outline"
                                className="w-full text-destructive"
                            >
                                Clear All
                            </Button>

                            <p className="text-sm text-muted-foreground">
                                💡 Tip: Click an object to select it, then drag to reposition
                            </p>
                        </div>
                    )}

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
                                Playera Personalizada
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

export default Customizer;