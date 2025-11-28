import { getProductBySlug } from '@/app/actions/products';
import Footer from '@/components/layout/footer';
import ProductDetails from '@/components/shop/product/product-details';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {

    const { slug } = await params;

    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            {/* Decorative Background Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pop-purple/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-pop-pink/15 rounded-full blur-3xl"></div>
            </div>

            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <a href="/" className="text-3xl font-bold tracking-tight hover:scale-105 transition duration-300 font-fredoka">
                    <span className="text-pop-pink">Mi</span> <span className="text-pop-yellow">Mascota</span> <span className="text-pop-cyan">Pop</span>
                </a>

                <div className="flex gap-4 items-center">
                    <button className="relative group cursor-pointer">
                        <div className="bg-white p-3 rounded-full shadow-lg border-2 border-transparent group-hover:border-pop-yellow transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <span className="absolute -top-1 -right-1 bg-pop-pink text-white text-xs font-bold size-5 flex items-center justify-center rounded-full">2</span>
                    </button>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-4">
                <a href="/catalog" className="text-gray-500 hover:text-pop-purple font-medium flex items-center gap-2 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Ver Catálogo
                </a>
            </div>

            {/* Product Detail Section */}
            <ProductDetails product={product} />

            {/* Footer */}
            <Footer />
        </div>
    );
}