import React, { forwardRef } from 'react';
import { tag, tagClose, TagColor, tagIcon, tagLabel, TagSize, TagVariant } from './Tag.css';
import { extractStyleProps, mergeStyles } from '@bb-shared/utils/styling';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 태그 라벨 */
  label: string;
  /** 태그 색상 */
  color?: TagColor;
  /** 태그 변형 */
  variant?: TagVariant;
  /** 태그 크기 */
  size?: TagSize;
  /** 태그 앞에 표시할 아이콘 */
  icon?: React.ReactNode;
  /** 태그 삭제 가능 여부 */
  closable?: boolean;
  /** 삭제 아이콘 커스터마이징 */
  closeIcon?: React.ReactNode;
  /** 삭제 버튼 클릭 시 이벤트 핸들러 */
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 링크로 사용 시 href */
  href?: string;
  /** 태그 비활성화 */
  disabled?: boolean;
  /** 태그 클릭 이벤트 */
  onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;
}

/**
 * 태그 컴포넌트
 * - 해시태그, 카테고리, 키워드 등을 표시하는 데 사용
 * - 클릭 가능하고 삭제 가능한 옵션 제공
 */
export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    label,
    color = 'default',
    variant = 'filled',
    size = 'md',
    icon,
    closable = false,
    closeIcon,
    onClose,
    href,
    disabled = false,
    onClick,
    ...rest
  } = props;

  const [className, style, restProps] = extractStyleProps(rest);

  // 삭제 버튼 클릭 핸들러
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose?.(e);
  };

  // 태그 클릭 핸들러
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    onClick?.(e);
  };

  // 기본 태그 요소
  const TagComponent = (
    <div
      ref={ref}
      className={mergeStyles(
        tag({
          color,
          variant,
          size,
          disabled,
          clickable: !!onClick || !!href
        }),
        className
      )}
      style={style}
      onClick={handleClick}
      {...restProps}
    >
      {icon && <span className={tagIcon}>{icon}</span>}
      <span className={tagLabel}>{label}</span>
      {closable && !disabled && (
        <div className={tagClose} onClick={handleClose} role="button" aria-label="태그 삭제">
          {closeIcon || (
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          )}
        </div>
      )}
    </div>
  );

  // href가 제공된 경우 링크로 렌더링
  if (href && !disabled) {
    return (
      <a href={href} style={{ textDecoration: 'none' }} onClick={handleClick}>
        {TagComponent}
      </a>
    );
  }

  return TagComponent;
});

Tag.displayName = 'Tag';

export default Tag;
