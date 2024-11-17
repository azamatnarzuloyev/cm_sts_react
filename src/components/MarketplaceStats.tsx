import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Package } from 'lucide-react';
import type { MarketplaceType } from '../types/marketplace';

interface MarketplaceStatsProps {
  marketplace: MarketplaceType;
  stats: {
    revenue: number;
    orders: number;
    commission: number;
    profit: number;
    growth: number;
  };
}

const MarketplaceStats: React.FC<MarketplaceStatsProps> = ({ marketplace, stats }) => {
  const marketplaceColors = {
    ozon: 'blue',
    wildberries: 'purple',
    yandex: 'yellow'
  };

  const color = marketplaceColors[marketplace];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xl font-bold text-${color}-600 capitalize`}>
          {marketplace}
        </h3>
        {stats.growth >= 0 ? (
          <div className="flex items-center text-green-500">
            <TrendingUp size={20} className="mr-1" />
            <span>+{stats.growth}%</span>
          </div>
        ) : (
          <div className="flex items-center text-red-500">
            <TrendingDown size={20} className="mr-1" />
            <span>{stats.growth}%</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Revenue</p>
          <div className="flex items-center">
            <DollarSign size={20} className="text-gray-400 mr-1" />
            <span className="text-xl font-bold">₽{stats.revenue.toLocaleString()}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Orders</p>
          <div className="flex items-center">
            <Package size={20} className="text-gray-400 mr-1" />
            <span className="text-xl font-bold">{stats.orders}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Commission</p>
          <span className="text-xl font-bold">₽{stats.commission.toLocaleString()}</span>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Net Profit</p>
          <span className="text-xl font-bold">₽{stats.profit.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceStats;