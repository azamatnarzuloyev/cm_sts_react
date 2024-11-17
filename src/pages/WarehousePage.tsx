import React, { useState } from 'react';
import { Plus, Filter, ArrowDownCircle, ArrowUpCircle, ClipboardList } from 'lucide-react';
import WarehouseOperationCard from '../components/WarehouseOperationCard';
import LocationCard from '../components/LocationCard';
import type { WarehouseOperation, Location } from '../types/warehouse';

const MOCK_OPERATIONS: WarehouseOperation[] = [
  {
    id: 'WH-001',
    type: 'receipt',
    date: new Date(),
    status: 'completed',
    items: [
      {
        productId: '1',
        name: 'Premium Office Chair',
        sku: 'CHR-001',
        quantity: 10,
        unit: 'pcs',
        variants: {
          color: 'Black',
          size: 'Standard'
        }
      }
    ],
    totalQuantity: 10,
    userId: 'USER-001'
  }
];

const MOCK_LOCATIONS: Location[] = [
  {
    id: 'LOC-001',
    name: 'Rack A1',
    type: 'rack',
    capacity: 100,
    occupied: 75,
    items: [
      {
        productId: '1',
        quantity: 75,
        lastUpdated: new Date()
      }
    ]
  }
];

const WarehousePage = () => {
  const [operations] = useState<WarehouseOperation[]>(MOCK_OPERATIONS);
  const [locations] = useState<Location[]>(MOCK_LOCATIONS);

  const handleViewOperation = (id: string) => {
    console.log('View operation:', id);
  };

  const handleViewLocation = (id: string) => {
    console.log('View location:', id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Warehouse Management</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Filter size={20} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            New Operation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <ArrowDownCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Receipts Today</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ArrowUpCircle className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Shipments Today</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <ClipboardList className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Operations</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Operations</h2>
          <div className="grid grid-cols-1 gap-4">
            {operations.map((operation) => (
              <WarehouseOperationCard
                key={operation.id}
                operation={operation}
                onView={handleViewOperation}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Storage Locations</h2>
          <div className="space-y-4">
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                onView={handleViewLocation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehousePage;