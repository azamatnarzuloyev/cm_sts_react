import React from 'react';
import { Calendar, Users, DollarSign, Clock } from 'lucide-react';
import { format } from 'date-fns';
import type { ManufacturingOrder } from '../types/manufacturing';

interface ManufacturingOrderCardProps {
  order: ManufacturingOrder;
  onView: (id: string) => void;
}

const ManufacturingOrderCard: React.FC<ManufacturingOrderCardProps> = ({
  order,
  onView,
}) => {
  const statusColors = {
    planned: 'blue',
    in_progress: 'yellow',
    completed: 'green',
    cancelled: 'red',
  };

  const progress = order.components.reduce(
    (acc, component) => acc + (component.available / component.required) * 100,
    0
  ) / order.components.length;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Order #{order.number}
          </h3>
          <span
            className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-${
              statusColors[order.status]
            }-100 text-${statusColors[order.status]}-800 mt-1`}
          >
            {order.status.replace('_', ' ').toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => onView(order.id)}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          View Details
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-900 font-medium">{order.product.name}</p>
        <p className="text-sm text-gray-500">SKU: {order.product.sku}</p>
        <p className="text-sm text-gray-500">Quantity: {order.product.quantity}</p>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>{format(order.startDate, 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{order.assignedTo?.length || 0} Workers</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
        <div>
          <div className="flex items-center text-gray-600 mb-1">
            <DollarSign size={16} className="mr-1" />
            <span className="text-sm">Total Cost</span>
          </div>
          <p className="font-semibold">₽{order.totalCost.toLocaleString()}</p>
        </div>
        <div>
          <div className="flex items-center text-gray-600 mb-1">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">Components Ready</span>
          </div>
          <p className="font-semibold">
            {order.components.filter((c) => c.available >= c.required).length}/
            {order.components.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingOrderCard;