import React from 'react';
import { Users, Activity, Clock } from 'lucide-react';
import type { AssemblyLine } from '../types/manufacturing';

interface AssemblyLineCardProps {
  line: AssemblyLine;
  onAssign: (lineId: string) => void;
}

const AssemblyLineCard: React.FC<AssemblyLineCardProps> = ({ line, onAssign }) => {
  const statusColors = {
    idle: 'gray',
    active: 'green',
    maintenance: 'yellow',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{line.name}</h3>
          <span
            className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-${
              statusColors[line.status]
            }-100 text-${statusColors[line.status]}-800 mt-1`}
          >
            {line.status.toUpperCase()}
          </span>
        </div>
        {line.status === 'idle' && (
          <button
            onClick={() => onAssign(line.id)}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Assign Order
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex items-center text-gray-600 mb-1">
            <Users size={16} className="mr-1" />
            <span className="text-sm">Workers</span>
          </div>
          <p className="font-semibold">{line.workers.length}</p>
        </div>
        <div>
          <div className="flex items-center text-gray-600 mb-1">
            <Activity size={16} className="mr-1" />
            <span className="text-sm">Efficiency</span>
          </div>
          <p className="font-semibold">{line.efficiency}%</p>
        </div>
      </div>

      {line.currentOrder && (
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-600 mb-1">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">Current Order</span>
          </div>
          <p className="font-medium">#{line.currentOrder}</p>
        </div>
      )}
    </div>
  );
};

export default AssemblyLineCard;