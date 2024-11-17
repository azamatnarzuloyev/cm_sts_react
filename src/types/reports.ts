export interface ReportMetric {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export interface SalesReport {
  period: string;
  metrics: {
    revenue: ReportMetric;
    orders: ReportMetric;
    averageOrder: ReportMetric;
    conversion: ReportMetric;
  };
  byChannel: {
    channel: string;
    revenue: number;
    orders: number;
    percentage: number;
  }[];
  byProduct: {
    product: string;
    revenue: number;
    quantity: number;
    profit: number;
  }[];
}

export interface InventoryReport {
  metrics: {
    totalValue: ReportMetric;
    totalItems: ReportMetric;
    lowStock: ReportMetric;
    turnover: ReportMetric;
  };
  byCategory: {
    category: string;
    value: number;
    items: number;
    percentage: number;
  }[];
  topMoving: {
    product: string;
    sales: number;
    stock: number;
    reorderPoint: number;
  }[];
}

export interface CustomerReport {
  metrics: {
    totalCustomers: ReportMetric;
    activeCustomers: ReportMetric;
    customerLifetime: ReportMetric;
    satisfaction: ReportMetric;
  };
  bySegment: {
    segment: string;
    customers: number;
    revenue: number;
    percentage: number;
  }[];
  retention: {
    period: string;
    rate: number;
    customers: number;
  }[];
}