import React from 'react';

interface ReportChartProps {
  title: string;
  data: {
    label: string;
    value: number;
    percentage?: number;
  }[];
  type: 'bar' | 'pie';
}

const ReportChart: React.FC<ReportChartProps> = ({ title, data, type }) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      
      {type === 'bar' ? (
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-900">{item.label}</span>
                <span className="text-gray-500">₽{item.value.toLocaleString()}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative pt-[100%]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center">
              {data.map((item, index) => (
                <div key={index} className="flex items-center w-full mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                  <span className="text-sm text-gray-900">{item.label}</span>
                  <span className="text-sm text-gray-500 ml-auto">
                    {item.percentage?.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportChart;