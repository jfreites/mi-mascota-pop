"use client";

import { Product as ProductType } from "@/app/actions/products";

export default function ProductGallery({ product }: { product: ProductType }) {

    return (
        <div className="lg:top-24 h-fit">
            <img src={product.image} alt={product.name} />
            <div>
                {product.product_images.map((image) => (
                    <img key={image.id} src={image.image_url} alt={image.alt_text} />
                ))}
            </div>
        </div>
    );
}