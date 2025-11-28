import CartSummary from "@/components/cart-summary";

export default function CartPage() {
    return (
        <>
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pop-yellow/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-pop-cyan/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Nav */}
            <nav className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                <a href="/" className="text-3xl font-bold tracking-tight hover:scale-105 transition duration-300 font-fredoka">
                    <span className="text-pop-pink">Mi</span> <span className="text-pop-yellow">Mascota</span> <span className="text-pop-cyan">Pop</span>
                </a>
                <a href="/catalog" className="mt-4 md:mt-0 text-pop-purple font-bold text-lg hover:underline decoration-wavy underline-offset-4">Continuar Comprando</a>
            </nav>


            <CartSummary />
        </>
    )
}