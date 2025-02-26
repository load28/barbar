import React, { forwardRef } from 'react';
import { button, ButtonSize, ButtonVariant } from '@bb/shared/components/Button/Button.css';
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
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
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

    const isDisabled = disabled || (isLoading && disableOnLoading);

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={mergeStyles(
          button({ variant, size, fullWidth, iconOnly, disabled: isDisabled }),
          className
        )}
        style={style}
        {...restProps}
      >
        {isLoading && (
          <span className="inline-block animate-spin mr-2">⚪</span> // 간단한 로딩 아이콘
        )}

        {leftIcon && !isLoading && (
          <span className="mr-2">{leftIcon}</span>
        )}

        {isLoading && loadingText ? loadingText : children}

        {rightIcon && !isLoading && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
