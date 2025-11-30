'use client';

import { useEffect, useState } from "react";
import { base64ToFile, decimalAdjust } from "@/lib/utils";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";

interface CartItem {
    id: string;
    previewImage: string;
    name: string;
    size: string;
    color: string;
    price?: number;
    [key: string]: any;
}

import mastercard from "@/assets/payments/mastercard.svg";
import visa from "@/assets/payments/visa.svg";
import paypal from "@/assets/payments/paypal.svg";
import mercadopago from "@/assets/payments/mercadopago.png";
import cartEmpty from "@/assets/cart-empty.png";
import { toast } from "sonner";
import { Product } from "@/app/actions/products";

const CartSummary = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);

    const { cart, removeFromCart, clearCart } = useCart();

    useEffect(() => {
        const storedCartItems = localStorage.getItem("customTshirtCart");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        let calculatedSubtotal = 0;
        let calculatedTax = 0;
        let calculatedShipping = 5;

        cartItems.forEach((item) => {
            calculatedSubtotal += item.product_price; // when we have quantity, we need to multiply
        })

        calculatedTax = calculatedSubtotal * 0.16;

        calculatedSubtotal = decimalAdjust("round", calculatedSubtotal, -1);
        calculatedTax = decimalAdjust("round", calculatedTax, -1);

        if (calculatedSubtotal > 500) {
            calculatedShipping = 0;
        }

        setSubtotal(calculatedSubtotal);
        setTax(calculatedTax);
        setShipping(calculatedShipping);
        setTotal(decimalAdjust("round", calculatedSubtotal + calculatedShipping + calculatedTax, -1));
    }, [cartItems]);

    const updateCart = (newCart: CartItem[]) => {
        setCartItems(newCart);
        localStorage.setItem("customTshirtCart", JSON.stringify(newCart));
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, item: any) => {
        const newQuantity = parseInt(event.target.value);
        if (isNaN(newQuantity) || newQuantity < 1) return;
        const updatedCart = cartItems.map((cartItem: any) => {
            if (cartItem.timestamp === item.timestamp) {
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });
        updateCart(updatedCart);
    };

    const incrementQuantity = (item: any) => {
        const updatedCart = cartItems.map((cartItem: any) => {
            if (cartItem.timestamp === item.timestamp) {
                return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
            }
            return cartItem;
        });
        updateCart(updatedCart);
    };

    const decrementQuantity = (item: any) => {
        const updatedCart = cartItems.map((cartItem: any) => {
            if (cartItem.timestamp === item.timestamp) {
                const newQuantity = (cartItem.quantity || 1) - 1;
                return { ...cartItem, quantity: newQuantity < 1 ? 1 : newQuantity };
            }
            return cartItem;
        });
        updateCart(updatedCart);
    };

    const deleteItem = (item: any) => {
        const updatedCart = cartItems.filter((cartItem: any) => cartItem.timestamp !== item.timestamp);
        updateCart(updatedCart);
    };

    const deleteElementFromCart = (item: any) => {
        removeFromCart(item.id);
        toast.success('Producto eliminado del carrito');
    };

    if (cart.length === 0) {
        return (
            <div className="py-20 flex flex-col items-center justify-center">
                <Image src={cartEmpty} alt="Carrito Vacío" width={200} height={200} />
                <p className="text-4xl font-bold text-gray-600">Tu carrito está vacío</p>
                <a href="/catalog" className="py-6 text-pop-purple font-bold text-lg hover:underline decoration-wavy underline-offset-4">Ver Catálogo</a>
            </div>
        )
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Tu carrito está lleno de color! 🛍️</h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Cart Items List */}
                <div className="flex-1 space-y-6">
                    {cart.map((item: CartItem, index: number) => {
                        return (
                            <div key={index} className={`bg-white p-4 rounded-[2rem] shadow-lg flex gap-4 items-center relative overflow-hidden group border-2 border-transparent ${index % 2 === 0 ? "hover:border-pop-pink" : "hover:border-pop-cyan"} transition duration-300`}>
                                <div className="w-32 h-32 shrink-0 bg-gray-100 rounded-2xl overflow-hidden">
                                    <img src={item.previewImage} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-xl">{item.name}</h3>
                                            <p className="text-sm text-gray-400 font-bold">Talla: {item.size} <span className="mx-1">•</span> Color: {item.color} <span className="mx-1">•</span> Custom: "Fluffy"</p>
                                        </div>
                                        <button className="text-gray-300 hover:text-red-400 hover:bg-red-50 p-2 rounded-full transition cursor-pointer" onClick={() => deleteElementFromCart(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-end mt-2">
                                        <div className="flex items-center bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                                            <button className="w-8 h-8 text-gray-400 hover:text-pop-pink font-bold cursor-pointer" onClick={() => decrementQuantity(item)}>-</button>
                                            <input type="number" onChange={(e) => handleQuantityChange(e, item)} value="1" className="w-8 text-center bg-transparent font-bold text-gray-800" />
                                            <button className="w-8 h-8 text-gray-400 hover:text-pop-cyan font-bold cursor-pointer" onClick={() => incrementQuantity(item)}>+</button>
                                        </div>
                                        <p className={`font-bold text-xl ${index % 2 === 0 ? "text-pop-pink" : "text-pop-cyan"}`}>${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <button onClick={clearCart} className="w-full py-2 mt-4 text-pop-purple font-bold border-2 border-pop-purple rounded-full hover:bg-pop-purple hover:text-white transition duration-300">Vaciar Carrito</button>
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
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 font-medium">
                                <span>Envío</span>
                                <span className="text-pop-cyan font-bold">{shipping > 0 ? `$${shipping}` : "Gratis"}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 font-medium">
                                <span>IVA (16%)</span>
                                <span>${tax}</span>
                            </div>
                            <hr className="border-dashed border-gray-200 my-4" />
                            <div className="flex justify-between text-2xl font-bold text-gray-800">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                        </div>

                        <a href="/checkout" className="block w-full bg-pop-yellow hover:bg-yellow-400 text-gray-900 text-center font-bold text-xl py-4 rounded-full shadow-lg hover:shadow-pop-yellow/50 hover:-translate-y-1 transition duration-300 transform">
                            Pagar
                        </a>

                        <div className="mt-4 flex justify-center gap-2 text-gray-400">
                            <Image src={mercadopago} alt="Mercado Pago" width={48} height={48} />
                            <Image src={mastercard} alt="Mastercard" width={48} height={48} />
                            <Image src={visa} alt="Visa" width={48} height={48} />
                            <Image src={paypal} alt="PayPal" width={48} height={48} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CartSummary;
