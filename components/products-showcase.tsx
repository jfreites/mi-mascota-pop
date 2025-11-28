
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Product } from "@/app/actions/products";

interface ProductsShowcaseProps {
    products: Product[];
}

const ProductsShowcase = ({ products }: ProductsShowcaseProps) => {

    return (
        <>
            <section className="container mx-auto px-4 py-16">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">Lo Más Nuevo ✨</h2>
                    <a href="/catalog" className="text-pop-purple font-bold text-lg hover:underline decoration-wavy underline-offset-4">Ver Todo</a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-[2rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pop-pink">
                            <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden bg-gray-100 mb-4">
                                <img src={product.image} alt="Colorful Collar" className="object-cover w-full h-full group-hover:scale-110 transition duration-500" />
                                <span className="absolute top-3 left-3 bg-pop-yellow text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
                            </div>
                            <div className="px-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name.substring(0, 19) + '...'}</h3>
                                <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-pop-pink">${product.price}</span>
                                    <button className="w-10 h-10 bg-gray-100 hover:bg-pop-pink hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer">
                                        <Link href={`/products/${product.slug}`}>
                                            <Plus className="size-5" />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductsShowcase;