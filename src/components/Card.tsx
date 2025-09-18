// src/components/Card.tsx

import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white p-6'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      <p className='text-gray-700 text-base'>
        {content}
      </p>
    </div>
  )
}

export default Card;