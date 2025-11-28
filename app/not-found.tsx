export default function NotFound() {
    return (
        <>
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[-5%] left-[-5%] w-[30rem] h-[30rem] bg-pop-pink/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-pop-cyan/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-pop-yellow/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Main Content Container */}
            <main className="container mx-auto px-4 text-center max-w-3xl relative z-10 mt-20">

                {/* The "Zero" Image Container */}
                <div className="relative inline-block mb-8 group">
                    {/* Decorative circle behind */}
                    <div className="absolute inset-0 bg-pop-purple/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition duration-500"></div>

                    {/* 404 Text Layout */}
                    <div className="flex items-center justify-center font-black text-[10rem] md:text-[14rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-pop-pink via-purple-400 to-pop-cyan drop-shadow-sm select-none animate-bob">
                        <span>4</span>

                        {/* The "0" is replaced/overlaid by the image */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-white shadow-2xl overflow-hidden mx-2 md:mx-4 rotate-12 group-hover:rotate-0 transition duration-500 bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=400&auto=format&fit=crop" alt="Confused Dog" className="w-full h-full object-cover" />
                        </div>

                        <span>4</span>
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Woh-Woof!</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
                    Buscamos por todas partes, pero no encontramos la página que buscas. Puede que hayas perseguido a una ardilla... 🐿️
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                    <a href="/" className="group relative bg-pop-pink text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pop-pink/50 hover:-translate-y-1 transition duration-300 overflow-hidden w-full sm:w-auto">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            Inicio
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    <a href="#" className="group bg-white text-gray-600 border-2 border-gray-200 hover:border-pop-cyan hover:text-pop-cyan text-xl font-bold py-4 px-10 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                        Contacto
                    </a>

                </div>

                {/* Search Bar (Optional Helper) */}
                <div className="mt-12 max-w-md mx-auto relative group">
                    <input type="text" placeholder="Mejor busca algún premio..." className="w-full bg-white/60 backdrop-blur-sm border-2 border-gray-200 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-pop-yellow focus:ring-4 focus:ring-pop-yellow/20 transition font-medium text-gray-600" />
                    <button className="absolute right-2 top-2 p-1.5 bg-gray-200 rounded-full text-gray-500 hover:bg-pop-yellow hover:text-gray-900 transition cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </main>
        </>
    )
}