"use client"
import { useState, useRef } from "react";
import { Star, Upload, Package, Truck, MoveUp, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Product from "@/types/product.type";
import CartoonUploader from "@/components/cartoon-uploader";
import ProductCanva from "@/components/product-canva";

interface ProductCustomizationProps {
    onImageUpload: (imageUrl: string) => void;
    onTextChange: (text: string) => void;
    selectedColor: string;
    onColorChange: (color: string) => void;
    selectedSize: string;
    onSizeChange: (size: string) => void;
    imagePosition: number;
    onImagePositionChange: (position: number) => void;
    hasImage: boolean;
    product: Product;
}

const colors = [
    { name: "Blanco", value: "#ffffff" },
    //{ name: "Azul marino", value: "#1e3a8a" },
    { name: "Negro", value: "#1a1a1a" },
    { name: "Gris", value: "#6b7280" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

const ProductCustomization = ({
    onImageUpload,
    onTextChange,
    selectedColor,
    onColorChange,
    selectedSize,
    onSizeChange,
    imagePosition,
    onImagePositionChange,
    hasImage,
    product,
}: ProductCustomizationProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [customText, setCustomText] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("La imagen debe ser menor a 5MB");
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    onImageUpload(event.target.result as string);
                    toast.success("Imagen cargada correctamente");
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setCustomText(text);
        onTextChange(text);
    };

    const handleUploadChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            toast.error("La imagen debe ser menor a 5MB");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        setLoading(true);
        try {
            const res = await fetch("/api/process-image", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.processedImageBase64) {
                onImageUpload(`data:image/png;base64,${data.processedImageBase64}` as string);
            } else if (data.processedImageUrl) {
                onImageUpload(data.processedImageUrl as string);
            } else {
                console.error("No image returned from API");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Product Title and Rating */}
            <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                    {product.name}
                </h1>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-amber-300 text-accent" />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground">4.6 (33,220 opiniones)</span>
                </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-foreground">$398.97</div>

            {/* Personalization Section */}
            <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Personaliza tu playera
                </h3>

                {/*}
                <div className="space-y-2">
                    <Label>Tu foto</Label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleUploadChange}
                        className="hidden"
                    />
                    <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        className="w-full bg-primary/10 hover:bg-primary/20 border-primary/20"
                    >
                        <Upload className="w-4 h-4 mr-2" />
                        Reemplazar foto
                    </Button>

                    {loading && <p>Generando caricatura...</p>}

                    {hasImage && (
                        <div className="flex gap-2 mt-2">
                            <Button
                                onClick={() => onImagePositionChange(Math.max(0, imagePosition - 10))}
                                variant="outline"
                                size="sm"
                                className="flex-1"
                            >
                                <MoveUp className="w-4 h-4 mr-2" />
                                Mover arriba
                            </Button>
                            <Button
                                onClick={() => onImagePositionChange(Math.min(100, imagePosition + 10))}
                                variant="outline"
                                size="sm"
                                className="flex-1"
                            >
                                <MoveDown className="w-4 h-4 mr-2" />
                                Mover abajo
                            </Button>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="custom-text">Tu texto</Label>
                    <Input
                        id="custom-text"
                        placeholder="BRAVE AND STRONG"
                        value={customText}
                        onChange={handleTextChange}
                        maxLength={50}
                    />
                </div>
                */}

                {product.customizable_type === 'image' && (
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pet_name">Nombre de la Mascota</label>
                            <Input type="text" name='pet_name' placeholder="Escribe el nombre de tu mascota" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pet_species">Especie</label>
                            <div className="flex items-center gap-2">
                                <input type="radio" id="pet_species" name="pet_species" value="dog" /> Perro
                                <input type="radio" id="pet_species" name="pet_species" value="cat" /> Gato
                            </div>
                        </div>
                        <div>
                            <label htmlFor="pet_image">Imagen de la Mascota</label>
                            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                                <div>
                                    <img src="/img.png" alt="image 1" />
                                </div>
                                <div>
                                    <img src="/dog1.webp" alt="image 1" />
                                </div>
                                <div>
                                    <img src="/dog2.webp" alt="image 1" />
                                </div>
                                <div>
                                    <img src="/dog3.webp" alt="image 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
                <Label>Color: {colors.find(c => c.value === selectedColor)?.name}</Label>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => onColorChange(color.value)}
                            className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.value
                                    ? "border-primary scale-110"
                                    : "border-border hover:border-primary/50"
                                }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>

            {/* Size Selection */}
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

            {/* Add to Cart Button */}
            <Button className="w-full h-12 text-lg font-semibold cursor-pointer" size="lg">
                Añadir a la cesta
            </Button>

            {/* Buy Now Button */}
            <Button className="w-full h-12 text-lg font-semibold bg-amber-400 hover:bg-amber-500 cursor-pointer" size="lg">
                Cómpralo ahora
            </Button>

            {/* Shipping Info */}
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
};

export default ProductCustomization;
