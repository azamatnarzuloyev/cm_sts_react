import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import type { CartItem as CartItemType } from '../types/pos';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">
          {item.markingCode && '📦 Marked Product'}
          {item.alcoholCode && '🍾 Alcohol Product'}
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            disabled={item.quantity <= 1}
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            disabled={item.quantity >= item.stock}
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="w-20 text-right font-medium">
          ₽{item.totalPrice.toFixed(2)}
        </div>
        
        <button
          onClick={() => onRemove(item.id)}
          className="p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;