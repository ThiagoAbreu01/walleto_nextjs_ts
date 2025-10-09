// Global type definitions for the Walleto application

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Wallet {
  id: string;
  userId: string;
  name: string;
  balance: number;
  currency: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  walletId: string;
  type: 'income' | 'expense' | 'transfer';
  amount: number;
  description: string;
  category?: string;
  date: Date;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: 'income' | 'expense';
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  name: string;
  confirmPassword: string;
}

export interface WalletForm {
  name: string;
  currency: string;
  initialBalance?: number;
}

export interface TransactionForm {
  type: Transaction['type'];
  amount: number;
  description: string;
  category?: string;
  walletId: string;
  date?: Date;
}