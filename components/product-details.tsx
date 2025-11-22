"use client"

import { useState } from "react";

import type Product from "@/types/product.type";
import ProductPreview from "@/components/product-preview";
import ProductCustomization from "@/components/product-customization";

import ProductCanva from "@/components/product-canva";

const ProductDetails = ({ product } : { product: Product }) => {

    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [customText, setCustomText] = useState("");
    const [selectedColor, setSelectedColor] = useState("#6b7280");
    const [selectedSize, setSelectedSize] = useState("L");
    const [imagePosition, setImagePosition] = useState(30);

    return (
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Product Preview */}
            <div className="lg:sticky lg:top-24 h-fit">
                {product.customizable_type === 'image' && <ProductCanva customText="Nombre Mascota" />}
                {product.customizable_type === 'ai' &&<ProductPreview
                    uploadedImage={uploadedImage}
                    customText={customText}
                    selectedColor={selectedColor}
                    imagePosition={imagePosition}
                />}
            </div>

            {/* Product Customization */}
            <div>
                <ProductCustomization
                    onImageUpload={setUploadedImage}
                    onTextChange={setCustomText}
                    selectedColor={selectedColor}
                    onColorChange={setSelectedColor}
                    selectedSize={selectedSize}
                    onSizeChange={setSelectedSize}
                    imagePosition={imagePosition}
                    onImagePositionChange={setImagePosition}
                    hasImage={uploadedImage !== null}
                    product={product}
                />
            </div>
        </div>
    )
}

export default ProductDetails;