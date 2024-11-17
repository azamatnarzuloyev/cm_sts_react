import React from 'react';
import { Package, Calendar, User, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';
import type { WarehouseOperation } from '../types/warehouse';

interface WarehouseOperationCardProps {
  operation: WarehouseOperation;
  onView: (id: string) => void;
}

const WarehouseOperationCard: React.FC<WarehouseOperationCardProps> = ({
  operation,
  onView,
}) => {
  const statusColors = {
    draft: 'gray',
    pending: 'yellow',
    completed: 'green',
    cancelled: 'red',
  };

  const typeIcons = {
    receipt: '📥',
    shipment: '📤',
    inventory: '📋',
    transfer: '↔️',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{typeIcons[operation.type]}</span>
            <h3 className="text-lg font-semibold text-gray-900">
              {operation.type.charAt(0).toUpperCase() + operation.type.slice(1)} #{operation.id}
            </h3>
          </div>
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-${statusColors[operation.status]}-100 text-${statusColors[operation.status]}-800 mt-2`}>
            {operation.status.toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => onView(operation.id)}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          View Details
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar size={18} className="mr-2" />
          <span>{format(operation.date, 'MMM d, yyyy HH:mm')}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <User size={18} className="mr-2" />
          <span>User ID: {operation.userId}</span>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Items</p>
            <div className="flex items-center">
              <Package size={18} className="text-gray-400 mr-2" />
              <span className="text-lg font-semibold">{operation.totalQuantity}</span>
            </div>
          </div>
          {operation.notes && (
            <div className="flex items-center text-amber-500">
              <AlertTriangle size={18} className="mr-1" />
              <span className="text-sm">Has notes</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarehouseOperationCard;