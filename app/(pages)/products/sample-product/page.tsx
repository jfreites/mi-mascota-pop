import Footer from "@/components/layout/footer";
import PersonalizationStudio from "@/components/product/personalization-studio";

export default function SampleProduct() {

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
            <main className="container mx-auto px-4 py-6 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Image Gallery */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="relative w-full aspect-square bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop" alt="Rainbow Bandana Main" className="object-cover w-full h-full hover:scale-105 transition duration-700" />

                            <div className="absolute top-6 left-6 flex gap-2">
                                <span className="bg-pop-yellow text-gray-900 font-bold px-4 py-2 rounded-full shadow-sm">New Arrival</span>
                                <span className="bg-pop-cyan text-white font-bold px-4 py-2 rounded-full shadow-sm">Eco-Friendly</span>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            <button className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-pop-pink shadow-md shrink-0 cursor-pointer hover:opacity-80 transition">
                                <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </button>
                            <button className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-transparent hover:border-pop-pink shadow-md shrink-0 cursor-pointer transition">
                                <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </button>
                            <button className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-transparent hover:border-pop-pink shadow-md shrink-0 cursor-pointer transition">
                                <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="flex flex-col gap-6 pt-4">

                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">Rainbow Bandana</h1>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-pop-yellow text-xl">★★★★★</div>
                                <span className="text-gray-400 font-medium">(128 Reviews)</span>
                            </div>
                            <p className="text-4xl font-bold text-pop-pink">$35.00</p>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Make every walk a parade! 🌈 Our Rainbow Bandana is made from super-soft, breathable cotton that keeps your pup cool while looking hot. Machine washable and durable enough for the wildest playdates.
                        </p>

                        {/* PERSONALIZATION STUDIO */}
                        <PersonalizationStudio config={{}} />

                        <hr className="border-gray-200 border-dashed" />

                        {/* Standard Selectors */}
                        <div className="space-y-6">
                            {/* Size */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-3 text-lg">Select Size:</label>
                                <div className="flex gap-3">
                                    <button className="w-14 h-14 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-pop-cyan hover:text-pop-cyan hover:bg-cyan-50 transition cursor-pointer">S</button>
                                    <button className="w-14 h-14 rounded-xl border-2 border-pop-cyan bg-cyan-50 font-bold text-pop-cyan shadow-sm cursor-pointer ring-2 ring-pop-cyan/20">M</button>
                                    <button className="w-14 h-14 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-pop-cyan hover:text-pop-cyan hover:bg-cyan-50 transition cursor-pointer">L</button>
                                    <button className="w-14 h-14 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-pop-cyan hover:text-pop-cyan hover:bg-cyan-50 transition cursor-pointer">XL</button>
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                {/* Quantity Stepper */}
                                <div className="flex items-center bg-white border-2 border-gray-200 rounded-full w-fit px-2 py-1 shadow-sm">
                                    <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-pop-pink font-bold text-xl cursor-pointer transition">-</button>
                                    <input type="number" value="1" className="w-12 text-center font-bold text-lg text-gray-800 focus:outline-none" />
                                    <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-pop-cyan font-bold text-xl cursor-pointer transition">+</button>
                                </div>

                                {/* CTA Button */}
                                <button className="flex-1 bg-gradient-to-r from-pop-pink to-purple-500 hover:to-pop-pink text-white text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-pop-pink/40 hover:-translate-y-1 transition duration-300 cursor-pointer flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm border border-gray-100">
                                <div className="bg-pop-yellow/20 p-2 rounded-full text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                </div>
                                <span className="font-bold text-sm">Fast Shipping</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm border border-gray-100">
                                <div className="bg-pop-purple/20 p-2 rounded-full text-pop-purple">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </div>
                                <span className="font-bold text-sm">Pet Safe Materials</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Related Products */}
            <section className="bg-white py-16 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] mt-auto">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-8 text-center">You might also love 💖</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative rounded-3xl overflow-hidden mb-3 aspect-[4/5]">
                                    <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>
                                <h4 className="font-bold text-lg">Polka Dot Bow</h4>
                                <p className="text-pop-pink font-bold">$12.00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="bg-white">
                <Footer />
            </div>
        </div>
    )
}