import React, { useState } from 'react';
import { Plus, Filter, Settings, Wrench, Boxes } from 'lucide-react';
import ManufacturingOrderCard from '../components/ManufacturingOrderCard';
import ComponentsList from '../components/ComponentsList';
import AssemblyLineCard from '../components/AssemblyLineCard';
import type { ManufacturingOrder, AssemblyLine, Component } from '../types/manufacturing';

const MOCK_ORDERS: ManufacturingOrder[] = [
  {
    id: '1',
    number: 'MO-2024-001',
    status: 'in_progress',
    product: {
      id: '1',
      name: 'Premium Office Chair',
      sku: 'CHR-001',
      quantity: 50
    },
    components: [
      {
        id: '1',
        name: 'Chair Base',
        sku: 'CB-001',
        required: 50,
        available: 30,
        cost: 45.99
      },
      {
        id: '2',
        name: 'Seat Cushion',
        sku: 'SC-001',
        required: 50,
        available: 50,
        cost: 29.99
      }
    ],
    startDate: new Date(),
    laborCost: 5000,
    materialCost: 3799.50,
    totalCost: 8799.50,
    assignedTo: ['WORKER-001', 'WORKER-002']
  }
];

const MOCK_LINES: AssemblyLine[] = [
  {
    id: '1',
    name: 'Assembly Line A',
    status: 'active',
    currentOrder: 'MO-2024-001',
    capacity: 100,
    efficiency: 95,
    workers: [
      {
        id: 'WORKER-001',
        name: 'John Doe',
        role: 'operator',
        shift: 'morning',
        specializations: ['furniture']
      }
    ]
  }
];

const ManufacturingPage = () => {
  const [orders] = useState<ManufacturingOrder[]>(MOCK_ORDERS);
  const [lines] = useState<AssemblyLine[]>(MOCK_LINES);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const handleViewOrder = (id: string) => {
    setSelectedOrder(id);
  };

  const handleOrderComponent = (componentId: string) => {
    console.log('Ordering component:', componentId);
  };

  const handleAssignLine = (lineId: string) => {
    console.log('Assigning line:', lineId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manufacturing</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Filter size={20} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            New Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Settings className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Orders</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Wrench className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Assembly Lines</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Boxes className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Component Alerts</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Manufacturing Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orders.map((order) => (
                <ManufacturingOrderCard
                  key={order.id}
                  order={order}
                  onView={handleViewOrder}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Assembly Lines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lines.map((line) => (
                <AssemblyLineCard
                  key={line.id}
                  line={line}
                  onAssign={handleAssignLine}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Components</h2>
          {selectedOrder ? (
            <ComponentsList
              components={orders.find((o) => o.id === selectedOrder)?.components || []}
              onOrder={handleOrderComponent}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
              <Boxes size={48} className="mx-auto mb-4" />
              <p>Select an order to view components</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManufacturingPage;