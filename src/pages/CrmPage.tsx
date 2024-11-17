import React, { useState } from 'react';
import { Plus, Filter, Users, Gift, TrendingUp } from 'lucide-react';
import CustomerCard from '../components/CustomerCard';
import LoyaltyProgramCard from '../components/LoyaltyProgramCard';
import type { Customer, LoyaltyProgram } from '../types/crm';

const MOCK_CUSTOMERS: Customer[] = [
  {
    id: '1',
    name: 'Ivan Petrov',
    phone: '+7 (999) 123-4567',
    email: 'ivan@example.com',
    birthDate: new Date('1990-05-15'),
    registrationDate: new Date('2023-01-10'),
    segment: 'vip',
    bonusPoints: 1500,
    totalSpent: 150000,
    lastPurchase: new Date('2024-02-28'),
    address: 'Lenina St, 123, Moscow'
  }
];

const MOCK_PROGRAMS: LoyaltyProgram[] = [
  {
    id: '1',
    name: 'Points Rewards',
    type: 'points',
    pointsPerRuble: 1,
    active: true
  },
  {
    id: '2',
    name: 'VIP Tiers',
    type: 'tier',
    active: true,
    tiers: [
      {
        name: 'Silver',
        minSpent: 50000,
        bonusMultiplier: 1.5,
        benefits: ['Priority Support', '1.5x Points']
      },
      {
        name: 'Gold',
        minSpent: 150000,
        bonusMultiplier: 2,
        benefits: ['Priority Support', '2x Points', 'Free Delivery']
      }
    ]
  }
];

const CrmPage = () => {
  const [customers] = useState<Customer[]>(MOCK_CUSTOMERS);
  const [programs] = useState<LoyaltyProgram[]>(MOCK_PROGRAMS);

  const handleEditCustomer = (customer: Customer) => {
    console.log('Edit customer:', customer);
  };

  const handleToggleProgram = (id: string) => {
    console.log('Toggle program:', id);
  };

  const handleEditProgram = (program: LoyaltyProgram) => {
    console.log('Edit program:', program);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Filter size={20} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            Add Customer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Gift className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Programs</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly Growth</p>
              <p className="text-2xl font-bold text-gray-900">+12.5%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customers.map((customer) => (
              <CustomerCard
                key={customer.id}
                customer={customer}
                onEdit={handleEditCustomer}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Loyalty Programs</h2>
          <div className="space-y-4">
            {programs.map((program) => (
              <LoyaltyProgramCard
                key={program.id}
                program={program}
                onToggle={handleToggleProgram}
                onEdit={handleEditProgram}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmPage;