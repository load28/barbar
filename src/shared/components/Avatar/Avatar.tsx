import React, { forwardRef, useState } from 'react';
import { avatar, avatarImg, avatarFallback, avatarGroup, AvatarSize, AvatarShape } from './Avatar.css';
import { extractStyleProps, mergeStyles } from '@bb/shared/utils/styling';

export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 이미지 소스 */
  src?: string;
  /** 이미지 대체 텍스트 */
  alt?: string;
  /** 이미지 없을 경우 표시할 텍스트 */
  name?: string;
  /** 아바타 크기 */
  size?: AvatarSize;
  /** 아바타 모양 */
  shape?: AvatarShape;
  /** 테두리 표시 여부 */
  bordered?: boolean;
  /** 온라인 상태 */
  status?: AvatarStatus;
  /** 아바타 내용 (커스텀 렌더링용) */
  children?: React.ReactNode;
}

/**
 * 사용자 아바타 컴포넌트
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { src, alt, name, size = 'md', shape = 'circle', bordered = false, status, children, ...rest } = props;

  const [imageError, setImageError] = useState(false);
  const [className, style, restProps] = extractStyleProps(rest);

  // 이름에서 이니셜 추출
  const getInitials = (name: string) => {
    if (!name) return '';

    const nameParts = name.split(' ').filter(Boolean);

    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }

    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  };

  // 기본 색상 생성 (이름 기반)
  const stringToHslColor = (str: string, saturation = 50, lightness = 50) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const renderContent = () => {
    if (children) {
      return children;
    }

    if (src && !imageError) {
      return <img src={src} alt={alt || name || 'avatar'} className={avatarImg} onError={() => setImageError(true)} />;
    }

    if (name) {
      const initials = getInitials(name);
      const backgroundColor = stringToHslColor(name);

      return (
        <div className={avatarFallback} style={{ backgroundColor }}>
          {initials}
        </div>
      );
    }

    // 기본 폴백 (이름도 없고 이미지도 없음)
    return (
      <div className={avatarFallback}>
        <svg fill="currentColor" viewBox="0 0 24 24" width="60%" height="60%">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className={mergeStyles(avatar({ size, shape, bordered, status }), className)}
      style={style}
      {...restProps}
    >
      {renderContent()}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 최대 표시 개수 */
  max?: number;
  /** 자식 아바타 컴포넌트들 */
  children: React.ReactNode;
}

/**
 * 아바타 그룹 컴포넌트
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { max, children, ...rest } = props;

  const [className, style, restProps] = extractStyleProps(rest);
  const childrenArray = React.Children.toArray(children);
  const totalCount = childrenArray.length;

  // max가 지정되어 있으면 초과하는 아바타는 +N으로 표시
  const displayCount = max && totalCount > max ? max : totalCount;
  const hiddenCount = max && totalCount > max ? totalCount - max + 1 : 0;

  // 표시할 아바타들
  const visibleAvatars = childrenArray.slice(0, displayCount - (hiddenCount > 0 ? 1 : 0));

  return (
    <div ref={ref} className={mergeStyles(avatarGroup, className)} style={style} {...restProps}>
      {visibleAvatars}

      {hiddenCount > 0 && <Avatar>+{hiddenCount}</Avatar>}
    </div>
  );
});

AvatarGroup.displayName = 'AvatarGroup';

export default Avatar;
