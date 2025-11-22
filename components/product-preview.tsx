"use client"

import { useEffect, useRef } from "react";
import tshirtWhite from "@/assets/playera-white.png";
import tshirtBlack from "@/assets/playera-black.png";
import tshirtGray from "@/assets/playera-gray.png";
//import tshirtNavy from "@/assets/tshirt-navy.png";

interface ProductPreviewProps {
    uploadedImage: string | null;
    customText: string;
    selectedColor: string;
    imagePosition: number;
}

// Map color hex values to t-shirt images
const tshirtImages: Record<string, string> = {
    "#ffffff": tshirtWhite.src,
    //"#1e3a8a": tshirtNavy,
    "#1a1a1a": tshirtBlack.src,
    "#6b7280": tshirtGray.src,
};

const ProductPreview = ({ uploadedImage, customText, selectedColor, imagePosition }: ProductPreviewProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const tshirtImg = new Image();
        tshirtImg.src = tshirtImages[selectedColor] || tshirtGray.src;

        tshirtImg.onload = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the t-shirt
            ctx.drawImage(tshirtImg, 0, 0, canvas.width, canvas.height);

            // Draw the uploaded image in the center with and adjustable position
            if (uploadedImage) {
                const uploadedImg = new Image();
                uploadedImg.src = uploadedImage;
                uploadedImg.onload = () => {
                    const designWidth = canvas.width * 0.35;
                    const designHeight = (uploadedImg.height / uploadedImg.width) * designWidth;
                    const x = (canvas.width - designWidth) / 2;

                    // Position range: 20% to 50% of canvas height (to keep it on the shirt)
                    const minY = canvas.height * 0.2;
                    const maxY = canvas.height * 0.5;
                    const y = minY + (maxY - minY) * (imagePosition / 100);

                    ctx.drawImage(uploadedImg, x, y, designWidth, designHeight);

                    // Draw text below image if provided
                    if (customText) {
                        ctx.font = "bold 24px Arial";
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(customText, canvas.width / 2, y + designHeight + 40);
                    }
                };
            } else if (customText) {
                // Draw only text if no image
                ctx.font = "bold 32px Verdana";
                ctx.fillStyle = "#ffffff";
                ctx.textAlign = "center";
                ctx.fillText(customText, canvas.width / 2, canvas.height / 2);
            }
        };
    }, [uploadedImage, customText, selectedColor, imagePosition]);

    return (
        <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
            <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className="max-w-full h-auto"
            />
        </div>
    );
};

export default ProductPreview;
