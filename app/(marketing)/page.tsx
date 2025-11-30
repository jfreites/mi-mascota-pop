import Hero from "@/components/hero";
import ProductsShowcase from "@/components/products-showcase";
import { getProducts } from "@/app/actions/products";
import { ShoppingBag } from "lucide-react";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/newsletter";

export default async function LandingPage() {
    const products = await getProducts();

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pop-pink/20 rounded-full blur-3xl"></div>
                <div className="absolute top-[20%] right-[-10%] w-80 h-80 bg-pop-cyan/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pop-yellow/20 rounded-full blur-3xl"></div>
            </div>

            {/* Simple Navbar */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div></div>

                <div className="flex gap-4 items-center">
                    <a href="/cart" className="relative group cursor-pointer">
                        <div className="bg-white p-3 rounded-full shadow-lg border-2 border-transparent group-hover:border-pop-yellow transition">
                            <ShoppingBag className="w-6 h-6 text-gray-700" />
                        </div>
                        <span className="absolute -top-1 -right-1 bg-pop-pink text-white text-xs font-bold size-5 flex items-center justify-center rounded-full">0</span>
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <Hero />

            {/* Product Showcase */}
            <ProductsShowcase products={products} />

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />
        </>
    );
}
