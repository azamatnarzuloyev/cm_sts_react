import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/inventory';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Office Chair',
    sku: 'CHR-001',
    description: 'Ergonomic office chair with lumbar support',
    price: 299.99,
    stock: 15,
    reserved: 3,
    minStock: 10,
    category: 'Furniture',
    lastModified: new Date(),
    variants: [
      { id: '1-1', name: 'Black', sku: 'CHR-001-BLK', price: 299.99, stock: 8 },
      { id: '1-2', name: 'Gray', sku: 'CHR-001-GRY', price: 299.99, stock: 7 }
    ]
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    sku: 'MOU-002',
    description: 'Bluetooth wireless mouse',
    price: 49.99,
    stock: 8,
    reserved: 2,
    minStock: 20,
    category: 'Electronics',
    lastModified: new Date()
  }
];

const ProductsPage = () => {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);

  const handleEdit = (product: Product) => {
    console.log('Edit product:', product);
  };

  const handleDelete = (id: string) => {
    console.log('Delete product:', id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Filter size={20} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;