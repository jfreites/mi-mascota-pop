'use client';

import { useActionState } from 'react';
import { subscribeToNewsletter, type NewsletterState } from '@/app/actions/newsletter';

const initialState: NewsletterState = {
    success: false,
    message: '',
};

export default function Newsletter() {
    const [state, action, isPending] = useActionState(subscribeToNewsletter, initialState);

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-pop-purple to-pop-pink rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                {/* decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">Únete al Pop Club! 🐾</h2>
                <p className="text-lg md:text-xl mb-8 opacity-90 relative z-10">Recibe 10% de descuento en tu primer pedido y acceso exclusivo a nuevos drops.</p>

                <div className="max-w-md mx-auto relative z-10">
                    {state.success ? (
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 animate-in fade-in zoom-in duration-300">
                            <p className="text-xl font-bold text-white">
                                {state.message} 🥳
                            </p>
                        </div>
                    ) : (
                        <form action={action} className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 flex flex-col gap-1 text-left">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    className="w-full px-6 py-4 rounded-full text-gray-900 bg-white border-2 border-white/40 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all"
                                    required
                                />
                                {state.errors?.email && (
                                    <p className="text-red-200 text-sm ml-4 font-medium">{state.errors.email[0]}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isPending}
                                className="bg-pop-yellow text-gray-900 font-bold px-8 py-4 rounded-full hover:scale-105 transition shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed h-fit whitespace-nowrap"
                            >
                                {isPending ? 'Uniéndote...' : 'Unirme'}
                            </button>
                        </form>
                    )}
                    {!state.success && state.message && !state.errors && (
                        <p className="text-red-200 mt-4 font-medium">{state.message}</p>
                    )}
                </div>
            </div>
        </section>
    );
}