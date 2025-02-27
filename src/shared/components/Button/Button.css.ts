import { style, keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb/styles/theme.css';

// 아이콘 컨테이너 기본 스타일
export const iconContainer = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// 왼쪽 아이콘 컨테이너
export const leftIconContainer = style([
  iconContainer,
  {
    marginRight: vars.spacing[2],
  }
]);

// 오른쪽 아이콘 컨테이너
export const rightIconContainer = style([
  iconContainer,
  {
    marginLeft: vars.spacing[2],
  }
]);

// 회전 애니메이션 정의
const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

// 로딩 스피너 컨테이너
export const spinnerContainer = style([
  iconContainer,
  {
    marginRight: vars.spacing[2],
    animation: `${spin} 1s linear infinite`,
  }
]);

// 기본 버튼 스타일
const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: vars.typography.fontWeight.medium,
  borderRadius: vars.borderRadius.md,
  transition: `
    background-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
    color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
    border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
    box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
    opacity ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}
  `,
  cursor: 'pointer',
  textDecoration: 'none',
  outline: 'none',
  border: 'none',
  margin: 0,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'transparent',
});

// 버튼 호버 스타일
export const primaryButtonHover = style({
  backgroundColor: vars.color.button.primary.hover,
});

export const secondaryButtonHover = style({
  backgroundColor: vars.color.button.secondary.hover,
});

export const tertiaryButtonHover = style({
  backgroundColor: vars.color.button.tertiary.hover,
});

// 버튼 활성 스타일
export const primaryButtonActive = style({
  backgroundColor: vars.color.button.primary.active,
});

export const secondaryButtonActive = style({
  backgroundColor: vars.color.button.secondary.active,
});

export const tertiaryButtonActive = style({
  backgroundColor: vars.color.button.tertiary.active,
});

// 비활성화 스타일
export const disabledStyle = style({
  opacity: 0.6,
  cursor: 'not-allowed',
  pointerEvents: 'none',
});

// 포커스 스타일
export const focusVisibleStyle = style({
  boxShadow: `0 0 0 2px ${vars.color.background.default}, 0 0 0 4px ${vars.color.border.focus}`,
  outline: 'none',
});

// 버튼 스타일 종류
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

// 버튼 크기
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// 버튼 레시피
export const button = recipe({
  base: baseButton,

  variants: {
    // 버튼 종류
    variant: {
      primary: {
        backgroundColor: vars.color.button.primary.background,
        color: vars.color.button.primary.text,
      },
      secondary: {
        backgroundColor: vars.color.button.secondary.background,
        color: vars.color.button.secondary.text,
        border: `1px solid ${vars.color.border.default}`,
      },
      tertiary: {
        backgroundColor: vars.color.button.tertiary.background,
        color: vars.color.button.tertiary.text,
      },
    },

    // 버튼 크기
    size: {
      xs: {
        fontSize: vars.typography.fontSize.xs,
        padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
        height: vars.spacing[6],
      },
      sm: {
        fontSize: vars.typography.fontSize.sm,
        padding: `${vars.spacing[1]} ${vars.spacing[3]}`,
        height: vars.spacing[8],
      },
      md: {
        fontSize: vars.typography.fontSize.md,
        padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
        height: vars.spacing[10],
      },
      lg: {
        fontSize: vars.typography.fontSize.lg,
        padding: `${vars.spacing[2]} ${vars.spacing[5]}`,
        height: vars.spacing[12],
      },
      xl: {
        fontSize: vars.typography.fontSize.xl,
        padding: `${vars.spacing[3]} ${vars.spacing[6]}`,
        height: vars.spacing[16],
      },
    },

    // 꽉 차는 버튼
    fullWidth: {
      true: {
        width: '100%',
      },
    },

    // 아이콘만 있는 버튼
    iconOnly: {
      true: {
        padding: 0,
        borderRadius: vars.borderRadius.full,
      },
    },

    // 비활성화 상태
    disabled: {
      true: disabledStyle,
    },
  },

  // 컴파운드 베리언트 - 조합에 따른 특수 스타일
  compoundVariants: [
    // 아이콘만 있는 버튼의 크기 조정
    {
      variants: {
        iconOnly: true,
        size: 'xs',
      },
      style: {
        width: vars.spacing[6],
      },
    },
    {
      variants: {
        iconOnly: true,
        size: 'sm',
      },
      style: {
        width: vars.spacing[8],
      },
    },
    {
      variants: {
        iconOnly: true,
        size: 'md',
      },
      style: {
        width: vars.spacing[10],
      },
    },
    {
      variants: {
        iconOnly: true,
        size: 'lg',
      },
      style: {
        width: vars.spacing[12],
      },
    },
    {
      variants: {
        iconOnly: true,
        size: 'xl',
      },
      style: {
        width: vars.spacing[16],
      },
    },
  ],

  // 기본값
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    iconOnly: false,
    disabled: false,
  },
});

export type ButtonStyleVariants = RecipeVariants<typeof button>;
