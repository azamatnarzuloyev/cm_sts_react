import React, { useState } from 'react';
import { Plus, Filter, Download } from 'lucide-react';
import TransactionList from '../components/TransactionList';
import AccountCard from '../components/AccountCard';
import FinancialSummary from '../components/FinancialSummary';
import type { Transaction, Account, FinancialReport } from '../types/finance';

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    date: new Date(),
    type: 'income',
    amount: 150000,
    category: 'Sales',
    account: 'Main Account',
    description: 'Invoice #2024-001',
    status: 'completed',
    metadata: {
      customer: 'Acme Corp',
      invoice: 'INV-2024-001'
    }
  }
];

const MOCK_ACCOUNTS: Account[] = [
  {
    id: '1',
    name: 'Main Business Account',
    type: 'bank',
    currency: 'RUB',
    balance: 1500000,
    lastSync: new Date(),
    bankDetails: {
      bankName: 'Sberbank',
      accountNumber: '40702810123450000123',
      bik: '044525225',
      correspondentAccount: '30101810400000000225'
    }
  }
];

const MOCK_REPORT: FinancialReport = {
  period: {
    start: new Date('2024-01-01'),
    end: new Date('2024-12-31')
  },
  summary: {
    income: 2500000,
    expenses: 1800000,
    profit: 700000,
    balance: 1500000
  },
  byCategory: [
    {
      category: 'Sales',
      amount: 2500000,
      percentage: 100
    }
  ],
  byProject: [
    {
      project: 'Main Operations',
      income: 2500000,
      expenses: 1800000,
      profit: 700000
    }
  ]
};

const FinancePage = () => {
  const [transactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [accounts] = useState<Account[]>(MOCK_ACCOUNTS);
  const [report] = useState<FinancialReport>(MOCK_REPORT);

  const handleSelectTransaction = (transaction: Transaction) => {
    console.log('Selected transaction:', transaction);
  };

  const handleSyncAccount = (id: string) => {
    console.log('Syncing account:', id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Finance</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Filter size={20} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Download size={20} className="mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} className="mr-2" />
            New Transaction
          </button>
        </div>
      </div>

      <FinancialSummary report={report} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
          <TransactionList
            transactions={transactions}
            onSelect={handleSelectTransaction}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Accounts</h2>
          <div className="space-y-4">
            {accounts.map((account) => (
              <AccountCard
                key={account.id}
                account={account}
                onSync={handleSyncAccount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;