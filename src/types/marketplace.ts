export type MarketplaceType = 'ozon' | 'wildberries' | 'yandex';

export interface MarketplaceProduct {
  id: string;
  externalId: string;
  marketplace: MarketplaceType;
  name: string;
  sku: string;
  price: number;
  commission: number;
  stock: {
    fbo: number;
    fbs: number;
  };
  status: 'active' | 'inactive' | 'moderation' | 'rejected';
  category: string;
  rating: number;
  salesCount: number;
  lastUpdated: Date;
}

export interface MarketplaceOrder {
  id: string;
  marketplace: MarketplaceType;
  externalId: string;
  date: Date;
  status: 'new' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  deliveryType: 'fbo' | 'fbs';
  items: MarketplaceOrderItem[];
  customer: {
    name: string;
    address: string;
    phone?: string;
  };
  total: number;
  commission: number;
  profit: number;
}

export interface MarketplaceOrderItem {
  productId: string;
  externalId: string;
  name: string;
  quantity: number;
  price: number;
  commission: number;
}