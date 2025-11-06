
import React from 'react';

interface DashboardCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon: Icon, title, value, color }) => {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-md overflow-hidden">
      <div className="flex items-center">
        <div className={`p-3 rounded-full mr-4 ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
       <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10 ${color}`}></div>
    </div>
  );
};

export default DashboardCard;
