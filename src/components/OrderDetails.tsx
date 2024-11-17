import React from 'react';
import { format } from 'date-fns';
import { Phone, Mail, MapPin, CreditCard, Truck, FileText } from 'lucide-react';
import type { Order } from '../types/orders';

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Order {order.number}</h2>
          <p className="text-sm text-gray-500">
            {format(order.date, 'MMMM d, yyyy HH:mm')}
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Update Status
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Details</h3>
        <div className="space-y-3">
          <p className="text-gray-900 font-medium">{order.customer.name}</p>
          <div className="flex items-center text-gray-600">
            <Phone size={18} className="mr-2" />
            <span>{order.customer.phone}</span>
          </div>
          {order.customer.email && (
            <div className="flex items-center text-gray-600">
              <Mail size={18} className="mr-2" />
              <span>{order.customer.email}</span>
            </div>
          )}
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2" />
            <span>{order.customer.address}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">SKU: {item.sku}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {item.quantity} × ₽{item.price.toFixed(2)}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  ₽{item.total.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₽{order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment & Shipping</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center text-gray-600 mb-2">
              <CreditCard size={18} className="mr-2" />
              <span className="font-medium">Payment</span>
            </div>
            <p className="text-gray-900">
              {order.paymentMethod.toUpperCase()} - {order.paymentStatus.toUpperCase()}
            </p>
          </div>
          <div>
            <div className="flex items-center text-gray-600 mb-2">
              <Truck size={18} className="mr-2" />
              <span className="font-medium">Shipping</span>
            </div>
            <p className="text-gray-900">{order.status.toUpperCase()}</p>
            {order.trackingNumber && (
              <p className="text-sm text-gray-500">
                Tracking: {order.trackingNumber}
              </p>
            )}
          </div>
        </div>
      </div>

      {order.notes && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center text-gray-600 mb-2">
            <FileText size={18} className="mr-2" />
            <span className="font-medium">Notes</span>
          </div>
          <p className="text-gray-900">{order.notes}</p>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;