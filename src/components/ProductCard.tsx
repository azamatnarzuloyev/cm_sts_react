import React from 'react';
import { Edit, Trash2, AlertTriangle } from 'lucide-react';
import type { Product } from '../types/inventory';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => {
  const isLowStock = product.stock <= product.minStock;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-500">SKU: {product.sku}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(product)}
            className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Stock</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold">{product.stock}</p>
            {isLowStock && (
              <AlertTriangle size={18} className="text-amber-500 ml-2" />
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Reserved</p>
          <p className="text-lg font-semibold">{product.reserved}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Available</p>
          <p className="text-lg font-semibold">{product.stock - product.reserved}</p>
        </div>
      </div>

      {product.variants && product.variants.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-2">Variants</p>
          <div className="space-y-2">
            {product.variants.map((variant) => (
              <div key={variant.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{variant.name}</span>
                <span className="font-medium">{variant.stock} in stock</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;