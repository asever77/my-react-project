// src/components/Button

import React from 'react';
import clsx from 'clsx';

//리터럴 유니온 타입: 미리 정해진 문자열만 허용
type ButtonType = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  label: string;
  onClick: () => void; // onClick  함수를 Props로 받습니다.
  type?: ButtonType; //필수값은 아니므로 ?를 붙입니다
  disabled?: boolean;
}

const Button = ({ label, onClick, type = 'primary', disabled = false }: ButtonProps) => {
  const getButtonStyles = (buttonType: ButtonType) => {
    switch (buttonType) {
      case 'primary' :
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'secondary':
        return 'bg-gray-300 hover:bg-gray-400 text-gray-800';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
  };

  const baseStyles = 'px-4 py-2 rounded-md transition-colors font-medium';
  const typeStyles = getButtonStyles(type);

  const className = clsx(
    baseStyles,
    typeStyles,
    disabled && 'cursor-not-allowed opacity-50' // 비활성화 시 스타일
  );

  return (
    <button
      className={className}
      onClick={onClick} // 2. 받아온 onClick 함수를 버튼의 onClick 이벤트에 연결합니다.
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;