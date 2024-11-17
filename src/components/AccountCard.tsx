import React from 'react';
import { Wallet, CreditCard, Building2, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';
import type { Account } from '../types/finance';

interface AccountCardProps {
  account: Account;
  onSync: (id: string) => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ account, onSync }) => {
  const icons = {
    cash: Wallet,
    bank: Building2,
    card: CreditCard
  };

  const Icon = icons[account.type];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon className="text-blue-600" size={24} />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">{account.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{account.type} Account</p>
          </div>
        </div>
        <button
          onClick={() => onSync(account.id)}
          className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50"
        >
          <RefreshCw size={20} />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500">Balance</p>
        <p className="text-2xl font-bold text-gray-900">
          ₽{account.balance.toLocaleString()}
        </p>
      </div>

      {account.bankDetails && (
        <div className="space-y-2 text-sm text-gray-600">
          <p>Bank: {account.bankDetails.bankName}</p>
          <p>Account: {account.bankDetails.accountNumber}</p>
          <p>BIK: {account.bankDetails.bik}</p>
        </div>
      )}

      {account.lastSync && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
          Last synced: {format(account.lastSync, 'MMM d, yyyy HH:mm')}
        </div>
      )}
    </div>
  );
};

export default AccountCard;