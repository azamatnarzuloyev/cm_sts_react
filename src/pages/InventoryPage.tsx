import React from 'react';
import { BarChart3, TrendingDown, TrendingUp, Package } from 'lucide-react';

const InventoryPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Inventory Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Package className="text-blue-600" size={24} />
            </div>
            <span className="text-sm font-medium text-gray-400">Total Items</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">1,284</h3>
              <p className="text-sm text-gray-500">Products in stock</p>
            </div>
            <div className="flex items-center text-green-500">
              <TrendingUp size={20} className="mr-1" />
              <span className="text-sm font-medium">+12.5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <TrendingDown className="text-red-600" size={24} />
            </div>
            <span className="text-sm font-medium text-gray-400">Low Stock</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">23</h3>
              <p className="text-sm text-gray-500">Items below minimum</p>
            </div>
            <div className="flex items-center text-red-500">
              <TrendingUp size={20} className="mr-1" />
              <span className="text-sm font-medium">+4.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart3 className="text-green-600" size={24} />
            </div>
            <span className="text-sm font-medium text-gray-400">Value</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">$142.5k</h3>
              <p className="text-sm text-gray-500">Total inventory value</p>
            </div>
            <div className="flex items-center text-green-500">
              <TrendingUp size={20} className="mr-1" />
              <span className="text-sm font-medium">+8.1%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="text-purple-600" size={24} />
            </div>
            <span className="text-sm font-medium text-gray-400">Reserved</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">156</h3>
              <p className="text-sm text-gray-500">Items reserved</p>
            </div>
            <div className="flex items-center text-green-500">
              <TrendingUp size={20} className="mr-1" />
              <span className="text-sm font-medium">+2.3%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Activity items would go here */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Stock Updated</p>
                  <p className="text-xs text-gray-500">Premium Office Chair +5</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            {/* More activity items... */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Low Stock Alerts</h2>
          <div className="space-y-4">
            {/* Low stock items would go here */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Wireless Mouse</p>
                  <p className="text-xs text-gray-500">8 units remaining (Min: 20)</p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Order
              </button>
            </div>
            {/* More low stock items... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;