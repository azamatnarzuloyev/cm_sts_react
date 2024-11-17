import React from 'react';
import { format } from 'date-fns';
import { ArrowUpRight, ArrowDownLeft, ArrowLeftRight } from 'lucide-react';
import type { Transaction } from '../types/finance';

interface TransactionListProps {
  transactions: Transaction[];
  onSelect: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onSelect }) => {
  const typeIcons = {
    income: <ArrowDownLeft className="text-green-500" size={20} />,
    expense: <ArrowUpRight className="text-red-500" size={20} />,
    transfer: <ArrowLeftRight className="text-blue-500" size={20} />
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500 border-b border-gray-200">
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                onClick={() => onSelect(transaction)}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-6 py-4 text-gray-500">
                  {format(transaction.date, 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {typeIcons[transaction.type]}
                    <span className="ml-2 capitalize">{transaction.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">
                    {transaction.description}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100">
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`font-medium ${
                    transaction.type === 'income' ? 'text-green-600' : 
                    transaction.type === 'expense' ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    ₽{transaction.amount.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;