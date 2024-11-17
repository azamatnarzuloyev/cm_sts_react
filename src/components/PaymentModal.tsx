import React, { useState } from 'react';
import { CreditCard, Wallet, QrCode } from 'lucide-react';
import type { CartItem } from '../types/pos';

interface PaymentModalProps {
  items: CartItem[];
  total: number;
  onComplete: (method: 'cash' | 'card') => void;
  onCancel: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ items, total, onComplete, onCancel }) => {
  const [selectedMethod, setSelectedMethod] = useState<'cash' | 'card'>('cash');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
          
          <div className="space-y-4 mb-6">
            <button
              onClick={() => setSelectedMethod('cash')}
              className={`w-full p-4 rounded-lg border ${
                selectedMethod === 'cash'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200'
              } flex items-center space-x-3`}
            >
              <Wallet size={24} className={selectedMethod === 'cash' ? 'text-blue-600' : 'text-gray-400'} />
              <span className="font-medium">Cash Payment</span>
            </button>
            
            <button
              onClick={() => setSelectedMethod('card')}
              className={`w-full p-4 rounded-lg border ${
                selectedMethod === 'card'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200'
              } flex items-center space-x-3`}
            >
              <CreditCard size={24} className={selectedMethod === 'card' ? 'text-blue-600' : 'text-gray-400'} />
              <span className="font-medium">Card Payment</span>
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₽{(total * 0.8).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">VAT (20%)</span>
              <span className="font-medium">₽{(total * 0.2).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t">
              <span>Total</span>
              <span>₽{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={onCancel}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => onComplete(selectedMethod)}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Complete Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;