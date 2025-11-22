import Hero from "@/components/hero";
import ProductsShowcase from "@/components/products-showcase";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <Hero />
            {/* Products Section */}
            <ProductsShowcase />
        </div>
    );
}
