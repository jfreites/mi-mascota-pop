-- Create enum for product categories
CREATE TYPE product_category AS ENUM ('t-shirt', 'accessory', 'hoodie', 'toys', 'other');

-- Create products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category product_category NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  colors TEXT[] DEFAULT '{}',
  sizes TEXT[] DEFAULT '{}',
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON products
  FOR SELECT
  TO public
  USING (true);

-- Seed initial data
INSERT INTO products (name, category, price, image, description, colors, sizes, slug) VALUES
  (
    'Playera Personalizada DIY Unisex',
    't-shirt',
    29.99,
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    'Celebrate your love for your furry friend with this comfy tee',
    ARRAY['white', 'black', 'gray', 'navy'],
    ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL'],
    'customize'
  ),
  (
    'Playera Personalizada ''El Rey de la Casa'' Unisex',
    't-shirt',
    29.99,
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80',
    'Show off your cat mom pride in style',
    ARRAY['white', 'pink', 'lavender', 'mint'],
    ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL'],
    'template'
  ),
  (
    'Paw Print Tote Bag',
    'accessory',
    19.99,
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80',
    'Durable canvas tote with adorable paw prints',
    ARRAY['natural', 'black', 'navy'],
    NULL,
    'paw-print-tote-bag'
  ),
  (
    'Dog Dad Baseball Cap',
    'accessory',
    22.99,
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80',
    'Classic cap with embroidered dog dad text',
    ARRAY['khaki', 'black', 'navy', 'white'],
    NULL,
    'dog-dad-baseball-cap'
  ),
  (
    'Meow Power Enamel Mug',
    'accessory',
    16.99,
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80',
    'Vintage-style enamel mug for cat lovers',
    ARRAY['white', 'black', 'turquoise'],
    NULL,
    'meow-power-enamel-mug'
  ),
  (
    'Pet Parent Keychain',
    'accessory',
    12.99,
    'https://images.unsplash.com/photo-1673970091565-7d10312a4e34?q=80&w=1470',
    'Cute keychain with customizable pet name tag',
    ARRAY['gold', 'silver', 'rose-gold'],
    NULL,
    'pet-parent-keychain'
  );
