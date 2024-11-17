import React from 'react';
import { Plus, FileText, Clock, CheckCircle } from 'lucide-react';
import type { PurchaseOrder } from '../types/inventory';

const MOCK_ORDERS: PurchaseOrder[] = [
  {
    id: 'PO-001',
    date: new Date(),
    status: 'pending',
    items: [
      { productId: '1', quantity: 10, unitPrice: 299.99 },
      { productId: '2', quantity: 20, unitPrice: 49.99 }
    ],
    totalAmount: 4000.80
  }
];

const PurchaseOrdersPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Purchase Orders</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} className="mr-2" />
          New Purchase Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Clock className="text-amber-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-900">16</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4">Order ID</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Items</th>
                  <th className="pb-4">Total Amount</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {MOCK_ORDERS.map((order) => (
                  <tr key={order.id} className="border-t border-gray-100">
                    <td className="py-4">{order.id}</td>
                    <td className="py-4">{order.date.toLocaleDateString()}</td>
                    <td className="py-4">{order.items.length} items</td>
                    <td className="py-4">${order.totalAmount.toFixed(2)}</td>
                    <td className="py-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-blue-600 hover:text-blue-700">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrdersPage;