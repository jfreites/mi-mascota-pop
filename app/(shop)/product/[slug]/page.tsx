
export default async function ProductDetailPage() {

    return (
        <div className="flex flex-col">
            {/* Decorative Background Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pop-purple/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-pop-pink/15 rounded-full blur-3xl"></div>
            </div>

            <h2>Detalle del producto</h2>
        </div>
    );
}