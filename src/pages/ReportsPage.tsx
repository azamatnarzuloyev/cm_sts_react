import React, { useState } from 'react';
import { Download, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import ReportChart from '../components/ReportChart';
import type { SalesReport, InventoryReport, CustomerReport } from '../types/reports';

const MOCK_SALES_REPORT: SalesReport = {
  period: 'Last 30 days',
  metrics: {
    revenue: {
      label: 'Total Revenue',
      value: 2450000,
      change: 12.5,
      trend: 'up'
    },
    orders: {
      label: 'Total Orders',
      value: 845,
      change: 8.2,
      trend: 'up'
    },
    averageOrder: {
      label: 'Average Order Value',
      value: 2899,
      change: 4.3,
      trend: 'up'
    },
    conversion: {
      label: 'Conversion Rate',
      value: 3.2,
      change: -0.5,
      trend: 'down'
    }
  },
  byChannel: [
    { channel: 'Retail Store', revenue: 1200000, orders: 420, percentage: 49 },
    { channel: 'Online Store', revenue: 800000, orders: 285, percentage: 33 },
    { channel: 'Marketplaces', revenue: 450000, orders: 140, percentage: 18 }
  ],
  byProduct: [
    { product: 'Office Chair', revenue: 450000, quantity: 150, profit: 180000 },
    { product: 'Desk Lamp', revenue: 280000, quantity: 350, profit: 140000 },
    { product: 'Keyboard', revenue: 180000, quantity: 200, profit: 72000 }
  ]
};

const MOCK_INVENTORY_REPORT: InventoryReport = {
  metrics: {
    totalValue: {
      label: 'Total Inventory Value',
      value: 3850000,
      change: 5.8,
      trend: 'up'
    },
    totalItems: {
      label: 'Total Items',
      value: 1284,
      change: 3.1,
      trend: 'up'
    },
    lowStock: {
      label: 'Low Stock Items',
      value: 23,
      change: -12.5,
      trend: 'down'
    },
    turnover: {
      label: 'Inventory Turnover',
      value: 4.2,
      change: 0.8,
      trend: 'up'
    }
  },
  byCategory: [
    { category: 'Furniture', value: 1500000, items: 450, percentage: 39 },
    { category: 'Electronics', value: 1200000, items: 520, percentage: 31 },
    { category: 'Accessories', value: 1150000, items: 314, percentage: 30 }
  ],
  topMoving: [
    { product: 'Office Chair', sales: 150, stock: 45, reorderPoint: 20 },
    { product: 'Desk Lamp', sales: 350, stock: 120, reorderPoint: 50 },
    { product: 'Keyboard', sales: 200, stock: 80, reorderPoint: 30 }
  ]
};

const MOCK_CUSTOMER_REPORT: CustomerReport = {
  metrics: {
    totalCustomers: {
      label: 'Total Customers',
      value: 892,
      change: 14.3,
      trend: 'up'
    },
    activeCustomers: {
      label: 'Active Customers',
      value: 654,
      change: 8.9,
      trend: 'up'
    },
    customerLifetime: {
      label: 'Avg. Customer Lifetime',
      value: 12500,
      change: 5.2,
      trend: 'up'
    },
    satisfaction: {
      label: 'Customer Satisfaction',
      value: 4.8,
      change: 0.3,
      trend: 'up'
    }
  },
  bySegment: [
    { segment: 'Regular', customers: 450, revenue: 1200000, percentage: 50 },
    { segment: 'VIP', customers: 142, revenue: 800000, percentage: 33 },
    { segment: 'New', customers: 300, revenue: 450000, percentage: 17 }
  ],
  retention: [
    { period: '30 days', rate: 85, customers: 723 },
    { period: '60 days', rate: 72, customers: 642 },
    { period: '90 days', rate: 65, customers: 580 }
  ]
};

const ReportsPage = () => {
  const [salesReport] = useState<SalesReport>(MOCK_SALES_REPORT);
  const [inventoryReport] = useState<InventoryReport>(MOCK_INVENTORY_REPORT);
  const [customerReport] = useState<CustomerReport>(MOCK_CUSTOMER_REPORT);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Download size={20} className="mr-2" />
          Export Reports
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          metric={salesReport.metrics.revenue}
          icon={<DollarSign className="text-blue-600" size={24} />}
          prefix="₽"
        />
        <MetricCard
          metric={salesReport.metrics.orders}
          icon={<ShoppingCart className="text-green-600" size={24} />}
        />
        <MetricCard
          metric={customerReport.metrics.totalCustomers}
          icon={<Users className="text-purple-600" size={24} />}
        />
        <MetricCard
          metric={inventoryReport.metrics.totalItems}
          icon={<Package className="text-amber-600" size={24} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportChart
          title="Revenue by Channel"
          data={salesReport.byChannel.map(item => ({
            label: item.channel,
            value: item.revenue,
            percentage: item.percentage
          }))}
          type="bar"
        />
        <ReportChart
          title="Customer Segments"
          data={customerReport.bySegment.map(item => ({
            label: item.segment,
            value: item.customers,
            percentage: item.percentage
          }))}
          type="pie"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-4">
            {salesReport.byProduct.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{product.product}</p>
                  <p className="text-sm text-gray-500">{product.quantity} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">₽{product.revenue.toLocaleString()}</p>
                  <p className="text-sm text-green-500">₽{product.profit.toLocaleString()} profit</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {inventoryReport.topMoving.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{item.product}</p>
                  <p className="text-sm text-gray-500">{item.stock} in stock</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{item.sales} monthly sales</p>
                  <p className="text-sm text-amber-500">
                    Reorder at {item.reorderPoint}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Retention</h3>
          <div className="space-y-4">
            {customerReport.retention.map((period, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-900">{period.period}</span>
                  <span className="text-gray-500">{period.rate}% retained</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${period.rate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {period.customers} active customers
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;