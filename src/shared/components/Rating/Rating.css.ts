import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb-styles/theme.css';

// 기본 평점 컨테이너 스타일
export const ratingContainer = recipe({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },

  variants: {
    // 평점 크기
    size: {
      sm: {
        fontSize: vars.typography.fontSize.sm
      },
      md: {
        fontSize: vars.typography.fontSize.md
      },
      lg: {
        fontSize: vars.typography.fontSize.lg
      }
    },

    // 평점 표시 방식
    variant: {
      star: {},
      number: {},
      bar: {
        width: '100%'
      },
      icon: {}
    }
  },

  defaultVariants: {
    size: 'md',
    variant: 'star'
  }
});

// 평점 라벨 스타일
export const ratingLabel = style({
  fontSize: '0.85em',
  color: vars.color.text.secondary,
  marginBottom: vars.spacing.spacing1,
  fontWeight: vars.typography.fontWeight.medium
});

// 별점 컨테이너 스타일
export const ratingStarsContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.spacing1
});

// 별 기본 스타일
export const ratingStarBase = style({
  position: 'relative',
  display: 'inline-block',
  color: vars.color.text.hint
});

// 별 채워진 스타일
export const ratingStarFilled = style({
  position: 'absolute',
  top: 0,
  left: 0,
  color: 'var(--rating-color, ' + vars.color.warning + ')'
});

// 별 빈 스타일
export const ratingStarEmpty = style({
  color: vars.color.text.disabled
});

// 숫자 평점 컨테이너 스타일
export const ratingTextContainer = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.spacing.spacing1
});

// 평점 값 스타일
export const ratingValue = style({
  fontWeight: vars.typography.fontWeight.bold,
  color: 'var(--rating-color, ' + vars.color.warning + ')',
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.spacing1
});

// 최대 평점 스타일
export const ratingMax = style({
  color: vars.color.text.secondary,
  fontSize: '0.85em'
});

// 바 형태 컨테이너 스타일
export const ratingBarContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.spacing1
});

// 바 스타일
export const barStyle = style({
  width: '100%',
  height: '8px',
  backgroundColor: vars.color.background.subtle,
  borderRadius: vars.borderRadius.full,
  overflow: 'hidden'
});

// 바 채움 스타일
export const ratingBarFill = style({
  height: '100%',
  backgroundColor: 'var(--rating-color, ' + vars.color.warning + ')',
  borderRadius: vars.borderRadius.full,
  transition: `width ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`
});

// 바 라벨 스타일
export const ratingBarLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  fontSize: '0.85em',
  color: vars.color.text.secondary,
  fontWeight: vars.typography.fontWeight.medium
});

// 바 값 텍스트 스타일
export const ratingBarValueText = style({
  marginTop: vars.spacing.spacing1,
  fontSize: '0.8em',
  color: vars.color.text.secondary,
  textAlign: 'right'
});

// 아이콘 컨테이너 스타일
export const ratingIconContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

// 평점 스타일 종류
export type RatingVariant = 'star' | 'number' | 'bar' | 'icon';

// 평점 크기
export type RatingSize = 'sm' | 'md' | 'lg';

export type RatingStyleVariants = RecipeVariants<typeof ratingContainer>;
