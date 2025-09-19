// src/components/Button

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon } from './Icons';

const buttonVariants = cva(
  "inline-flex items-center transition-colors whitespace-nowrap"
)
//리터럴 유니온 타입: 미리 정해진 문자열만 허용
type ButtonColor = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large'; 
type ButtonRound = 'rounded' | 'square' | 'circular' ;
type ButtonVariant = 'filled' | 'outlined' | 'text' | 'ghost';
type ButtonShadow = 'none' | 'small' | 'medium' | 'large';
type ButtonIcon = 'none' | 'before' | 'after' | 'only';

//필수값 아니면 ?를 붙입니다
interface BaseButtonProps {
  /** 버튼 이름 */
  label: string;
  /** 클릭 시 실행할 함수 */
  onClick: () => void;
  /** 버튼 색상 */
  color?: ButtonColor; 
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
  /** 버튼 아이콘 스타일 */
  icon?: ButtonIcon;
  /** 버튼 아이콘 이름 */
  iconName?: string; 
}

const Button = ({ 
  label, 
  onClick, 
  color = 'primary', 
  size = 'medium', 
  disabled = false, 
  round = 'rounded', 
  variant = 'filled', 
  shadow = 'none', 
  icon = 'none', 
  iconName 
}: BaseButtonProps) => {
  // icon size
  const IconComponent = iconName ? Icon[iconName] : null;
  const iconSizeMap = {
    'small': 'w-4 h-4', 
    'medium': 'w-6 h-6',
    'large': 'w-8 h-8', 
  }
  const iconsClass = iconSizeMap[size] || 'w-4 h-4';

  // font size
  const fontSizeMap = {
    'small': 'text-xs', 
    'medium': 'text-base',
    'large': 'text-lg', 
  }
  const fontClass = fontSizeMap[size] || 'text-base';

  // round size
  const roundSizeMap = {
    'small': round === 'rounded' ? 'rounded-xs' : '', 
    'medium': 'rounded-md',
    'large': 'rounded-lg', 
  }
  const roundClass = roundSizeMap[size] || 'rounded-md';

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

  const baseStyles = 'flex items-center transition-colors';
  const colorStyles = getButtonColorStyles(color);
  const sizeStyles = getButtonSizeStyles(size);
  const roundStyles = getButtonRoundStyles(round);
  const variantStyles = getButtonVariantStyles(variant);
  const shadowStyles = getButtonShadowStyles(shadow);
  const iconStyles = getButtonIconStyles(icon);

  const className = clsx(
    baseStyles,
    fontClass,
    colorStyles,
    sizeStyles,
    roundStyles,
    variantStyles,
    shadowStyles,
    iconStyles,
    roundClass,
    disabled && 'cursor-not-allowed opacity-50' // 비활성화 시 스타일
  );

  return (
    <button
      className={className}
      onClick={onClick} // 2. 받아온 onClick 함수를 버튼의 onClick 이벤트에 연결합니다.
      disabled={disabled}
    >
      <span className={icon !== 'none' ? '' : 'hidden'}>
        {icon !== 'none' && IconComponent && <IconComponent className={iconsClass} />}
      </span>
      <span className={icon === 'only' ? 'sr-only' : ''}>{/* sr-only: 화면에 보이지 않지만 스크린 리더에는 읽히도록 함 */}
        {label}
      </span>
    </button>
  )
}

export default Button;