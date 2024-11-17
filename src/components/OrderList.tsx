import React from 'react';
import { format } from 'date-fns';
import type { Order } from '../types/orders';

interface OrderListProps {
  orders: Order[];
  selectedOrderId?: string;
  onSelectOrder: (order: Order) => void;
}

const OrderList: React.FC<OrderListProps> = ({
  orders,
  selectedOrderId,
  onSelectOrder,
}) => {
  const statusColors = {
    new: 'blue',
    processing: 'yellow',
    picking: 'purple',
    ready: 'indigo',
    shipped: 'green',
    delivered: 'green',
    cancelled: 'red',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500 border-b border-gray-200">
              <th className="px-6 py-4">Order #</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Payment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr
                key={order.id}
                onClick={() => onSelectOrder(order)}
                className={`hover:bg-gray-50 cursor-pointer ${
                  selectedOrderId === order.id ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{order.number}</span>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {format(order.date, 'MMM d, yyyy HH:mm')}
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{order.customer.name}</p>
                    <p className="text-sm text-gray-500">{order.customer.phone}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${
                      statusColors[order.status]
                    }-100 text-${statusColors[order.status]}-800`}
                  >
                    {order.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">₽{order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.paymentStatus === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : order.paymentStatus === 'refunded'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.paymentStatus.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;