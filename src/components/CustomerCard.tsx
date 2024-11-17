import React from 'react';
import { Phone, Mail, MapPin, Calendar, Star, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import type { Customer } from '../types/crm';

interface CustomerCardProps {
  customer: Customer;
  onEdit: (customer: Customer) => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onEdit }) => {
  const segmentColors = {
    new: 'blue',
    regular: 'green',
    vip: 'purple',
    inactive: 'gray'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{customer.name}</h3>
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-${segmentColors[customer.segment]}-100 text-${segmentColors[customer.segment]}-800 mt-1`}>
            {customer.segment.toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => onEdit(customer)}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Edit
        </button>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <Phone size={18} className="mr-2" />
          <span>{customer.phone}</span>
        </div>
        {customer.email && (
          <div className="flex items-center text-gray-600">
            <Mail size={18} className="mr-2" />
            <span>{customer.email}</span>
          </div>
        )}
        {customer.address && (
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2" />
            <span>{customer.address}</span>
          </div>
        )}
        {customer.birthDate && (
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2" />
            <span>{format(customer.birthDate, 'MMM d, yyyy')}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total Spent</p>
          <p className="text-lg font-semibold">₽{customer.totalSpent.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Bonus Points</p>
          <div className="flex items-center">
            <Star size={18} className="text-yellow-400 mr-1" />
            <span className="text-lg font-semibold">{customer.bonusPoints}</span>
          </div>
        </div>
      </div>

      {customer.lastPurchase && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Last Purchase</p>
          <div className="flex items-center">
            <CreditCard size={18} className="text-gray-400 mr-2" />
            <span>{format(customer.lastPurchase, 'MMM d, yyyy')}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerCard;