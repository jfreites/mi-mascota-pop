import Footer from "@/components/layout/footer";
import { ShoppingBag } from "lucide-react";
import { getProducts } from "@/app/actions/products";
import ProductsShowcase from "@/components/products-showcase";

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <div className="flex flex-col">
            {/* Simple Navbar */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <a href="/" className="text-3xl font-bold tracking-tight hover:scale-105 transition duration-300 font-fredoka">
                    <span className="text-pop-pink">Mi</span> <span className="text-pop-yellow">Mascota</span> <span className="text-pop-cyan">Pop</span>
                </a>

                <div className="flex gap-4 items-center">
                    <a href="/cart" className="relative group cursor-pointer">
                        <div className="bg-white p-3 rounded-full shadow-lg border-2 border-transparent group-hover:border-pop-yellow transition">
                            <ShoppingBag className="w-6 h-6 text-gray-700" />
                        </div>
                        <span className="absolute -top-1 -right-1 bg-pop-pink text-white text-xs font-bold size-5 flex items-center justify-center rounded-full">2</span>
                    </a>
                </div>
            </nav>

            {/* Products */}
            <ProductsShowcase products={products} />

            {/* Footer */}
            <Footer />
        </div>
    );
}