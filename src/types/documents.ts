export interface PrintTemplate {
  id: string;
  name: string;
  type: 'label' | 'receipt' | 'invoice' | 'waybill' | 'pricetag';
  content: string;
  paperSize: 'A4' | 'A5' | 'thermal' | 'label';
  isDefault: boolean;
}

export interface DocumentData {
  id: string;
  type: 'invoice' | 'waybill' | 'receipt' | 'pricetag';
  date: Date;
  number: string;
  items: DocumentItem[];
  total: number;
  customer?: {
    name: string;
    inn?: string;
    address?: string;
  };
  status: 'draft' | 'printed' | 'sent';
}

export interface DocumentItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
  vat?: number;
}