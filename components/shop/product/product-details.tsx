"use client";

import { useState } from "react";

import { Product } from "@/app/actions/products";
import PersonalizationStudio from "@/components/product/personalization-studio";


export default function ProductView({ product }: { product: Product }) {

    const [selectedColor, setSelectedColor] = useState("#6b7280");
    const [selectedSize, setSelectedSize] = useState("L");

    return (
        <main className="container mx-auto px-4 py-6 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Image Gallery */}
                <div className="space-y-6">
                    {/* Main Image */}
                    <div className="relative w-full aspect-square bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-white">
                        <img src={product.image} alt="Rainbow Bandana Main" className="object-cover w-full h-full hover:scale-105 transition duration-700" />

                        <div className="absolute top-6 left-6 flex gap-2">
                            <span className="bg-pop-yellow text-gray-900 font-bold px-4 py-2 rounded-full shadow-sm">New Arrival</span>
                            <span className="bg-pop-cyan text-white font-bold px-4 py-2 rounded-full shadow-sm">Eco-Friendly</span>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {product.product_images.map((image, index) => (
                            <button key={index} className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-transparent hover:border-pop-pink shadow-md shrink-0 cursor-pointer transition">
                                <img src={image.image_url} className="w-full h-full object-cover" alt={image.alt_text} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="flex flex-col gap-6 pt-4">

                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">{product.name}</h1>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-pop-yellow text-xl">★★★★★</div>
                            <span className="text-gray-400 font-medium">(128 Reviews)</span>
                        </div>
                        <p className="text-4xl font-bold text-pop-pink">${product.price}</p>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    {/* PERSONALIZATION STUDIO */}
                    {product.is_customizable && <PersonalizationStudio config={{}} />}

                    <hr className="border-gray-200 border-dashed" />

                    {/* Standard Selectors */}
                    <div className="space-y-6">
                        {/* Size */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-3 text-lg">Selecciona Talla:</label>
                            <div className="flex gap-3">
                                <button className="w-14 h-14 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-pop-cyan hover:text-pop-cyan hover:bg-cyan-50 transition cursor-pointer">S</button>
                                <button className="w-14 h-14 rounded-xl border-2 border-pop-cyan bg-cyan-50 font-bold text-pop-cyan shadow-sm cursor-pointer ring-2 ring-pop-cyan/20">M</button>
                                <button className="w-14 h-14 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-pop-cyan hover:text-pop-cyan hover:bg-cyan-50 transition cursor-pointer">L</button>
                                <button className="w-14 h-14 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-pop-cyan hover:text-pop-cyan hover:bg-cyan-50 transition cursor-pointer">XL</button>
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            {/* Quantity Stepper */}
                            <div className="flex items-center bg-white border-2 border-gray-200 rounded-full w-fit px-2 py-1 shadow-sm">
                                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-pop-pink font-bold text-xl cursor-pointer transition">-</button>
                                <input type="number" value="1" className="w-12 text-center font-bold text-lg text-gray-800 focus:outline-none" />
                                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-pop-cyan font-bold text-xl cursor-pointer transition">+</button>
                            </div>

                            {/* CTA Button */}
                            <button className="flex-1 bg-gradient-to-r from-pop-pink to-purple-500 hover:to-pop-pink text-white text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-pop-pink/40 hover:-translate-y-1 transition duration-300 cursor-pointer flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm border border-gray-100">
                            <div className="bg-pop-yellow/20 p-2 rounded-full text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <span className="font-bold text-sm">Envío rápido</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm border border-gray-100">
                            <div className="bg-pop-purple/20 p-2 rounded-full text-pop-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                            <span className="font-bold text-sm">Materiales de calidad</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}