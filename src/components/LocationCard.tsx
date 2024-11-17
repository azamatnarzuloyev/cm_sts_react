import React from 'react';
import { Box, Package } from 'lucide-react';
import type { Location } from '../types/warehouse';

interface LocationCardProps {
  location: Location;
  onView: (id: string) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, onView }) => {
  const occupancyPercentage = (location.occupied / location.capacity) * 100;
  const occupancyColor = 
    occupancyPercentage >= 90 ? 'red' :
    occupancyPercentage >= 70 ? 'yellow' :
    'green';

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
          <span className="text-sm text-gray-500 capitalize">{location.type}</span>
        </div>
        <button
          onClick={() => onView(location.id)}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          View Items
        </button>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Capacity Usage</span>
          <span>{occupancyPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-${occupancyColor}-500 transition-all duration-300`}
            style={{ width: `${occupancyPercentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Total Capacity</p>
          <div className="flex items-center">
            <Box size={18} className="text-gray-400 mr-2" />
            <span className="text-lg font-semibold">{location.capacity}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Items Stored</p>
          <div className="flex items-center">
            <Package size={18} className="text-gray-400 mr-2" />
            <span className="text-lg font-semibold">{location.items.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;