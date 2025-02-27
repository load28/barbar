import React, { forwardRef, useState } from 'react';
import {
  button,
  ButtonSize,
  ButtonVariant,
  focusVisibleStyle,
  leftIconContainer,
  primaryButtonActive,
  primaryButtonHover,
  rightIconContainer,
  secondaryButtonActive,
  secondaryButtonHover,
  spinnerContainer,
  tertiaryButtonActive,
  tertiaryButtonHover
} from '@bb/shared/components/Button/Button.css';
import { extractStyleProps, mergeStyles } from '@bb/shared/utils/styling';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 스타일 종류 */
  variant?: ButtonVariant;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 버튼을 꽉 차게 표시할지 여부 */
  fullWidth?: boolean;
  /** 아이콘만 있는 버튼인지 여부 */
  iconOnly?: boolean;
  /** 왼쪽 아이콘 */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  /** 로딩 상태 */
  isLoading?: boolean;
  /** 로딩 텍스트 */
  loadingText?: string;
  /** 자동 비활성화 (로딩 중) */
  disableOnLoading?: boolean;
  /** 버튼 내용 */
  children?: React.ReactNode;
}

/**
 * 기본 버튼 컴포넌트
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    iconOnly = false,
    leftIcon,
    rightIcon,
    isLoading = false,
    loadingText,
    disableOnLoading = true,
    children,
    type = 'button',
    disabled,
    ...rest
  } = props;

  const [className, style, restProps] = extractStyleProps(rest);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isDisabled = disabled || (isLoading && disableOnLoading);

  // 호버 스타일 결정
  let hoverClass = '';
  if (isHovered && !isDisabled) {
    if (variant === 'primary') hoverClass = primaryButtonHover;
    else if (variant === 'secondary') hoverClass = secondaryButtonHover;
    else if (variant === 'tertiary') hoverClass = tertiaryButtonHover;
  }

  // 활성 스타일 결정
  let activeClass = '';
  if (isActive && !isDisabled) {
    if (variant === 'primary') activeClass = primaryButtonActive;
    else if (variant === 'secondary') activeClass = secondaryButtonActive;
    else if (variant === 'tertiary') activeClass = tertiaryButtonActive;
  }

  // 포커스 스타일
  const focusClass = isFocused ? focusVisibleStyle : '';

  // 간단한 로딩 스피너 컴포넌트
  const LoadingSpinner = () => (
    <div className={spinnerContainer}>
      <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="32"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={`${button({ variant, size, fullWidth, iconOnly, disabled: isDisabled })} ${hoverClass} ${activeClass} ${focusClass} ${className || ''}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...restProps}
    >
      {isLoading && <LoadingSpinner />}

      {leftIcon && !isLoading && <span className={leftIconContainer}>{leftIcon}</span>}

      {isLoading && loadingText ? loadingText : children}

      {rightIcon && !isLoading && <span className={rightIconContainer}>{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
