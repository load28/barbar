import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb/styles/theme.css';

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

  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },

  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.color.background.default}, 0 0 0 4px ${vars.color.border.focus}`,
    outline: 'none'
  }
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
        ':hover': {
          backgroundColor: vars.color.button.primary.hover
        },
        ':active': {
          backgroundColor: vars.color.button.primary.active
        }
      },
      secondary: {
        backgroundColor: vars.color.button.secondary.background,
        color: vars.color.button.secondary.text,
        border: `1px solid ${vars.color.border.default}`,
        ':hover': {
          backgroundColor: vars.color.button.secondary.hover
        },
        ':active': {
          backgroundColor: vars.color.button.secondary.active
        }
      },
      tertiary: {
        backgroundColor: vars.color.button.tertiary.background,
        color: vars.color.button.tertiary.text,
        ':hover': {
          backgroundColor: vars.color.button.tertiary.hover
        },
        ':active': {
          backgroundColor: vars.color.button.tertiary.active
        }
      }
    },

    // 버튼 크기
    size: {
      xs: {
        fontSize: vars.typography.fontSize.xs,
        padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
        height: vars.spacing[6]
      },
      sm: {
        fontSize: vars.typography.fontSize.sm,
        padding: `${vars.spacing[1]} ${vars.spacing[3]}`,
        height: vars.spacing[8]
      },
      md: {
        fontSize: vars.typography.fontSize.md,
        padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
        height: vars.spacing[10]
      },
      lg: {
        fontSize: vars.typography.fontSize.lg,
        padding: `${vars.spacing[2]} ${vars.spacing[5]}`,
        height: vars.spacing[12]
      },
      xl: {
        fontSize: vars.typography.fontSize.xl,
        padding: `${vars.spacing[3]} ${vars.spacing[6]}`,
        height: vars.spacing[16]
      }
    },

    // 꽉 차는 버튼
    fullWidth: {
      true: {
        width: '100%'
      }
    },

    // 아이콘만 있는 버튼
    iconOnly: {
      true: {
        padding: 0,
        borderRadius: vars.borderRadius.full
      }
    },

    // 비활성화 상태
    disabled: {
      true: {
        opacity: 0.6,
        cursor: 'not-allowed',
        pointerEvents: 'none'
      }
    }
  },

  // 컴파운드 베리언트 - 조합에 따른 특수 스타일
  compoundVariants: [
    // 아이콘만 있는 버튼의 크기 조정
    {
      variants: {
        iconOnly: true,
        size: 'xs'
      },
      style: {
        width: vars.spacing[6]
      }
    },
    {
      variants: {
        iconOnly: true,
        size: 'sm'
      },
      style: {
        width: vars.spacing[8]
      }
    },
    {
      variants: {
        iconOnly: true,
        size: 'md'
      },
      style: {
        width: vars.spacing[10]
      }
    },
    {
      variants: {
        iconOnly: true,
        size: 'lg'
      },
      style: {
        width: vars.spacing[12]
      }
    },
    {
      variants: {
        iconOnly: true,
        size: 'xl'
      },
      style: {
        width: vars.spacing[16]
      }
    }
  ],

  // 기본값
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    iconOnly: false,
    disabled: false
  }
});

export type ButtonStyleVariants = RecipeVariants<typeof button>;
