import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb/styles/theme.css';

// 태그 기본 스타일
export const tag = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.borderRadius.full,
    whiteSpace: 'nowrap',
    transition: `
      background-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
      color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
      border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
      box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
      opacity ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}
    `,
    fontFamily: vars.typography.fontFamily.base,
    fontWeight: vars.typography.fontWeight.medium,
  },

  variants: {
    // 태그 색상
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },

    // 태그 변형
    variant: {
      filled: {},
      outlined: {
        backgroundColor: 'transparent',
      },
      light: {},
    },

    // 태그 크기
    size: {
      sm: {
        height: '20px',
        padding: '0 8px',
        fontSize: vars.typography.fontSize.xs,
      },
      md: {
        height: '24px',
        padding: '0 10px',
        fontSize: vars.typography.fontSize.sm,
      },
      lg: {
        height: '30px',
        padding: '0 12px',
        fontSize: vars.typography.fontSize.md,
      },
    },

    // 비활성화 상태
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },

    // 클릭 가능 여부
    clickable: {
      true: {
        cursor: 'pointer',
        ':hover': {
          filter: 'brightness(0.95)',
        },
        ':active': {
          filter: 'brightness(0.9)',
        },
      },
    },
  },

  compoundVariants: [
    // filled + color 조합
    {
      variants: {
        variant: 'filled',
        color: 'default',
      },
      style: {
        backgroundColor: vars.color.background.subtle,
        color: vars.color.text.secondary,
      },
    },
    {
      variants: {
        variant: 'filled',
        color: 'primary',
      },
      style: {
        backgroundColor: vars.color.primary,
        color: vars.color.button.primary.text,
      },
    },
    {
      variants: {
        variant: 'filled',
        color: 'secondary',
      },
      style: {
        backgroundColor: vars.color.secondary,
        color: vars.color.text.primary,
      },
    },
    {
      variants: {
        variant: 'filled',
        color: 'success',
      },
      style: {
        backgroundColor: vars.color.success,
        color: vars.color.button.primary.text,
      },
    },
    {
      variants: {
        variant: 'filled',
        color: 'warning',
      },
      style: {
        backgroundColor: vars.color.warning,
        color: vars.color.text.primary,
      },
    },
    {
      variants: {
        variant: 'filled',
        color: 'error',
      },
      style: {
        backgroundColor: vars.color.error,
        color: vars.color.button.primary.text,
      },
    },
    {
      variants: {
        variant: 'filled',
        color: 'info',
      },
      style: {
        backgroundColor: vars.color.info,
        color: vars.color.button.primary.text,
      },
    },

    // outlined + color 조합
    {
      variants: {
        variant: 'outlined',
        color: 'default',
      },
      style: {
        border: `1px solid ${vars.color.border.default}`,
        color: vars.color.text.secondary,
      },
    },
    {
      variants: {
        variant: 'outlined',
        color: 'primary',
      },
      style: {
        border: `1px solid ${vars.color.primary}`,
        color: vars.color.primary,
      },
    },
    {
      variants: {
        variant: 'outlined',
        color: 'secondary',
      },
      style: {
        border: `1px solid ${vars.color.secondary}`,
        color: vars.color.secondary,
      },
    },
    {
      variants: {
        variant: 'outlined',
        color: 'success',
      },
      style: {
        border: `1px solid ${vars.color.success}`,
        color: vars.color.success,
      },
    },
    {
      variants: {
        variant: 'outlined',
        color: 'warning',
      },
      style: {
        border: `1px solid ${vars.color.warning}`,
        color: vars.color.warning,
      },
    },
    {
      variants: {
        variant: 'outlined',
        color: 'error',
      },
      style: {
        border: `1px solid ${vars.color.error}`,
        color: vars.color.error,
      },
    },
    {
      variants: {
        variant: 'outlined',
        color: 'info',
      },
      style: {
        border: `1px solid ${vars.color.info}`,
        color: vars.color.info,
      },
    },

    // light + color 조합
    {
      variants: {
        variant: 'light',
        color: 'default',
      },
      style: {
        backgroundColor: vars.color.background.paper,
        color: vars.color.text.secondary,
      },
    },
    {
      variants: {
        variant: 'light',
        color: 'primary',
      },
      style: {
        backgroundColor: vars.color.tertiary,
        color: vars.color.primary,
      },
    },
    {
      variants: {
        variant: 'light',
        color: 'secondary',
      },
      style: {
        backgroundColor: 'rgba(255, 158, 92, 0.1)',
        color: vars.color.secondary,
      },
    },
    {
      variants: {
        variant: 'light',
        color: 'success',
      },
      style: {
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        color: vars.color.success,
      },
    },
    {
      variants: {
        variant: 'light',
        color: 'warning',
      },
      style: {
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        color: vars.color.warning,
      },
    },
    {
      variants: {
        variant: 'light',
        color: 'error',
      },
      style: {
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        color: vars.color.error,
      },
    },
    {
      variants: {
        variant: 'light',
        color: 'info',
      },
      style: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        color: vars.color.info,
      },
    },
  ],

  // 기본값
  defaultVariants: {
    color: 'default',
    variant: 'filled',
    size: 'md',
    disabled: false,
    clickable: false,
  },
});

// 태그 라벨 스타일
export const tagLabel = style({
  display: 'inline-block',
  lineHeight: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

// 태그 아이콘 스타일
export const tagIcon = style({
  display: 'flex',
  marginRight: '4px',
  fontSize: '0.9em',
});

// 태그 닫기 버튼 스타일
export const tagClose = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '4px',
  fontSize: '0.9em',
  cursor: 'pointer',
  borderRadius: '50%',

  ':hover': {
    opacity: 0.7,
  },

  ':focus': {
    outline: 'none',
  },
});

// 타입 정의
export type TagVariant = 'filled' | 'outlined' | 'light';
export type TagColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type TagSize = 'sm' | 'md' | 'lg';

export type TagStyleVariants = RecipeVariants<typeof tag>;
