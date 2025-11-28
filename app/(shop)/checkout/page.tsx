export default function CheckoutPage() {
    return (
        <div className="flex flex-col">
            {/* Navbar */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <a href="/" className="text-3xl font-bold tracking-tight hover:scale-105 transition duration-300 font-fredoka">
                    <span className="text-pop-pink">Mi</span> <span className="text-pop-yellow">Mascota</span> <span className="text-pop-cyan">Pop</span>
                </a>
                <a href="/catalog" className="text-gray-500 font-bold hover:text-pop-purple transition">Continuar Comprando</a>
            </nav>

            {/* Header */}
            <header className="container mx-auto px-4 py-6 flex justify-center relative z-20">
                <a href="/cart" className="text-2xl font-bold tracking-tight opacity-80 hover:opacity-100 transition">
                    <span className="text-gray-400">Carrito</span>
                    <span className="mx-2 text-gray-300">&gt;</span>
                    <span className="text-pop-pink">Checkout</span>
                </a>
            </header>

            <main className="container mx-auto px-4 pb-16 flex-1">
                <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

                    {/* LEFT COLUMN: Forms */}
                    <div className="flex-1 space-y-8">
                        {/* Shipping Address */}
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border-2 border-transparent hover:border-pop-cyan transition duration-500">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="bg-pop-cyan text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">1</span>
                                Datos de Envío 🚚
                            </h2>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-gray-500 font-bold mb-1 ml-2 text-sm">Nombre Completo</label>
                                    <input type="text" placeholder="e.g. John Doe" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-700 transition" />
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-gray-500 font-bold mb-1 ml-2 text-sm">Dirección</label>
                                    <input type="text" placeholder="123 Puppy Lane" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-700 transition" />
                                </div>
                                <div>
                                    <label className="block text-gray-500 font-bold mb-1 ml-2 text-sm">Ciudad</label>
                                    <input type="text" placeholder="New York" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-700 transition" />
                                </div>
                                <div>
                                    <label className="block text-gray-500 font-bold mb-1 ml-2 text-sm">Código Postal</label>
                                    <input type="text" placeholder="10001" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-700 transition" />
                                </div>
                            </form>
                        </div>

                        {/* Payment Details */}
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border-2 border-transparent hover:border-pop-pink transition duration-500">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="bg-pop-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">2</span>
                                Método de Pago 💳
                            </h2>

                            {/* Card Visual (CSS only) */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white mb-6 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-8 bg-yellow-400/80 rounded flex items-center justify-center">
                                        <div className="w-8 h-5 border border-yellow-600/50 rounded-sm"></div>
                                    </div>
                                    <span className="font-mono text-lg opacity-80">Banco</span>
                                </div>
                                <div className="mb-4">
                                    <p className="text-xs opacity-50 mb-1">NÚMERO DE TARJETA</p>
                                    <p className="font-mono text-xl tracking-widest">•••• •••• •••• 4242</p>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xs opacity-50 mb-1">TITULAR</p>
                                        <p className="font-mono text-sm">JOHN DOE</p>
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-50 mb-1">VENCIMIENTO</p>
                                        <p className="font-mono text-sm">12/26</p>
                                    </div>
                                </div>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-500 font-bold mb-1 ml-2 text-sm">Número de Tarjeta</label>
                                    <div className="relative">
                                        <input type="text" placeholder="0000 0000 0000 0000" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pl-12 font-bold text-gray-700 transition" />
                                        <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-500 font-bold mb-1 ml-2 text-sm">Fecha de Vencimiento</label>
                                        <input type="text" placeholder="MM/YY" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-700 transition" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 font-bold mb-1 ml-2 text-sm">CVV</label>
                                        <input type="text" placeholder="123" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-700 transition" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Order Recap */}
                    <div className="w-full lg:w-[26rem] shrink-0">
                        <div className="sticky top-8 bg-white p-6 rounded-[2.5rem] shadow-2xl border-4 border-pop-yellow/20">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">En tu carrito (2)</h3>

                            {/* Mini Items List */}
                            <div className="space-y-4 max-h-60 overflow-y-auto pr-2 mb-6 custom-scrollbar">
                                <div className="flex gap-3 items-center">
                                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=200" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Rainbow Bandana</p>
                                        <p className="text-xs text-gray-500">Size: M</p>
                                        <p className="font-bold text-pop-pink">$15.00</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=200" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Neon Mouse Toy</p>
                                        <p className="text-xs text-gray-500">Qty: 2</p>
                                        <p className="font-bold text-pop-cyan">$17.00</p>
                                    </div>
                                </div>
                            </div>

                            {/* Coupon Input */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Código de Descuento</label>
                                <div className="flex gap-2">
                                    <input type="text" placeholder="POP10" className="pop-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 font-bold text-sm" />
                                    <button className="bg-gray-800 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-900 transition cursor-pointer">Aplicar</button>
                                </div>
                            </div>

                            <hr className="border-dashed border-gray-200 mb-6" />

                            {/* Totals */}
                            <div className="space-y-2 mb-8">
                                <div className="flex justify-between text-sm font-medium text-gray-500">
                                    <span>Subtotal</span>
                                    <span>$32.00</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-gray-500">
                                    <span>IVA</span>
                                    <span>$2.56</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-gray-500">
                                    <span>Envío</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between text-3xl font-bold text-gray-800 pt-2">
                                    <span>Total</span>
                                    <span>$34.56</span>
                                </div>
                            </div>

                            {/* Buy Button */}
                            <button className="w-full group relative bg-gradient-to-r from-pop-pink to-purple-500 text-white font-bold text-xl py-5 rounded-[1.5rem] shadow-xl hover:shadow-pop-pink/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Pagar $34.56
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                                {/* Button hover shine effect */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[1.5rem]"></div>
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4 font-medium flex items-center justify-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" /></svg>
                                Pago seguro con encriptación SSL 256-bit
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}