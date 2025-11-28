import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
    return (
        <header className="border-b border-border bg-card sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href={'/'}>
                    <h1 className="text-2xl font-bold text-foreground">Mi <span className="text-blue-500">Mascota</span> <span className="text-purple-500">Pop</span></h1>
                </Link>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            0
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;