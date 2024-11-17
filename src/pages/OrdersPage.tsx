import React, { useState } from 'react';
import { Plus, Filter, Bell, Truck, Package, AlertTriangle } from 'lucide-react';
import OrderList from '../components/OrderList';
import OrderDetails from '../components/OrderDetails';
import type { Order } from '../types/orders';

const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    number: 'ORD-2024-001',
    date: new Date(),
    status: 'new',
    customer: {
      name: 'Ivan Petrov',
      phone: '+7 (999) 123-4567',
      email: 'ivan@example.com',
      address: 'Lenina St, 123, Moscow'
    },
    items: [
      {
        productId: '1',
        name: 'Premium Office Chair',
        sku: 'CHR-001',
        quantity: 2,
        price: 299.99,
        total: 599.98
      }
    ],
    total: 599.98,
    paymentStatus: 'paid',
    paymentMethod: 'card'
  }
];

const OrdersPage = () => {
  const [orders] = useState<Order[]>(MOCK_ORDERS);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="h-screen flex">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
              <Filter size={20} className="mr-2" />
              Filters
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus size={20} className="mr-2" />
              New Order
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bell className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">New Orders</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Package className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Processing</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Truck className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Shipped</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Issues</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>
        </div>

        <OrderList
          orders={orders}
          selectedOrderId={selectedOrder?.id}
          onSelectOrder={setSelectedOrder}
        />
      </div>

      {selectedOrder && (
        <div className="w-1/3 border-l border-gray-200 bg-gray-50 p-6 overflow-y-auto">
          <OrderDetails order={selectedOrder} />
        </div>
      )}
    </div>
  );
};

export default OrdersPage;