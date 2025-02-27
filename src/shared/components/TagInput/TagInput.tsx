import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import {
  tagInputContainer,
  tagInputWrapper,
  tagInputField,
  tagList,
  tagInputLabel,
  TagInputSize,
  TagInputVariant,
  helperText,
  errorText
} from './TagInput.css';
import { extractStyleProps, mergeStyles } from '@bb/shared/utils/styling';
import Tag from '../Tag';

export interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** 현재 태그 목록 */
  tags: string[];
  /** 태그 변경 핸들러 */
  onChange: (tags: string[]) => void;
  /** 입력 필드 라벨 */
  label?: string;
  /** 입력 필드 크기 */
  size?: TagInputSize;
  /** 입력 필드 변형 */
  variant?: TagInputVariant;
  /** 태그 구분자 (기본값: Enter, 쉼표) */
  delimiters?: string[];
  /** 태그 색상 */
  tagColor?: string;
  /** 태그 최대 개수 */
  maxTags?: number;
  /** 유효성 검사 오류 메시지 */
  errorText?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 태그 추가 전 검증 함수 */
  validateTag?: (tag: string) => boolean;
  /** 태그 중복 허용 여부 */
  allowDuplicates?: boolean;
  /** 자동 포커스 */
  autoFocus?: boolean;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 입력 비활성화 */
  disabled?: boolean;
  /** 입력 필드 참조 */
  inputRef?: React.Ref<HTMLInputElement>;
  /** 태그 포맷팅 함수 */
  formatTag?: (tag: string) => string;
}

/**
 * 태그 입력 컴포넌트
 * - 해시태그나 키워드를 입력하고 관리하는 컴포넌트
 * - 엔터 키나 쉼표로 태그 추가 가능
 */
export const TagInput = forwardRef<HTMLDivElement, TagInputProps>(
  (props, ref) => {
    const {
      tags,
      onChange,
      label,
      size = 'md',
      variant = 'outlined',
      delimiters = ['Enter', ',', ' '],
      tagColor = 'primary',
      maxTags,
      errorText: errorTextProp,
      helperText: helperTextProp,
      validateTag,
      allowDuplicates = false,
      autoFocus = false,
      placeholder = '태그 입력...',
      disabled = false,
      inputRef,
      formatTag = (tag) => tag,
      ...rest
    } = props;

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const internalInputRef = useRef<HTMLInputElement>(null);
    const [className, style, restProps] = extractStyleProps(rest);

    // 외부 ref와 내부 ref 통합
    const handleRef = (element: HTMLInputElement | null) => {
      internalInputRef.current = element;

      if (inputRef) {
        if (typeof inputRef === 'function') {
          inputRef(element);
        } else {
          (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = element;
        }
      }
    };

    // 태그 추가 함수
    const addTag = useCallback((tag: string) => {
      // 태그 값 정리 (공백 제거, 중복 # 제거)
      let newTag = tag.trim();

      // 빈 태그 무시
      if (!newTag) return;

      // # 접두사 처리
      if (newTag.startsWith('#')) {
        newTag = newTag.substring(1);
      }

      // 빈 태그 다시 확인
      if (!newTag) return;

      // 태그 포맷팅 적용
      newTag = formatTag(newTag);

      // 최대 태그 수 확인
      if (maxTags && tags.length >= maxTags) {
        setError(`최대 ${maxTags}개의 태그만 추가할 수 있습니다`);
        return;
      }

      // 중복 확인
      if (!allowDuplicates && tags.includes(newTag)) {
        setError('이미 추가된 태그입니다');
        return;
      }

      // 유효성 검사
      if (validateTag && !validateTag(newTag)) {
        setError('유효하지 않은 태그입니다');
        return;
      }

      // 태그 추가
      onChange([...tags, newTag]);
      setInputValue('');
      setError(null);
    }, [tags, onChange, maxTags, allowDuplicates, validateTag, formatTag]);

    // 태그 삭제 함수
    const removeTag = useCallback((index: number) => {
      const newTags = [...tags];
      newTags.splice(index, 1);
      onChange(newTags);
      setError(null);
    }, [tags, onChange]);

    // 키 입력 처리
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (delimiters.includes(e.key)) {
        e.preventDefault();
        addTag(inputValue);
      } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
        // 입력값이 없을 때 백스페이스를 누르면 마지막 태그 삭제
        removeTag(tags.length - 1);
      }
    }, [inputValue, addTag, delimiters, removeTag, tags.length]);

    // 입력값 변경 처리
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // 쉼표 입력 시 태그 추가
      if (value.endsWith(',')) {
        addTag(value.slice(0, -1));
      } else {
        setInputValue(value);
        setError(null);
      }
    }, [addTag]);

    // 포커스 처리
    useEffect(() => {
      if (autoFocus && internalInputRef.current) {
        internalInputRef.current.focus();
      }
    }, [autoFocus]);

    // 오류 메시지 처리
    const displayErrorText = errorTextProp || error;

    return (
      <div
        ref={ref}
        className={mergeStyles(tagInputContainer, className)}
        style={style}
      >
        {label && (
          <label className={tagInputLabel}>{label}</label>
        )}

        <div
          className={tagInputWrapper({
            size,
            variant,
            error: !!displayErrorText,
            disabled
          })}
        >
          <div className={tagList}>
            {tags.map((tag, index) => (
              <Tag
                key={`${tag}-${index}`}
                label={tag.startsWith('#') ? tag : `#${tag}`}
                color={tagColor as any}
                variant="light"
                size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
                closable={!disabled}
                onClose={() => removeTag(index)}
              />
            ))}

            <input
              ref={handleRef}
              type="text"
              className={tagInputField}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={tags.length === 0 ? placeholder : ''}
              disabled={disabled || (maxTags !== undefined && tags.length >= maxTags)}
              {...restProps}
            />
          </div>
        </div>

        {displayErrorText && (
          <div className={errorText}>{displayErrorText}</div>
        )}

        {helperTextProp && !displayErrorText && (
          <div className={helperText}>{helperTextProp}</div>
        )}
      </div>
    );
  }
);

TagInput.displayName = 'TagInput';

export default TagInput;
