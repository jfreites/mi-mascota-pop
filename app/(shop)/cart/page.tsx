import CartSummary from "@/components/cart-summary";
import Navbar from "@/components/navbar";
import ShippingForm from "@/components/shipping-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
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
                            Carrito de Compras
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Aquí puedes ver los productos que has agregado al carrito.
                        </p>
                    </div>

                    <CartSummary />

                    <div className="mt-12">
                        <ShippingForm />
                    </div>
                </div>
            </div>
        </>
    )
}