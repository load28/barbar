import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb-styles/theme.css';

// 기본 카드 스타일
const baseCard = style({
  backgroundColor: vars.color.background.paper,
  borderRadius: vars.borderRadius.lg,
  overflow: 'hidden',
  transition: `box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`
});

// 호버 가능한 카드
export const hoverableCard = style({
  cursor: 'pointer'
});

// 카드 헤더 스타일
export const cardHeader = style({
  padding: `${vars.spacing[4]} ${vars.spacing[4]} ${vars.spacing[2]}`,
  borderBottom: `1px solid ${vars.color.border.subtle}`
});

// 카드 헤더 컨테이너 스타일
export const cardHeaderContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

// 카드 헤더 콘텐츠 영역
export const cardHeaderContent = style({
  display: 'flex',
  alignItems: 'center'
});

// 카드 헤더 아이콘 컨테이너
export const cardHeaderIconContainer = style({
  marginRight: vars.spacing[3]
});

// 카드 헤더 액션 컨테이너
export const cardHeaderActionContainer = style({
  display: 'flex'
});

// 카드 제목 스타일
export const cardTitle = style({
  fontSize: vars.typography.fontSize.lg,
  fontWeight: vars.typography.fontWeight.bold,
  margin: 0,
  lineHeight: vars.typography.lineHeight.tight
});

// 카드 부제목 스타일
export const cardSubtitle = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.color.text.secondary,
  margin: `${vars.spacing[1]} 0 0`,
  lineHeight: vars.typography.lineHeight.normal
});

// 카드 콘텐츠 스타일
export const cardContent = style({
  padding: vars.spacing[4]
});

// 패딩 없는 컨텐츠 스타일
export const noPaddingContent = style({
  padding: 0
});

// 카드 푸터 스타일
export const cardFooter = style({
  padding: `${vars.spacing[2]} ${vars.spacing[4]} ${vars.spacing[4]}`,
  borderTop: `1px solid ${vars.color.border.subtle}`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: vars.spacing[2]
});

// 카드 이미지 스타일
export const cardImage = style({
  width: '100%',
  display: 'block'
});

// 카드 스타일 종류
export type CardVariant = 'elevated' | 'outlined' | 'filled';

// 카드 패딩 크기
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

// 카드 그림자 스타일 (호버 시)
export const cardShadowHover = style({
  boxShadow: vars.shadow.lg
});

// 카드 레시피
export const card = recipe({
  base: baseCard,

  variants: {
    // 카드 스타일 종류
    variant: {
      elevated: {
        boxShadow: vars.shadow.md,
        border: 'none'
      },
      outlined: {
        boxShadow: 'none',
        border: `1px solid ${vars.color.border.default}`
      },
      filled: {
        boxShadow: 'none',
        border: 'none',
        backgroundColor: vars.color.background.subtle
      }
    },

    // 호버 효과
    hoverEffect: {
      true: {}
    },

    // 전체 너비 설정
    fullWidth: {
      true: {
        width: '100%'
      }
    },

    // 패딩 설정
    padding: {
      none: {},
      sm: {
        padding: vars.spacing[2]
      },
      md: {
        padding: vars.spacing[4]
      },
      lg: {
        padding: vars.spacing[6]
      }
    }
  },

  // 기본값
  defaultVariants: {
    variant: 'elevated',
    hoverEffect: false,
    fullWidth: true,
    padding: 'none'
  }
});

export type CardStyleVariants = RecipeVariants<typeof card>;
