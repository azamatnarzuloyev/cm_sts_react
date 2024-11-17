import React from 'react';
import { ExternalLink, Star, ShoppingCart, AlertTriangle } from 'lucide-react';
import type { MarketplaceProduct } from '../types/marketplace';

interface MarketplaceProductCardProps {
  product: MarketplaceProduct;
  onSync: (id: string) => void;
}

const MarketplaceProductCard: React.FC<MarketplaceProductCardProps> = ({ product, onSync }) => {
  const marketplaceColors = {
    ozon: 'blue',
    wildberries: 'purple',
    yandex: 'yellow'
  };

  const statusColors = {
    active: 'green',
    inactive: 'gray',
    moderation: 'yellow',
    rejected: 'red'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${statusColors[product.status]}-100 text-${statusColors[product.status]}-800`}>
              {product.status}
            </span>
          </div>
          <p className="text-sm text-gray-500">SKU: {product.sku}</p>
        </div>
        <span className={`text-${marketplaceColors[product.marketplace]}-600 capitalize`}>
          {product.marketplace}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-lg font-semibold">₽{product.price.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Commission</p>
          <p className="text-lg font-semibold">{product.commission}%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">FBO Stock</p>
          <p className="text-lg font-semibold">{product.stock.fbo}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">FBS Stock</p>
          <p className="text-lg font-semibold">{product.stock.fbs}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-medium">{product.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <ShoppingCart size={16} className="text-gray-400 mr-1" />
            <span className="font-medium">{product.salesCount}</span>
          </div>
        </div>
        <button
          onClick={() => onSync(product.id)}
          className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg flex items-center"
        >
          <ExternalLink size={16} className="mr-1" />
          Sync
        </button>
      </div>
    </div>
  );
};

export default MarketplaceProductCard;