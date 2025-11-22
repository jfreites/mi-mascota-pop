"use client"

import { useEffect, useRef } from "react";

import sampleTee from "@/assets/playera-gray.png";

interface ProductPreviewProps {
    customText: string;
}

const ProductCanva = ({ customText } : ProductPreviewProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        //document.addEventListener('contextmenu', event => event.preventDefault());

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const tshirtImg = new Image();
        tshirtImg.src = sampleTee.src;

        tshirtImg.onload = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the t-shirt
            ctx.drawImage(tshirtImg, 0, 0, canvas.width, canvas.height);

            // Default text
            ctx.font = "bold 32px Chewy";
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(customText, canvas.width / 2, canvas.height / 2);

            // Default Image
            const defaultImage = new Image();
            defaultImage.src = '/img.png';

            // fixed for now
            const imagePosition = 0;

            defaultImage.onload = () => {
                const designW = canvas.width * 0.25;
                const designH = (defaultImage.height / defaultImage.width) * designW;
                const x = (canvas.width - designW) / 2;

                // Position range: 20% to 50% of canvas height (to keep it on the shirt)
                const minY = canvas.height * 0.2;
                const maxY = canvas.height * 0.5;
                const y = minY + (maxY - minY) * (imagePosition / 100);

                ctx.drawImage(defaultImage, x, y, designW, designH);
            }
        }
    }, [customText]);

    return (
        <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
            <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className="max-w-full h-auto"
            />
        </div>
    )
}

export default ProductCanva;