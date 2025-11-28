-- Add is_customizable and customization_options to products table
ALTER TABLE products
ADD COLUMN is_customizable BOOLEAN DEFAULT FALSE,
ADD COLUMN customization_options JSONB;

-- Create product_images table
CREATE TABLE product_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX idx_product_images_product_id ON product_images(product_id);
