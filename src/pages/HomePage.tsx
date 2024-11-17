import React from 'react';
import { ArrowUpRight, Users, Package, ShoppingCart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const stats = [
    {
      label: 'Total Revenue',
      value: '₽2.4M',
      change: '+12.5%',
      icon: DollarSign,
      color: 'blue'
    },
    {
      label: 'Active Orders',
      value: '45',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'green'
    },
    {
      label: 'Total Products',
      value: '1,284',
      change: '+3.1%',
      icon: Package,
      color: 'purple'
    },
    {
      label: 'Total Customers',
      value: '892',
      change: '+14.3%',
      icon: Users,
      color: 'amber'
    }
  ];

  const quickActions = [
    { name: 'New Order', path: '/orders', color: 'blue' },
    { name: 'Add Product', path: '/products', color: 'green' },
    { name: 'Process Returns', path: '/orders', color: 'red' },
    { name: 'View Reports', path: '/finance', color: 'purple' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-2 bg-${stat.color}-100 rounded-lg`}>
                <stat.icon className={`text-${stat.color}-600`} size={24} />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUpRight className="text-green-500 mr-1" size={16} />
              <span className="text-green-500 font-medium">{stat.change}</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className={`p-4 rounded-lg border-2 border-${action.color}-100 hover:bg-${action.color}-50 transition-colors`}
              >
                <p className={`font-medium text-${action.color}-600`}>{action.name}</p>
                <p className="text-sm text-gray-500 mt-1">Click to proceed</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium text-gray-900">New order received</p>
                  <p className="text-sm text-gray-500">Order #2024-{String(index + 1).padStart(3, '0')}</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;