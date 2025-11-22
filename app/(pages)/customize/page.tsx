import { Button } from "@/components/ui/button";
import Customizer from "@/components/customizer";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default async function CustomizePage() {

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background py-12 px-6">
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
                        Personaliza tu playera con tu mascota
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Crea una playera única de tu mascota para que se adapte a ti y a tu gusto.
                    </p>
                </div>

                <Customizer />
            </div>
        </div>
        </>
    )
}