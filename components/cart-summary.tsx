'use client';

import { useEffect, useState } from "react";
import { Sparkles, Palette, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { base64ToFile } from "@/lib/utils";
import Image from "next/image";

const CartSummary = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const storedCartItems = localStorage.getItem("customTshirtCart");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
            //setSubtotal(JSON.parse(storedCartItems).reduce((acc, item) => acc + item.price, 0));
            setShipping(5);
            //setTotal(JSON.parse(storedCartItems).reduce((acc, item) => acc + item.price, 0) + 5);
            setSubtotal(399 * cartItems.length);
            setTotal(399 * cartItems.length + 5);
        }
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            <div className="col-span-2">
                <div className="flex flex-col gap-4">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Producto</th>
                                <th className="px-4 py-2">Precio</th>
                                <th className="px-4 py-2">Cantidad</th>
                                <th className="px-4 py-2">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-4 py-2 text-center">
                                        No hay productos en el carrito
                                    </td>
                                </tr>
                            )}
                            {cartItems.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="px-4 py-2">
                                            <Image
                                                src={base64ToFile(item.previewImage, "image/png", "image.png")}
                                                alt="preview"
                                                width={150}
                                                height={200}
                                                className="object-contain border border-border rounded-md"
                                            />
                                            <p className="text-foreground">
                                                {item.color} | {item.size}
                                            </p>
                                        </td>
                                        <td className="px-4 py-2">$399.00</td>
                                        <td className="px-4 py-2">1</td>
                                        <td className="px-4 py-2">$399.00</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-foreground">
                            Resumen
                        </h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Subtotal
                                </span>
                                <span className="text-foreground">
                                    ${subtotal}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Envío
                                </span>
                                <span className="text-foreground">
                                    ${shipping}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Total
                                </span>
                                <span className="text-foreground">
                                    ${total}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSummary;
