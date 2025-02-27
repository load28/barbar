import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb/styles/theme.css';

// 뱃지 컨테이너 기본 스타일
export const badge = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
  },

  variants: {
    // 뱃지 위치
    placement: {
      'top-right': {
        selectors: {
          '& > span': {
            top: 0,
            right: 0,
            transform: 'translate(50%, -50%)',
          },
        },
      },
      'top-left': {
        selectors: {
          '& > span': {
            top: 0,
            left: 0,
            transform: 'translate(-50%, -50%)',
          },
        },
      },
      'bottom-right': {
        selectors: {
          '& > span': {
            bottom: 0,
            right: 0,
            transform: 'translate(50%, 50%)',
          },
        },
      },
      'bottom-left': {
        selectors: {
          '& > span': {
            bottom: 0,
            left: 0,
            transform: 'translate(-50%, 50%)',
          },
        },
      },
    },

    // 겹침 설정
    overlap: {
      true: {},
    },
  },

  // 기본값
  defaultVariants: {
    placement: 'top-right',
    overlap: false,
  },
});

// 뱃지 내용물 스타일
export const badgeContent = recipe({
  base: {
    position: 'absolute',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    fontFamily: vars.typography.fontFamily.base,
    fontWeight: vars.typography.fontWeight.medium,
    letterSpacing: 0,
    textAlign: 'center',
    borderRadius: vars.borderRadius.full,
    zIndex: 1,
    transition: `transform ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,
    whiteSpace: 'nowrap',
  },

  variants: {
    // 뱃지 색상
    color: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.button.primary.text,
      },
      secondary: {
        backgroundColor: vars.color.secondary,
        color: vars.color.text.primary,
      },
      error: {
        backgroundColor: vars.color.error,
        color: vars.color.button.primary.text,
      },
      warning: {
        backgroundColor: vars.color.warning,
        color: vars.color.text.primary,
      },
      success: {
        backgroundColor: vars.color.success,
        color: vars.color.button.primary.text,
      },
      info: {
        backgroundColor: vars.color.info,
        color: vars.color.button.primary.text,
      },
    },

    // 뱃지 변형
    variant: {
      standard: {},
      outline: {
        backgroundColor: 'transparent',
        border: '1px solid currentColor',
      },
      light: {
        // 각 색상의 옅은 버전
        selectors: {
          '&[data-color="primary"]': {
            backgroundColor: vars.color.tertiary,
            color: vars.color.text.primary,
          },
          '&[data-color="error"]': {
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: vars.color.error,
          },
          '&[data-color="warning"]': {
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            color: vars.color.warning,
          },
          '&[data-color="success"]': {
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            color: vars.color.success,
          },
          '&[data-color="info"]': {
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            color: vars.color.info,
          },
        },
      },
    },

    // 뱃지 크기
    size: {
      sm: {
        minWidth: '16px',
        height: '16px',
        padding: '0 4px',
        fontSize: '10px',
      },
      md: {
        minWidth: '20px',
        height: '20px',
        padding: '0 6px',
        fontSize: '12px',
      },
      lg: {
        minWidth: '24px',
        height: '24px',
        padding: '0 8px',
        fontSize: '14px',
      },
    },

    // 점 모양 설정
    dot: {
      true: {
        minWidth: '8px',
        width: '8px',
        height: '8px',
        padding: 0,
      },
    },

    // 표시 여부
    visible: {
      true: {
        opacity: 1,
        transform: 'scale(1)',
      },
      false: {
        opacity: 0,
        transform: 'scale(0.75)',
      },
    },
  },

  compoundVariants: [
    // 점 모양일 때 크기 조정
    {
      variants: {
        dot: true,
        size: 'sm',
      },
      style: {
        width: '6px',
        height: '6px',
      },
    },
    {
      variants: {
        dot: true,
        size: 'md',
      },
      style: {
        width: '8px',
        height: '8px',
      },
    },
    {
      variants: {
        dot: true,
        size: 'lg',
      },
      style: {
        width: '10px',
        height: '10px',
      },
    },
  ],

  // 기본값
  defaultVariants: {
    color: 'primary',
    variant: 'standard',
    size: 'md',
    dot: false,
    visible: true,
  },
});

// 점 스타일
export const dotStyle = style({
  minWidth: '8px',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
});

// 타입 정의
export type BadgeVariant = 'standard' | 'outline' | 'light';
export type BadgeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type BadgeStyleVariants = RecipeVariants<typeof badge>;
export type BadgeContentStyleVariants = RecipeVariants<typeof badgeContent>;
