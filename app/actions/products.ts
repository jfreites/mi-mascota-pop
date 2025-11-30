'use server';

import { createClient } from "@/utils/supabase/server";

export type Product = {
  id: string;
  name: string;
  category: 't-shirt' | 'accessory' | 'hoodie' | 'toys' | 'other';
  price: number;
  image: string;
  description: string;
  colors: string[] | null;
  sizes: string[] | null;
  slug: string;
  created_at: string;
  is_customizable: boolean;
  customization_options: any;
  product_images: {
    id: string;
    image_url: string;
    alt_text: string;
    display_order: number;
  }[];
};

export async function getProducts(limit: number = 10) {
  const supabase = await createClient();

  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*, product_images(*)")
      .limit(limit)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching products:", error);
      return [];
    }

    return products as Product[];
  } catch (error) {
    console.error("Unexpected error fetching products:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("products")
      .select(`*, product_images(id, alt_text, image_url, display_order)`)
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching product:", error);
      return null;
    }

    return data as Product;
  } catch (error) {
    console.error("Unexpected error fetching product:", error);
    return null;
  }
}
