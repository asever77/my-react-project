// src/components/Button

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void; // onClick  함수를 Props로 받습니다.
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="px-14 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      onClick={onClick} // 2. 받아온 onClick 함수를 버튼의 onClick 이벤트에 연결합니다.
    >
      {label}
    </button>
  )
}

export default Button;