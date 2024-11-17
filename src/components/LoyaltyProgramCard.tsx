import React from 'react';
import { Gift, Star, Percent, Trophy } from 'lucide-react';
import type { LoyaltyProgram } from '../types/crm';

interface LoyaltyProgramCardProps {
  program: LoyaltyProgram;
  onToggle: (id: string) => void;
  onEdit: (program: LoyaltyProgram) => void;
}

const LoyaltyProgramCard: React.FC<LoyaltyProgramCardProps> = ({
  program,
  onToggle,
  onEdit,
}) => {
  const icons = {
    points: Star,
    cashback: Percent,
    tier: Trophy,
  };

  const Icon = icons[program.type];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg ${program.active ? 'bg-green-100' : 'bg-gray-100'}`}>
            <Icon
              size={24}
              className={program.active ? 'text-green-600' : 'text-gray-400'}
            />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">{program.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{program.type} Program</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={program.active}
            onChange={() => onToggle(program.id)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="space-y-4">
        {program.type === 'points' && program.pointsPerRuble && (
          <div>
            <p className="text-sm text-gray-500">Earning Rate</p>
            <p className="font-medium">{program.pointsPerRuble} points per ₽1</p>
          </div>
        )}

        {program.type === 'cashback' && program.cashbackPercent && (
          <div>
            <p className="text-sm text-gray-500">Cashback Rate</p>
            <p className="font-medium">{program.cashbackPercent}% on all purchases</p>
          </div>
        )}

        {program.type === 'tier' && program.tiers && (
          <div>
            <p className="text-sm text-gray-500 mb-2">Tiers</p>
            <div className="space-y-2">
              {program.tiers.map((tier, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded"
                >
                  <div>
                    <p className="font-medium">{tier.name}</p>
                    <p className="text-sm text-gray-500">
                      Min spend: ₽{tier.minSpent.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    {tier.bonusMultiplier}x points
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => onEdit(program)}
        className="mt-4 w-full py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
      >
        Edit Program
      </button>
    </div>
  );
};

export default LoyaltyProgramCard;