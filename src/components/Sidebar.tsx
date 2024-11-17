import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home,
  Package, 
  ShoppingCart, 
  ClipboardList, 
  BarChart2, 
  Settings,
  Boxes,
  History,
  AlertTriangle,
  Globe,
  Users,
  DollarSign,
  Factory,
  LayoutGrid
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Boxes, label: 'Inventory', path: '/inventory' },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: Globe, label: 'Marketplaces', path: '/marketplace' },
    { icon: ClipboardList, label: 'Documents', path: '/documents' },
    { icon: LayoutGrid, label: 'POS', path: '/pos' },
    { icon: Users, label: 'CRM', path: '/crm' },
    { icon: Factory, label: 'Manufacturing', path: '/manufacturing' },
    { icon: DollarSign, label: 'Finance', path: '/finance' },
    { icon: AlertTriangle, label: 'Low Stock', path: '/low-stock' },
    { icon: History, label: 'History', path: '/history' },
    { icon: BarChart2, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Inventory Pro</h1>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;