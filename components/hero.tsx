'use client';

import { Sparkles, Palette, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Hero = () => {
    const router = useRouter();

    return (
        <header className="container mx-auto px-4 pt-8 pb-12 text-center">
            <div className="relative inline-block group cursor-pointer animate-float">
                <div className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

                <h1 className="relative text-7xl md:text-9xl font-bold tracking-tight leading-tight">
                    <Image src="/mi-mascota-pop-logo.png" alt="Logo" width={350} height={350} />
                </h1>
            </div>

            <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
                Playeras Personalizadas, Accesorios y más para lucir a tu compañero de cuatro patas como un Pop Star!
            </p>

            <div className="mt-8 flex justify-center gap-4">
                <button className="bg-pop-pink hover:bg-pink-500 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pop-pink/50 hover:-translate-y-1 transition duration-300 cursor-pointer">
                    Dog Lover
                </button>
                <button className="bg-pop-cyan hover:bg-cyan-400 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pop-cyan/50 hover:-translate-y-1 transition duration-300 cursor-pointer">
                    Cat Lover
                </button>
            </div>
        </header>
    );
};

export default Hero;