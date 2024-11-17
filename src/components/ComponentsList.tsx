import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import type { Component } from '../types/manufacturing';

interface ComponentsListProps {
  components: Component[];
  onOrder: (componentId: string) => void;
}

const ComponentsList: React.FC<ComponentsListProps> = ({ components, onOrder }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Required Components</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {components.map((component) => {
          const shortage = component.required - component.available;
          const isShortage = shortage > 0;

          return (
            <div key={component.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{component.name}</h4>
                  <p className="text-sm text-gray-500">SKU: {component.sku}</p>
                </div>
                {isShortage ? (
                  <div className="flex items-center text-amber-500">
                    <AlertTriangle size={16} className="mr-1" />
                    <span className="text-sm font-medium">Shortage</span>
                  </div>
                ) : (
                  <div className="flex items-center text-green-500">
                    <CheckCircle size={16} className="mr-1" />
                    <span className="text-sm font-medium">In Stock</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-2">
                <div>
                  <p className="text-sm text-gray-500">Required</p>
                  <p className="font-medium">{component.required}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available</p>
                  <p className="font-medium">{component.available}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cost</p>
                  <p className="font-medium">₽{component.cost.toFixed(2)}</p>
                </div>
              </div>

              {isShortage && (
                <div className="mt-2">
                  <button
                    onClick={() => onOrder(component.id)}
                    className="w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    Order {shortage} units
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentsList;