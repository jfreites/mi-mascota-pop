import { useState, useEffect } from 'react';

export interface CartItem {
    id: string;
    previewImage: string;
    name: string;
    size: string;
    color: string;
    price?: number;
    [key: string]: any;
}

export const useCart = () => {
    // Initialize cart state from local storage or an empty array
    const [cart, setCart] = useState(() => {
        // This function runs only once during initial render
        if (typeof window !== 'undefined') { // Check if window (browser environment) exists
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return []; // Return empty array during SSR or if window is undefined
    });

    // Persist cart to local storage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    // actions
    const addToCart = (item: CartItem) => {
        setCart((prevCart: CartItem[]) => {
            const existingItemIndex = prevCart.findIndex((cartItem: CartItem) => cartItem.id === item.id);
            if (existingItemIndex > -1) {
                // Item already in cart, update quantity
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1; // Assuming 'quantity' property
                return updatedCart;
            } else {
                // Add new item to cart
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart((prevCart: CartItem[]) => prevCart.filter((item: CartItem) => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return { cart, setCart, addToCart, removeFromCart, clearCart };
};