import { Product } from '../models/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt perfect for everyday wear',
    price: 29.99,
    category: 'T-Shirts',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    inStock: true
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    description: 'Modern slim fit jeans with stretch denim for comfort',
    price: 79.99,
    category: 'Jeans',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Dark Wash'],
    inStock: true
  },
  {
    id: 3,
    name: 'Casual Hoodie',
    description: 'Cozy pullover hoodie with kangaroo pocket',
    price: 59.99,
    category: 'Hoodies',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy', 'Maroon'],
    inStock: true
  },
  {
    id: 4,
    name: 'Summer Dress',
    description: 'Flowy summer dress with floral pattern',
    price: 69.99,
    category: 'Dresses',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Blue', 'Floral Pink', 'White'],
    inStock: true
  },
  {
    id: 5,
    name: 'Athletic Joggers',
    description: 'Comfortable joggers perfect for workouts or lounging',
    price: 49.99,
    category: 'Pants',
    imageUrl: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    inStock: true
  },
  {
    id: 6,
    name: 'Leather Jacket',
    description: 'Premium genuine leather jacket with modern design',
    price: 249.99,
    category: 'Jackets',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown'],
    inStock: true
  },
  {
    id: 7,
    name: 'Polo Shirt',
    description: 'Classic polo shirt in premium cotton piqué',
    price: 45.99,
    category: 'Shirts',
    imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Red', 'Green'],
    inStock: true
  },
  {
    id: 8,
    name: 'Cargo Shorts',
    description: 'Versatile cargo shorts with multiple pockets',
    price: 39.99,
    category: 'Shorts',
    imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400',
    sizes: ['30', '32', '34', '36'],
    colors: ['Khaki', 'Olive', 'Navy'],
    inStock: true
  },
  {
    id: 9,
    name: 'Formal Blazer',
    description: 'Elegant blazer for professional occasions',
    price: 159.99,
    category: 'Blazers',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    inStock: true
  },
  {
    id: 10,
    name: 'Knit Sweater',
    description: 'Warm and stylish cable-knit sweater',
    price: 69.99,
    category: 'Sweaters',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Navy', 'Burgundy'],
    inStock: true
  }
];
