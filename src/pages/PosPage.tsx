import React, { useState } from 'react';
import { Search, ShoppingCart, QrCode } from 'lucide-react';
import PosKeypad from '../components/PosKeypad';
import CartItem from '../components/CartItem';
import PaymentModal from '../components/PaymentModal';
import type { CartItem as CartItemType, Product } from '../types/pos';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Vodka',
    barcode: '4607071792548',
    price: 1299.99,
    alcoholCode: 'alc-123456',
    category: 'Alcohol',
    taxRate: 20,
    stock: 15
  },
  {
    id: '2',
    name: 'Marlboro Red',
    barcode: '4607071792555',
    price: 169.99,
    markingCode: 'mark-123456',
    category: 'Tobacco',
    taxRate: 20,
    stock: 42
  }
];

const PosPage = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [showPayment, setShowPayment] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product: Product) => {
    setCart(current => {
      const existing = current.find(item => item.id === product.id);
      if (existing) {
        return current.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
            : item
        );
      }
      return [...current, { ...product, quantity: 1, totalPrice: product.price }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(current =>
      current.map(item =>
        item.id === id
          ? { ...item, quantity, totalPrice: quantity * item.price }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart(current => current.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const handlePayment = (method: 'cash' | 'card') => {
    console.log('Processing payment:', { method, total, items: cart });
    setShowPayment(false);
    setCart([]);
  };

  return (
    <div className="h-screen flex">
      {/* Left side - Products */}
      <div className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {MOCK_PRODUCTS.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.barcode.includes(searchQuery)
          ).map(product => (
            <button
              key={product.id}
              onClick={() => addToCart(product)}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">#{product.barcode}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">₽{product.price}</span>
                <div className="flex space-x-1">
                  {product.alcoholCode && <span className="text-blue-600">🍾</span>}
                  {product.markingCode && <span className="text-green-600">📦</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Cart */}
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-gray-900">Current Sale</h2>
            <ShoppingCart size={24} className="text-gray-400" />
          </div>
          <p className="text-sm text-gray-500">
            {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₽{(total * 0.8).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">VAT (20%)</span>
            <span className="font-medium">₽{(total * 0.2).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>₽{total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => setShowPayment(true)}
            disabled={cart.length === 0}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          items={cart}
          total={total}
          onComplete={handlePayment}
          onCancel={() => setShowPayment(false)}
        />
      )}
    </div>
  );
};

export default PosPage;