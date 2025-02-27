import React, { forwardRef } from 'react';
import {
  input,
  inputWrapper,
  inputLabel,
  errorMessage,
  helperText,
  prefixIconContainer,
  suffixIconContainer,
  ValidationState,
  InputSize
} from './Input.css';
import { extractStyleProps, mergeStyles } from '@bb/shared/utils/styling';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** 입력 필드 라벨 */
  label?: string;
  /** 입력 필드 크기 */
  size?: InputSize;
  /** 유효성 검사 상태 */
  validation?: ValidationState;
  /** 에러 메시지 */
  errorText?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 접두 아이콘 */
  prefix?: React.ReactNode;
  /** 접미 아이콘 */
  suffix?: React.ReactNode;
  /** 전체 너비 설정 */
  fullWidth?: boolean;
  /** 컨테이너 className */
  wrapperClassName?: string;
  /** 라벨 className */
  labelClassName?: string;
  /** 입력 필드 참조 */
  inputRef?: React.Ref<HTMLInputElement>;
}

/**
 * 기본 입력 필드 컴포넌트
 */
export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    label,
    size = 'md',
    validation = 'none',
    errorText,
    helperText: helperTextProp,
    prefix,
    suffix,
    fullWidth = true,
    wrapperClassName,
    labelClassName,
    inputRef,
    id,
    disabled,
    ...rest
  } = props;

  const [className, style, restProps] = extractStyleProps(rest);
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div ref={ref} className={mergeStyles(inputWrapper({ fullWidth }), wrapperClassName)}>
      {label && (
        <label htmlFor={inputId} className={mergeStyles(inputLabel, labelClassName)}>
          {label}
        </label>
      )}

      <div className="relative">
        {prefix && <div className={prefixIconContainer}>{prefix}</div>}

        <input
          id={inputId}
          ref={inputRef as React.RefObject<HTMLInputElement>}
          disabled={disabled}
          className={mergeStyles(
            input({
              size,
              validation,
              hasPrefixIcon: !!prefix,
              hasSuffixIcon: !!suffix,
              disabled: !!disabled,
              fullWidth
            }),
            className
          )}
          style={style}
          {...restProps}
        />

        {suffix && <div className={suffixIconContainer}>{suffix}</div>}
      </div>

      {validation === 'invalid' && errorText && <div className={errorMessage}>{errorText}</div>}

      {helperTextProp && validation !== 'invalid' && <div className={helperText}>{helperTextProp}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
