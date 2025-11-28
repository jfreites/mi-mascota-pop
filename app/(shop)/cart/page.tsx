import CartSummary from "@/components/cart-summary";
import Navbar from "@/components/navbar";
import ShippingForm from "@/components/shipping-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
    return (
        <>
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pop-yellow/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-pop-cyan/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Nav */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <a href="/" className="text-3xl font-bold tracking-tight hover:scale-105 transition duration-300 font-fredoka">
                    <span className="text-pop-pink">Mi</span> <span className="text-pop-yellow">Mascota</span> <span className="text-pop-cyan">Pop</span>
                </a>
                <a href="/catalog" className="text-gray-500 font-bold hover:text-pop-purple transition">Continuar Comprando</a>
            </nav>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Tu carrito está lleno de color! 🛍️</h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Cart Items List */}
                    <div className="flex-1 space-y-6">

                        {/* Item 1 */}
                        <div className="bg-white p-4 rounded-[2rem] shadow-lg flex gap-4 items-center relative overflow-hidden group border-2 border-transparent hover:border-pop-pink transition duration-300">
                            <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-xl">Rainbow Bandana</h3>
                                        <p className="text-sm text-gray-400 font-bold">Size: M <span className="mx-1">•</span> Custom: "Fluffy"</p>
                                    </div>
                                    <button className="text-gray-300 hover:text-red-400 hover:bg-red-50 p-2 rounded-full transition cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                                    </button>
                                </div>
                                <div className="flex justify-between items-end mt-2">
                                    <div className="flex items-center bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                                        <button className="w-8 h-8 text-gray-400 hover:text-pop-pink font-bold">-</button>
                                        <input type="number" value="1" className="w-8 text-center bg-transparent font-bold text-gray-800" />
                                        <button className="w-8 h-8 text-gray-400 hover:text-pop-cyan font-bold">+</button>
                                    </div>
                                    <p className="font-bold text-xl text-pop-pink">$15.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white p-4 rounded-[2rem] shadow-lg flex gap-4 items-center relative overflow-hidden group border-2 border-transparent hover:border-pop-cyan transition duration-300">
                            <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-xl">Neon Mouse Toy</h3>
                                        <p className="text-sm text-gray-400 font-bold">Color: Green</p>
                                    </div>
                                    <button className="text-gray-300 hover:text-red-400 hover:bg-red-50 p-2 rounded-full transition cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                                    </button>
                                </div>
                                <div className="flex justify-between items-end mt-2">
                                    <div className="flex items-center bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                                        <button className="w-8 h-8 text-gray-400 hover:text-pop-pink font-bold">-</button>
                                        <input type="number" value="2" className="w-8 text-center bg-transparent font-bold text-gray-800" />
                                        <button className="w-8 h-8 text-gray-400 hover:text-pop-cyan font-bold">+</button>
                                    </div>
                                    <p className="font-bold text-xl text-pop-cyan">$17.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Column */}
                    <div className="w-full lg:w-96 shrink-0">
                        <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-gray-50 relative overflow-hidden">
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pop-purple/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>

                            <h2 className="text-2xl font-bold mb-6 relative z-10">Resumen del Pedido 🧾</h2>

                            <div className="space-y-4 mb-6 relative z-10">
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span>Subtotal</span>
                                    <span>$32.00</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span>Envío</span>
                                    <span className="text-pop-cyan font-bold">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span>IVA (16%)</span>
                                    <span>$2.56</span>
                                </div>
                                <hr className="border-dashed border-gray-200 my-4" />
                                <div className="flex justify-between text-2xl font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>$34.56</span>
                                </div>
                            </div>

                            <a href="/checkout" className="block w-full bg-pop-yellow hover:bg-yellow-400 text-gray-900 text-center font-bold text-xl py-4 rounded-full shadow-lg hover:shadow-pop-yellow/50 hover:-translate-y-1 transition duration-300 transform">
                                Checkout Now
                            </a>

                            <div className="mt-4 flex justify-center gap-2 text-gray-400">
                                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="none"><path d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.3 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.7 0 35 0Z" fill="#EAECEF" /><path d="M35 1H3C1.9 1 1 1.9 1 3V21C1 22.1 1.9 23 3 23H35C36.1 23 37 22.1 37 21V3C37 1.9 36.1 1 35 1Z" fill="white" /></svg>
                                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="none"><path d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.3 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.7 0 35 0Z" fill="#EAECEF" /><path d="M35 1H3C1.9 1 1 1.9 1 3V21C1 22.1 1.9 23 3 23H35C36.1 23 37 22.1 37 21V3C37 1.9 36.1 1 35 1Z" fill="white" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/*
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
                        */}
        </>
    )
}