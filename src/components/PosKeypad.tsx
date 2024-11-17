import React from 'react';
import { Delete } from 'lucide-react';

interface PosKeypadProps {
  onNumberClick: (num: number) => void;
  onDeleteClick: () => void;
  onEnterClick: () => void;
}

const PosKeypad: React.FC<PosKeypadProps> = ({ onNumberClick, onDeleteClick, onEnterClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-sm">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <button
          key={num}
          onClick={() => onNumberClick(num)}
          className="p-4 text-xl font-semibold bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {num}
        </button>
      ))}
      <button
        onClick={onDeleteClick}
        className="p-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
      >
        <Delete className="mx-auto" size={24} />
      </button>
      <button
        onClick={() => onNumberClick(0)}
        className="p-4 text-xl font-semibold bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
      >
        0
      </button>
      <button
        onClick={onEnterClick}
        className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Enter
      </button>
    </div>
  );
};

export default PosKeypad;