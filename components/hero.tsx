'use client';

import { Sparkles, Palette, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();

    return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-blue-600 to-rose-300 py-20 px-6">
        <div className="container mx-auto text-center relative z-10">
            <div className="animate-bounce-slow inline-block mb-4">
                <PawPrint className="w-16 h-16 text-white fill-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                Mi Mascota Pop
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
                Playeras y accesorios personalizados para amantes de mascotas que quieren mostrar su familia peluda
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
                <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform group"
                >
                    Shop Now
                    <Sparkles className="ml-2 w-5 h-5 group-hover:animate-wiggle" />
                </Button>
                <Button
                    size="lg"
                    onClick={() => router.push("/customize")}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-transform group"
                >
                    <Palette className="mr-2 w-5 h-5 group-hover:animate-wiggle" />
                    Custom Design
                </Button>
            </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: "1s" }}></div>
    </section>
    );
};

export default Hero;