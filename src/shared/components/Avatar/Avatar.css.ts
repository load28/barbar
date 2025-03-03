import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb-styles/theme.css';

// 기본 아바타 스타일
const baseAvatar = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '50%',
  backgroundColor: vars.color.background.subtle,
  color: vars.color.text.primary,
  fontWeight: vars.typography.fontWeight.medium
});

// 아바타 이미지 스타일
export const avatarImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%'
});

// 아바타 폴백(이미지 없을 때 텍스트) 스타일
export const avatarFallback = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.primary,
  color: vars.color.button.primary.text,
  fontSize: '50%',
  fontWeight: vars.typography.fontWeight.medium
});

// 아바타 크기
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// 아바타 모양
export type AvatarShape = 'circle' | 'square' | 'rounded';

// 아바타 레시피
export const avatar = recipe({
  base: baseAvatar,

  variants: {
    // 아바타 크기
    size: {
      xs: {
        width: vars.spacing.spacing6,
        height: vars.spacing.spacing6,
        fontSize: vars.typography.fontSize.xs
      },
      sm: {
        width: vars.spacing.spacing8,
        height: vars.spacing.spacing8,
        fontSize: vars.typography.fontSize.sm
      },
      md: {
        width: vars.spacing.spacing10,
        height: vars.spacing.spacing10,
        fontSize: vars.typography.fontSize.md
      },
      lg: {
        width: vars.spacing.spacing12,
        height: vars.spacing.spacing12,
        fontSize: vars.typography.fontSize.lg
      },
      xl: {
        width: vars.spacing.spacing16,
        height: vars.spacing.spacing16,
        fontSize: vars.typography.fontSize.xl
      },
      '2xl': {
        width: vars.spacing.spacing24,
        height: vars.spacing.spacing24,
        fontSize: vars.typography.fontSize['2xl']
      }
    },

    // 아바타 모양
    shape: {
      circle: {
        borderRadius: '50%'
      },
      square: {
        borderRadius: 0
      },
      rounded: {
        borderRadius: vars.borderRadius.md
      }
    },

    // 테두리 여부
    bordered: {
      true: {
        border: `2px solid ${vars.color.background.default}`
      }
    },

    // 온라인 상태 표시
    status: {
      online: {
        selectors: {
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '7%',
            right: '7%',
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            backgroundColor: vars.color.success,
            border: `2px solid ${vars.color.background.default}`
          }
        }
      },
      offline: {
        selectors: {
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '7%',
            right: '7%',
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            backgroundColor: vars.color.text.disabled,
            border: `2px solid ${vars.color.background.default}`
          }
        }
      },
      busy: {
        selectors: {
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '7%',
            right: '7%',
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            backgroundColor: vars.color.error,
            border: `2px solid ${vars.color.background.default}`
          }
        }
      },
      away: {
        selectors: {
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '7%',
            right: '7%',
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            backgroundColor: vars.color.warning,
            border: `2px solid ${vars.color.background.default}`
          }
        }
      }
    }
  },

  // 컴파운드 베리언트 - 조합에 따른 특수 스타일
  compoundVariants: [
    // 크기에 따른 상태 표시기 조정
    {
      variants: {
        size: 'xs'
      },
      style: {
        selectors: {
          '&::after': {
            border: `1px solid ${vars.color.background.default}`
          }
        }
      }
    }
  ],

  // 기본값
  defaultVariants: {
    size: 'md',
    shape: 'circle',
    bordered: false
  }
});

// 아바타 그룹 스타일
export const avatarGroup = style({
  display: 'flex',
  flexDirection: 'row',

  selectors: {
    '& > *:not(:first-child)': {
      marginLeft: `-${vars.spacing.spacing2}`
    }
  }
});

export type AvatarStyleVariants = RecipeVariants<typeof avatar>;
