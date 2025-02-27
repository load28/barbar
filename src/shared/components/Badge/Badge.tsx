import React, { forwardRef } from 'react';
import { badge, BadgeColor, badgeContent, BadgePlacement, BadgeSize, BadgeVariant } from './Badge.css';
import { extractStyleProps, mergeStyles } from '@bb-shared/utils/styling';

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /** 뱃지 내용 (숫자나 텍스트) */
  content?: React.ReactNode;
  /** 뱃지 안에 들어갈 컨텐츠 */
  children?: React.ReactNode;
  /** 뱃지 색상 */
  color?: BadgeColor;
  /** 뱃지 변형 */
  variant?: BadgeVariant;
  /** 뱃지 크기 */
  size?: BadgeSize;
  /** 최대 숫자 (초과 시 99+ 형태로 표시) */
  max?: number;
  /** 점 모양으로 표시 */
  dot?: boolean;
  /** 표시 여부 */
  visible?: boolean;
  /** 독립형 뱃지 (children 없이 뱃지만 표시) */
  standalone?: boolean;
  /** 위치 */
  placement?: BadgePlacement;
  /** 가로 오프셋 */
  offsetX?: number;
  /** 세로 오프셋 */
  offsetY?: number;
  /** 뱃지 겹침 */
  overlap?: boolean;
}

/**
 * 뱃지 컴포넌트
 * - 숫자나 텍스트를 표시하는 작은 뱃지
 * - 다른 컴포넌트에 붙이거나 독립적으로 사용 가능
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    content,
    children,
    color = 'primary',
    variant = 'standard',
    size = 'md',
    max = 99,
    dot = false,
    visible = true,
    standalone = false,
    placement = 'top-right',
    offsetX,
    offsetY,
    overlap = false,
    ...rest
  } = props;

  const [className, style, restProps] = extractStyleProps(rest);

  // 표시할 내용 계산
  const displayContent = () => {
    if (dot) return null;

    if (content !== undefined) {
      if (typeof content === 'number' && content > max) {
        return `${max}+`;
      }
      return content;
    }

    return null;
  };

  // 위치 오프셋 스타일
  const offsetStyle: React.CSSProperties = {};
  if (offsetX !== undefined) {
    offsetStyle.transform = `translateX(${offsetX}px)`;
  }
  if (offsetY !== undefined) {
    const existingTransform = offsetStyle.transform ? offsetStyle.transform + ' ' : '';
    offsetStyle.transform = `${existingTransform}translateY(${offsetY}px)`;
  }

  // 독립형 뱃지인 경우 간단하게 렌더링
  if (standalone) {
    return (
      <div
        ref={ref}
        className={mergeStyles(
          badgeContent({
            color,
            variant,
            size,
            dot,
            visible
          }),
          className
        )}
        style={{ ...style, ...offsetStyle }}
        {...restProps}
      >
        {dot ? null : displayContent()}
      </div>
    );
  }

  // 뱃지가 보이지 않으면 children만 렌더링
  if (!visible) {
    return <>{children}</>;
  }

  return (
    <div
      ref={ref}
      className={mergeStyles(
        badge({
          placement,
          overlap
        }),
        className
      )}
      style={style}
      {...restProps}
    >
      {children}

      <span
        className={badgeContent({
          color,
          variant,
          size,
          dot,
          visible: true
        })}
        style={offsetStyle}
      >
        {dot ? null : displayContent()}
      </span>
    </div>
  );
});

Badge.displayName = 'Badge';

export default Badge;
