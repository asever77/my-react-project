// src/components/Button

import React from 'react';
import clsx from 'clsx';
import { Icon } from './Icons';

//리터럴 유니온 타입: 미리 정해진 문자열만 허용
type ButtonColor = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large'; 
type ButtonRound = 'rounded' | 'square' | 'circular' ;
type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonShadow = 'none' | 'small' | 'medium' | 'large';
type ButtonIcon = 'none' | 'before' | 'after' | 'only';

// case 1: 아이콘이 없는 경우
type ButtonWithoutIconProps = {
  icon?: 'none'; // 'none'만 허용
  iconName?: never; // iconName은 절대 존재할 수 없음
};

// case 2: 아이콘이 있는 경우
type ButtonWithIconProps = {
  icon: 'before' | 'after' | 'only'; // 'none'을 제외한 값만 허용 (필수)
  iconName: keyof typeof Icon; // iconName은 필수로 존재해야 함
};


interface BaseButtonProps {
  /** 버튼 이름 */
  label: string;
  /** 클릭 시 실행할 함수 */
  onClick: () => void; // onClick  함수를 Props로 받습니다.
  /** 버튼 색상 */
  color?: ButtonColor; //필수값은 아니므로 ?를 붙입니다
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 버튼 모서리 스타일 */
  round?: ButtonRound;
  /** 버튼 스타일 변형 */
  variant?: ButtonVariant;
  /** 버튼 그림자 스타일 */
  shadow?: ButtonShadow;
}

export type ButtonProps = BaseButtonProps & (ButtonWithoutIconProps | ButtonWithIconProps);


const Button = ({ label, onClick, color = 'primary', size = 'medium', disabled = false, round = 'rounded', variant = 'filled', shadow = 'none', icon = 'none', iconName }: ButtonProps) => {
  const IconComponent = iconName ? Icon[iconName] : null;

  const getButtonColorStyles = (buttonColor: ButtonColor) => {
    switch (buttonColor) {
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

  const getButtonSizeStyles = (buttonSize: ButtonSize) => {
    switch (buttonSize) {
      case 'small':
        return 'text-sm py-1 px-2';
      case 'medium':
        return 'text-md py-2 px-4';
      case 'large':
        return 'text-lg py-3 px-6';
      default:
        return 'text-md py-2 px-4';
    }
  };

  const getButtonRoundStyles = (buttonRound: ButtonRound) => {
    switch (buttonRound) {
      case 'rounded':
        return 'rounded-md';
      case 'square':
        return 'rounded-none';
      case 'circular':
        return 'rounded-full';
      default:
        return 'rounded-md';
    }
  };

  const getButtonVariantStyles = (buttonVariant: ButtonVariant) => {
    switch (buttonVariant) {
      case 'filled':
        return 'bg-opacity-100 border-transparent';
      case 'outlined':
        return 'bg-transparent border border-gray-300';
      case 'text':
        return 'bg-transparent border-transparent';
      default:
        return 'bg-opacity-100 border-transparent';
    }
  };

  const getButtonShadowStyles = (buttonShadow: ButtonShadow) => {
    switch (buttonShadow) {
      case 'none':
        return 'shadow-none';
      case 'small':
        return 'shadow-sm';
      case 'medium':
        return 'shadow-md';
      case 'large':
        return 'shadow-lg';
      default:
        return 'shadow-none';
    }
  };

  const getButtonIconStyles = (buttonIcon: ButtonIcon) => {
    switch (buttonIcon) {
      case 'none':
        return '';
      case 'before':
        return 'flex-row';
      case 'after':
        return 'flex-row-reverse';
      case 'only':
        return 'justify-center';
      default:
        return '';
    }
  };

  const baseStyles = 'flex items-center transition-colors font-medium';
  const colorStyles = getButtonColorStyles(color);
  const sizeStyles = getButtonSizeStyles(size);
  const roundStyles = getButtonRoundStyles(round);
  const variantStyles = getButtonVariantStyles(variant);
  const shadowStyles = getButtonShadowStyles(shadow);
  const iconStyles = getButtonIconStyles(icon);

  const className = clsx(
    baseStyles,
    colorStyles,
    sizeStyles,
    roundStyles,
    variantStyles,
    shadowStyles,
    iconStyles,
    disabled && 'cursor-not-allowed opacity-50' // 비활성화 시 스타일
  );

  return (
    <button
      className={className}
      onClick={onClick} // 2. 받아온 onClick 함수를 버튼의 onClick 이벤트에 연결합니다.
      disabled={disabled}
    >
      <span className={icon === 'before' || icon === 'after' || icon === 'only' ? '' : 'hidden'}>
        {icon !== 'none' && IconComponent && <IconComponent className="w-4 h-4" />}
      </span>
      <span className={icon === 'only' ? 'sr-only' : ''}>{/* sr-only: 화면에 보이지 않지만 스크린 리더에는 읽히도록 함 */}
        {label}
      </span>
    </button>
  )
}

export default Button;