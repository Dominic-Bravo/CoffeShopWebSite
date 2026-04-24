import React from 'react';
import { hoverScale } from '../../styles/customStyle';

interface ButtonCardProps {
  label?: string;
  emoji?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ButtonCard({
  label,
  emoji,
  className = '',
  children,
}: ButtonCardProps) {
  return (
    <div className={`bg-green-50 rounded-full shadow-lg overflow-hidden flex items-center justify-center gap-2 ${hoverScale} ${className}`}>
      {label && <span className="text-lg font-semibold">{label}</span>}
      {emoji && <span className="text-4xl text-amber-900">{emoji}</span>}
      {children}
    </div>
  );
}