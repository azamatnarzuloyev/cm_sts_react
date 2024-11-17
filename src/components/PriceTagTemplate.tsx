import React from 'react';
import { QrCode } from 'lucide-react';
import type { Product } from '../types/inventory';

interface PriceTagTemplateProps {
  product: Product;
  scale?: number;
}

const PriceTagTemplate: React.FC<PriceTagTemplateProps> = ({ product, scale = 1 }) => {
  const baseWidth = 400;
  const baseHeight = 300;

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden"
      style={{
        width: baseWidth * scale,
        height: baseHeight * scale,
        transform: `scale(${scale})`,
        transformOrigin: 'top left'
      }}
    >
      <div className="p-4 h-full flex flex-col justify-between">
        {/* Product Name */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500">SKU: {product.sku}</p>
        </div>

        {/* Price */}
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900">
            ₽{product.price.toFixed(2)}
          </div>
        </div>

        {/* Barcode */}
        <div className="flex justify-center items-center space-x-2">
          <QrCode size={24} className="text-gray-400" />
          <span className="text-sm text-gray-500">{product.sku}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceTagTemplate;