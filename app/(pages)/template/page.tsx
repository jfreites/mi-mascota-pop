import Navbar from "@/components/navbar";
import TemplateCustomizer from "@/components/template-customizer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TemplatePage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen py-12 px-6 bg-gradient-to-t from-primary/20 to-primary/10">
                <div className="container mx-auto">
                    <Button
                        variant="outline"
                        className="mb-6"
                    >
                        <Link href="/">
                            ← Back to Shop
                        </Link>
                    </Button>

                    <div className="text-center mb-8 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Playera Personalizada "El Rey de la Casa" Unisex
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Crea una playera única para ti o para alguien que te importe.
                        </p>
                    </div>

                    <TemplateCustomizer />
                </div>
            </div>
        </>
    )
}
