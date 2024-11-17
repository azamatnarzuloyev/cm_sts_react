export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  birthDate?: Date;
  registrationDate: Date;
  segment: 'new' | 'regular' | 'vip' | 'inactive';
  bonusPoints: number;
  totalSpent: number;
  lastPurchase?: Date;
  address?: string;
  notes?: string;
}

export interface LoyaltyProgram {
  id: string;
  name: string;
  type: 'points' | 'cashback' | 'tier';
  pointsPerRuble?: number;
  cashbackPercent?: number;
  tiers?: LoyaltyTier[];
  active: boolean;
}

export interface LoyaltyTier {
  name: string;
  minSpent: number;
  bonusMultiplier: number;
  benefits: string[];
}

export interface CustomerSegment {
  id: string;
  name: string;
  criteria: {
    minPurchases?: number;
    minSpent?: number;
    lastPurchaseWithin?: number; // days
    birthMonth?: number;
  };
  customers: number;
}

export interface MarketingCampaign {
  id: string;
  name: string;
  type: 'sms' | 'email' | 'push';
  segment: string;
  message: string;
  schedule: Date;
  status: 'draft' | 'scheduled' | 'sent' | 'cancelled';
  stats?: {
    sent: number;
    delivered: number;
    opened?: number;
    clicked?: number;
  };
}