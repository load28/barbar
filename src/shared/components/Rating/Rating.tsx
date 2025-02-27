import React, { forwardRef, useState } from 'react';
import {
  ratingContainer,
  ratingLabel,
  ratingStarsContainer,
  ratingStarBase,
  ratingStarFilled,
  ratingStarEmpty,
  ratingTextContainer,
  ratingValue,
  ratingMax,
  ratingBarContainer,
  ratingBarFill,
  RatingVariant,
  RatingSize,
  ratingBarLabel,
  ratingBarValueText,
  barStyle,
  ratingIconContainer
} from './Rating.css';
import { extractStyleProps, mergeStyles } from '@bb/shared/utils/styling';

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** 현재 평점 값 */
  value: number;
  /** 최대 평점 값 */
  maxValue?: number;
  /** 읽기 전용 모드 */
  readOnly?: boolean;
  /** 평점 크기 */
  size?: RatingSize;
  /** 평점 표시 방식 */
  variant?: RatingVariant;
  /** 평점 라벨 */
  label?: string;
  /** 평점 색상 커스텀 */
  color?: string;
  /** 평점 변경 콜백 */
  onChange?: (value: number) => void;
  /** 소수점 자리수 */
  precision?: number;
  /** 아이콘 커스텀 */
  icon?: React.ReactNode;
  /** 빈 아이콘 커스텀 */
  emptyIcon?: React.ReactNode;
}

/**
 * 평점 표시 컴포넌트
 * - 별점, 숫자, 바 형태로 평점을 표시할 수 있습니다
 * - 인터랙티브 모드와 읽기 전용 모드를 지원합니다
 */
export const Rating = forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
  const {
    value,
    maxValue = 5,
    readOnly = false,
    size = 'md',
    variant = 'star',
    label,
    color,
    onChange,
    precision = 1,
    icon,
    emptyIcon,
    ...rest
  } = props;

  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [className, style, restProps] = extractStyleProps(rest);

  // 내부적으로 사용할 값 (호버 시 임시 값 표시)
  const displayValue = hoverValue !== null ? hoverValue : value;

  // 소수점 자리수에 맞게 반올림
  const roundedValue = Math.round(displayValue * Math.pow(10, precision)) / Math.pow(10, precision);

  // 백분율 계산 (바 형태에서 사용)
  const percentage = (roundedValue / maxValue) * 100;

  // 커스텀 색상 스타일
  const colorStyle = color ? ({ color, '--rating-color': color } as React.CSSProperties) : {};

  // 별점 클릭 핸들러
  const handleStarClick = (newValue: number) => {
    if (!readOnly && onChange) {
      onChange(newValue);
    }
  };

  // 별 아이콘 렌더링
  const renderStar = (starIndex: number) => {
    // 1-based index로 변환
    const index = starIndex + 1;

    // 별이 채워지는 정도 계산 (1: 완전히 채워짐, 0: 비어있음, 0.5: 절반)
    const fillPercentage = Math.max(0, Math.min(1, roundedValue - starIndex));

    return (
      <span
        key={`star-${index}`}
        className={ratingStarBase}
        onMouseEnter={() => !readOnly && setHoverValue(index)}
        onMouseLeave={() => !readOnly && setHoverValue(null)}
        onClick={() => handleStarClick(index)}
        style={{ cursor: readOnly ? 'default' : 'pointer' }}
      >
        {fillPercentage > 0 ? (
          <span
            className={ratingStarFilled}
            style={{
              clipPath: fillPercentage < 1 ? `inset(0 ${100 - fillPercentage * 100}% 0 0)` : undefined,
              ...colorStyle
            }}
          >
            {icon || (
              <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </span>
        ) : null}

        <span className={ratingStarEmpty}>
          {emptyIcon || (
            <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
        </span>
      </span>
    );
  };

  // 바 형태 렌더링
  const renderBar = () => (
    <div className={ratingBarContainer}>
      {label && <div className={ratingBarLabel}>{label}</div>}
      <div className={barStyle}>
        <div
          className={ratingBarFill}
          style={{
            width: `${percentage}%`,
            backgroundColor: color || undefined
          }}
        />
      </div>
      <div className={ratingBarValueText}>
        {roundedValue.toFixed(precision)} / {maxValue}
      </div>
    </div>
  );

  // 숫자 형태 렌더링
  const renderNumber = () => (
    <div className={ratingTextContainer}>
      {label && <span className={ratingLabel}>{label}</span>}
      <span className={ratingValue} style={colorStyle}>
        {roundedValue.toFixed(precision)}
      </span>
      <span className={ratingMax}>/ {maxValue}</span>
    </div>
  );

  // 스타 형태 렌더링
  const renderStars = () => (
    <>
      {label && <div className={ratingLabel}>{label}</div>}
      <div className={ratingStarsContainer}>
        {Array.from({ length: maxValue }, (_, i) => renderStar(i))}
        {!readOnly && (
          <span className={ratingTextContainer}>
            <span className={ratingValue}>{roundedValue.toFixed(precision)}</span>
            <span className={ratingMax}>/ {maxValue}</span>
          </span>
        )}
      </div>
    </>
  );

  // 아이콘 형태 렌더링
  const renderIcon = () => (
    <div className={ratingIconContainer}>
      {label && <span className={ratingLabel}>{label}</span>}
      <div className={ratingValue} style={colorStyle}>
        {icon || (
          <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        )}
        <span>{roundedValue.toFixed(precision)}</span>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className={mergeStyles(ratingContainer({ size, variant }), className)}
      style={{ ...style, ...colorStyle }}
      {...restProps}
    >
      {variant === 'star' && renderStars()}
      {variant === 'number' && renderNumber()}
      {variant === 'bar' && renderBar()}
      {variant === 'icon' && renderIcon()}
    </div>
  );
});

Rating.displayName = 'Rating';

export default Rating;
