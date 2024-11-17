export interface Order {
  id: string;
  number: string;
  date: Date;
  status: 'new' | 'processing' | 'picking' | 'ready' | 'shipped' | 'delivered' | 'cancelled';
  customer: {
    name: string;
    phone: string;
    email?: string;
    address: string;
  };
  items: OrderItem[];
  total: number;
  assignedTo?: string;
  notes?: string;
  trackingNumber?: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  paymentMethod: 'card' | 'cash' | 'bank';
}

export interface OrderItem {
  productId: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  total: number;
  picked?: boolean;
}