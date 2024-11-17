export interface Product {
  id: string;
  name: string;
  barcode: string;
  price: number;
  markingCode?: string;
  alcoholCode?: string;
  category: string;
  taxRate: number;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}

export interface Receipt {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: 'cash' | 'card';
  timestamp: Date;
  fiscalNumber: string;
  markingCodes?: string[];
}

export interface Shift {
  id: string;
  cashierId: string;
  startTime: Date;
  endTime?: Date;
  totalSales: number;
  totalReceipts: number;
  cashBalance: number;
}