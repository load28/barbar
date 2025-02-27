// src/shared/components/ui/Card/Card.tsx
import React, { forwardRef, useState } from 'react';
import {
  card,
  cardHeader,
  cardTitle,
  cardSubtitle,
  cardContent,
  cardFooter,
  cardImage,
  CardVariant,
  CardPadding,
  cardHeaderContainer,
  cardHeaderContent,
  cardHeaderIconContainer,
  cardHeaderActionContainer,
  noPaddingContent,
  hoverableCard,
  cardShadowHover
} from './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 카드 스타일 종류 */
  variant?: CardVariant;
  /** 호버 효과 */
  hoverEffect?: boolean;
  /** 전체 너비 설정 */
  fullWidth?: boolean;
  /** 패딩 설정 */
  padding?: CardPadding;
  /** 카드 내용 */
  children?: React.ReactNode;
  /** 클릭 이벤트 핸들러 */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * 기본 카드 컴포넌트
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const {
      variant = 'elevated',
      hoverEffect = false,
      fullWidth = true,
      padding = 'none',
      children,
      onClick,
      className,
      ...rest
    } = props;

    const [isHovered, setIsHovered] = useState(false);

    // 호버 효과 클래스 계산
    const hoverClass = hoverEffect ? hoverableCard : '';
    const shadowHoverClass = hoverEffect && isHovered ? cardShadowHover : '';

    // 클래스 이름 결합
    const combinedClassName = `${card({ variant, fullWidth, padding })} ${hoverClass} ${shadowHoverClass} ${className || ''}`;

    return (
      <div
        ref={ref}
        className={combinedClassName}
        onClick={onClick}
        onMouseEnter={hoverEffect ? () => setIsHovered(true) : undefined}
        onMouseLeave={hoverEffect ? () => setIsHovered(false) : undefined}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 카드 제목 */
  title?: React.ReactNode;
  /** 카드 부제목 */
  subtitle?: React.ReactNode;
  /** 헤더 오른쪽에 표시할 액션 */
  action?: React.ReactNode;
  /** 헤더 왼쪽에 표시할 아이콘 또는 아바타 */
  icon?: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => {
    const {
      title,
      subtitle,
      action,
      icon,
      children,
      className,
      ...rest
    } = props;

    // 클래스 이름 결합
    const combinedClassName = `${cardHeader} ${className || ''}`;

    return (
      <div
        ref={ref}
        className={combinedClassName}
        {...rest}
      >
        <div className={cardHeaderContainer}>
          <div className={cardHeaderContent}>
            {icon && (
              <div className={cardHeaderIconContainer}>{icon}</div>
            )}
            <div>
              {title && (
                <h3 className={cardTitle}>{title}</h3>
              )}
              {subtitle && (
                <div className={cardSubtitle}>{subtitle}</div>
              )}
            </div>
          </div>
          {action && (
            <div className={cardHeaderActionContainer}>{action}</div>
          )}
        </div>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * 카드 콘텐츠 컴포넌트
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  noPadding?: boolean;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  (props, ref) => {
    const {
      children,
      noPadding = false,
      className,
      ...rest
    } = props;

    // 클래스 이름 결합
    const combinedClassName = `${cardContent} ${noPadding ? noPaddingContent : ''} ${className || ''}`;

    return (
      <div
        ref={ref}
        className={combinedClassName}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

/**
 * 카드 푸터 컴포넌트
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (props, ref) => {
    const {
      children,
      className,
      ...rest
    } = props;

    // 클래스 이름 결합
    const combinedClassName = `${cardFooter} ${className || ''}`;

    return (
      <div
        ref={ref}
        className={combinedClassName}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

/**
 * 카드 이미지 컴포넌트
 */
export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  (props, ref) => {
    const {
      alt,
      className,
      ...rest
    } = props;

    // 클래스 이름 결합
    const combinedClassName = `${cardImage} ${className || ''}`;

    return (
      <img
        ref={ref}
        alt={alt}
        className={combinedClassName}
        {...rest}
      />
    );
  }
);

CardImage.displayName = 'CardImage';

export default Card;
