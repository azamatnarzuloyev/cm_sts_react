import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';
import type { FinancialReport } from '../types/finance';

interface FinancialSummaryProps {
  report: FinancialReport;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ report }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Income</p>
            <p className="text-2xl font-bold text-gray-900">
              ₽{report.summary.income.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <TrendingDown className="text-red-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Expenses</p>
            <p className="text-2xl font-bold text-gray-900">
              ₽{report.summary.expenses.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <DollarSign className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Profit</p>
            <p className="text-2xl font-bold text-gray-900">
              ₽{report.summary.profit.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <PieChart className="text-purple-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Balance</p>
            <p className="text-2xl font-bold text-gray-900">
              ₽{report.summary.balance.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;