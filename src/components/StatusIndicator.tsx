
import React from 'react';
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  label: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  detail: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  label, 
  status, 
  detail, 
  icon, 
  isLoading = false 
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'bg-quantum-success';
      case 'error':
        return 'bg-quantum-danger';
      case 'processing':
        return 'bg-quantum-blue animate-pulse';
      default:
        return 'bg-quantum-light/30';
    }
  };

  return (
    <div className="flex items-center space-x-3 p-2 rounded-md bg-quantum-blue/5">
      <div className={cn(
        "w-2 h-2 rounded-full",
        isLoading ? 'bg-quantum-blue animate-pulse' : getStatusColor()
      )} />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-quantum-blue">{icon}</span>}
          <span className="font-medium text-sm text-quantum-light">{label}</span>
        </div>
        <span className="text-xs text-quantum-light/70">
          {isLoading ? 'Processing...' : detail}
        </span>
      </div>
    </div>
  );
};

export default StatusIndicator;
