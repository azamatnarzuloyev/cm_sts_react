import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { ReportMetric } from '../types/reports';

interface MetricCardProps {
  metric: ReportMetric;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, icon, prefix = '', suffix = '' }) => {
  const getTrendIcon = () => {
    switch (metric.trend) {
      case 'up':
        return <TrendingUp className="text-green-500" size={16} />;
      case 'down':
        return <TrendingDown className="text-red-500" size={16} />;
      default:
        return <Minus className="text-gray-500" size={16} />;
    }
  };

  const getTrendColor = () => {
    switch (metric.trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500">{metric.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {prefix}
            {typeof metric.value === 'number' 
              ? metric.value.toLocaleString()
              : metric.value}
            {suffix}
          </p>
        </div>
        <div className="p-2 bg-blue-100 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="flex items-center text-sm">
        {getTrendIcon()}
        <span className={`ml-1 font-medium ${getTrendColor()}`}>
          {metric.change >= 0 ? '+' : ''}{metric.change}%
        </span>
        <span className="text-gray-500 ml-2">vs last period</span>
      </div>
    </div>
  );
};

export default MetricCard;