export interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  price: number;
  stock: number;
  reserved: number;
  minStock: number;
  category: string;
  lastModified: Date;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
}

export interface InventoryAudit {
  id: string;
  date: Date;
  productId: string;
  previousStock: number;
  newStock: number;
  reason: string;
  userId: string;
}

export interface PurchaseOrder {
  id: string;
  date: Date;
  status: 'draft' | 'pending' | 'approved' | 'completed';
  items: PurchaseOrderItem[];
  totalAmount: number;
}

export interface PurchaseOrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}