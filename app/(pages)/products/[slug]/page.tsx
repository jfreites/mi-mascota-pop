import { notFound } from 'next/navigation';

import ProductView from '@/components/product/product-view';
import { getProductBySlug } from '@/app/actions/products';
import Navbar from '@/components/navbar';

export default async function ProductPage({ params }: { params: { slug: string } }) {

    const { slug } = await params;

    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <ProductView product={product} />
        </>
    )
}