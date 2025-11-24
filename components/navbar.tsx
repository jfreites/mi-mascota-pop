import Link from "next/link";
import { getUserOrNull } from "@/utils/auth";

export default async function Navbar() {

    const user = await getUserOrNull();

    return (
        <div className="navbar flex justify-between items-center p-4 bg-slate-700 text-white">
            <div>
                <Link href={'/'}>
                    <h1 className="text-2xl font-semibold dark:invert">Mi Mascota <span className="text-fuchsia-800">Pop</span></h1>
                </Link>
            </div>
            <nav>
                <ul className="hidden md:flex gap-4 ">
                    <li>FAQ</li>
                    {!user && <li><a href="/login">Login</a></li>}
                    {user && (
                        <>
                            <li><a href="/account">Account</a></li>
                            <li><a href="/adds">Salir</a></li>
                        </>
                    )}
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    )
}

//  2k usd