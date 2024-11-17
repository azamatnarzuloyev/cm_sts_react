export interface ManufacturingOrder {
  id: string;
  number: string;
  status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
  product: {
    id: string;
    name: string;
    sku: string;
    quantity: number;
  };
  components: Component[];
  startDate: Date;
  endDate?: Date;
  laborCost: number;
  materialCost: number;
  totalCost: number;
  assignedTo?: string[];
  notes?: string;
}

export interface Component {
  id: string;
  name: string;
  sku: string;
  required: number;
  available: number;
  cost: number;
  supplier?: string;
  leadTime?: number;
}

export interface AssemblyLine {
  id: string;
  name: string;
  status: 'idle' | 'active' | 'maintenance';
  currentOrder?: string;
  capacity: number;
  efficiency: number;
  workers: Worker[];
}

export interface Worker {
  id: string;
  name: string;
  role: 'operator' | 'supervisor' | 'quality';
  shift: 'morning' | 'evening' | 'night';
  assignedLine?: string;
  specializations: string[];
}

export interface MaterialRequirement {
  componentId: string;
  name: string;
  required: number;
  available: number;
  shortage: number;
  estimatedCost: number;
  suppliers: {
    id: string;
    name: string;
    price: number;
    leadTime: number;
  }[];
}