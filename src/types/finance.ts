export interface Transaction {
  id: string;
  date: Date;
  type: 'income' | 'expense' | 'transfer';
  amount: number;
  category: string;
  account: string;
  description: string;
  status: 'pending' | 'completed' | 'cancelled';
  reference?: string;
  attachments?: string[];
  metadata?: {
    project?: string;
    customer?: string;
    invoice?: string;
  };
}

export interface Account {
  id: string;
  name: string;
  type: 'cash' | 'bank' | 'card';
  currency: string;
  balance: number;
  lastSync?: Date;
  bankDetails?: {
    bankName: string;
    accountNumber: string;
    bik: string;
    correspondentAccount: string;
  };
}

export interface FinancialReport {
  period: {
    start: Date;
    end: Date;
  };
  summary: {
    income: number;
    expenses: number;
    profit: number;
    balance: number;
  };
  byCategory: {
    category: string;
    amount: number;
    percentage: number;
  }[];
  byProject: {
    project: string;
    income: number;
    expenses: number;
    profit: number;
  }[];
}

export interface Budget {
  id: string;
  name: string;
  period: {
    start: Date;
    end: Date;
  };
  categories: {
    category: string;
    planned: number;
    actual: number;
  }[];
  total: {
    planned: number;
    actual: number;
  };
}