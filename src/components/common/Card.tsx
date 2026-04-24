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
  const defaultImage = (
    <div className="h-40 w-full bg-brown-100 flex items-center justify-center">
      <svg className="w-16 h-16 text-brown-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
  );

  return (
    <div className={`bg-green-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-500 ease-out transition ${className}`}>
      {image ? (
        <img
          src={image}
          alt={title || 'Card image'}
          className="h-40 w-full object-cover"
        />
      ) : (
        defaultImage
      )}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-brown-900 mt-1">{description}</p>}
        {price && <p className="mt-3 font-bold text-orange-400">₱{price}</p>}
        {emoji && <span className="text-4xl text-brown-900">{emoji}</span>}
        {children}
      </div>
    </div>
  );
}