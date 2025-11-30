import { Product } from "@/app/actions/products";
import Link from "next/link";

interface ProductsShowcaseProps {
    products: Product[];
}

const RelatedProducts = ({ products }: ProductsShowcaseProps) => {
    return (
        <section className="bg-white py-16 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] mt-auto">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold mb-8 text-center">Tambien podría gustarte 💖</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link href={`/product/${product.slug}`} key={product.id}>
                            <div className="group cursor-pointer">
                                <div className="relative rounded-3xl overflow-hidden mb-3 aspect-[4/5]">
                                    <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>
                                <h4 className="font-bold text-lg">{product.name}</h4>
                                <p className="text-pop-pink font-bold">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
