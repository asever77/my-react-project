// src/components/Counter.tsx

import React, { useState } from 'react';
import Button from '../components/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
      <p className='text-xl font-bold mb-4'>현재 카운트: {count}</p>
      <Button label='+1 증가' onClick={incrementCount} />
    </div>
  )
}

export default Counter;