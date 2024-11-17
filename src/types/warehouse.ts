export interface WarehouseOperation {
  id: string;
  type: 'receipt' | 'shipment' | 'inventory' | 'transfer';
  date: Date;
  status: 'draft' | 'pending' | 'completed' | 'cancelled';
  items: WarehouseItem[];
  totalQuantity: number;
  notes?: string;
  userId: string;
}

export interface WarehouseItem {
  productId: string;
  name: string;
  sku: string;
  quantity: number;
  unit: 'pcs' | 'kg' | 'box';
  batch?: string;
  serialNumbers?: string[];
  expiryDate?: Date;
  location?: string;
  variants?: {
    size?: string;
    color?: string;
    package?: string;
  };
}

export interface Location {
  id: string;
  name: string;
  type: 'shelf' | 'rack' | 'zone';
  capacity: number;
  occupied: number;
  items: LocationItem[];
}

export interface LocationItem {
  productId: string;
  quantity: number;
  lastUpdated: Date;
}

export interface InventoryCount {
  id: string;
  startDate: Date;
  endDate?: Date;
  status: 'in-progress' | 'completed';
  items: InventoryCountItem[];
  discrepancies: number;
  userId: string;
}

export interface InventoryCountItem {
  productId: string;
  expectedQuantity: number;
  actualQuantity: number;
  discrepancy: number;
  notes?: string;
}