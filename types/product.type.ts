interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    customizable_type: string;
    is_customizable?: boolean;
    customization_options?: any;
    images?: {
        id: string;
        image_url: string;
        alt_text: string;
        display_order: number;
    }[];
    customizationConfig: {
        colors: string[];
        sizes: string[];
    };
    colors: string[];
    sizes: string[];
}

export default Product;