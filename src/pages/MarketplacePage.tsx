import React, { useState } from 'react';
import { Plus, Filter, RefreshCw } from 'lucide-react';
import MarketplaceStats from '../components/MarketplaceStats';
import MarketplaceProductCard from '../components/MarketplaceProductCard';
import type { MarketplaceProduct } from '../types/marketplace';

const MOCK_PRODUCTS: MarketplaceProduct[] = [
  {
    id: '1',
    externalId: 'OZN123456',
    marketplace: 'ozon',
    name: 'Premium Office Chair',
    sku: 'CHR-001',
    price: 299.99,
    commission: 15,
    stock: {
      fbo: 10,
      fbs: 5
    },
    status: 'active',
    category: 'Furniture',
    rating: 4.8,
    salesCount: 156,
    lastUpdated: new Date()
  }
];

const MOCK_STATS = {
  ozon: {
    revenue: 1250000,
    orders: 450,
    commission: 187500,
    profit: 1062500,
    growth: 12.5
  },
  wildberries: {
    revenue: 980000,
    orders: 380,
    commission: 147000,
    profit: 833000,
    growth: 8.3
  },
  yandex: {
    revenue: 750000,
    orders: 280,
    commission: 112500,
    profit: 637500,
    growth: -2.1
  }
};

const MarketplacePage = () => {
  const [products] = useState<MarketplaceProduct[]>(MOCK_PRODUCTS);
  const [selectedMarketplace, setSelectedMarketplace] = useState<string>('all');

  const handleSync = (id: string) => {
    console.log('Syncing product:', id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Marketplaces</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Filter size={20} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <RefreshCw size={20} className="mr-2" />
            Sync All
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MarketplaceStats marketplace="ozon" stats={MOCK_STATS.ozon} />
        <MarketplaceStats marketplace="wildberries" stats={MOCK_STATS.wildberries} />
        <MarketplaceStats marketplace="yandex" stats={MOCK_STATS.yandex} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex space-x-2">
          {['all', 'ozon', 'wildberries', 'yandex'].map((marketplace) => (
            <button
              key={marketplace}
              onClick={() => setSelectedMarketplace(marketplace)}
              className={`px-4 py-2 rounded-lg ${
                selectedMarketplace === marketplace
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {marketplace.charAt(0).toUpperCase() + marketplace.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products
          .filter(
            (p) => selectedMarketplace === 'all' || p.marketplace === selectedMarketplace
          )
          .map((product) => (
            <MarketplaceProductCard
              key={product.id}
              product={product}
              onSync={handleSync}
            />
          ))}
      </div>
    </div>
  );
};

export default MarketplacePage;