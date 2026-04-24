import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  emoji?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  image,
  price,
  emoji,
  className = '',
  children,
}: CardProps) {
  return (
    <div className={`bg-green-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-500 ease-out transition ${className}`}>
      {image && (
        <img
          src={image}
          alt={title || 'Card image'}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-amber-900 mt-1">{description}</p>}
        {price && <p className="mt-3 font-bold text-orange-400">₱{price}</p>}
        {emoji && <span className="text-4xl text-amber-900">{emoji}</span>}
        {children}
      </div>
    </div>
  );
}