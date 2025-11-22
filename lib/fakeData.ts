import type Product from "@/types/product.type";

export const fakeProducts: Product[] = [
    { slug: 'playera-clasica', title: 'Playera clásica premium personalizable', content: 'This is the content of product 1.', price: 200, customizable_type: 'image' },
    { slug: 'my-first-product', title: 'My First Product', content: 'This is the content of my first product.', price: 150, customizable_type: 'image' },
    { slug: 'another-product', title: 'Another Product', content: 'Here is some more interesting content.', price: 100, customizable_type: 'ai' },
];