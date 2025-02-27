import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb-styles/theme.css';

// 기본 컨테이너 스타일
export const tagInputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

// 태그 입력 라벨 스타일
export const tagInputLabel = style({
  marginBottom: vars.spacing[1],
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  color: vars.color.text.secondary
});

// 입력 필드 래퍼 스타일
export const tagInputWrapper = recipe({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    backgroundColor: vars.color.background.default,
    borderRadius: vars.borderRadius.md,
    transition: `
      border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
      box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}
    `
  },

  variants: {
    // 입력 필드 크기
    size: {
      sm: {
        minHeight: '32px',
        padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
        fontSize: vars.typography.fontSize.sm
      },
      md: {
        minHeight: '40px',
        padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
        fontSize: vars.typography.fontSize.md
      },
      lg: {
        minHeight: '48px',
        padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
        fontSize: vars.typography.fontSize.lg
      }
    },

    // 입력 필드 변형
    variant: {
      outlined: {
        border: `1px solid ${vars.color.border.default}`,
        ':focus-within': {
          borderColor: vars.color.border.focus,
          boxShadow: `0 0 0 1px ${vars.color.border.focus}`
        }
      },
      filled: {
        border: 'none',
        backgroundColor: vars.color.background.subtle,
        ':focus-within': {
          boxShadow: `0 0 0 1px ${vars.color.border.focus}`
        }
      },
      underlined: {
        border: 'none',
        borderBottom: `1px solid ${vars.color.border.default}`,
        borderRadius: 0,
        padding: `${vars.spacing[1]} 0`,
        ':focus-within': {
          borderColor: vars.color.border.focus,
          boxShadow: `0 1px 0 0 ${vars.color.border.focus}`
        }
      }
    },

    // 오류 상태
    error: {
      true: {
        borderColor: vars.color.error,
        ':focus-within': {
          borderColor: vars.color.error,
          boxShadow: `0 0 0 1px ${vars.color.error}`
        }
      }
    },

    // 비활성화 상태
    disabled: {
      true: {
        backgroundColor: vars.color.background.subtle,
        opacity: 0.7,
        cursor: 'not-allowed'
      }
    }
  },

  // 복합 베리언트
  compoundVariants: [
    // 오류 + 변형 조합
    {
      variants: {
        error: true,
        variant: 'outlined'
      },
      style: {
        borderColor: vars.color.error
      }
    },
    {
      variants: {
        error: true,
        variant: 'underlined'
      },
      style: {
        borderBottomColor: vars.color.error
      }
    }
  ],

  // 기본값
  defaultVariants: {
    size: 'md',
    variant: 'outlined',
    error: false,
    disabled: false
  }
});

// 태그 목록 스타일
export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.spacing[2],
  width: '100%'
});

// 입력 필드 스타일
export const tagInputField = style({
  flex: '1 0 100px',
  minWidth: '100px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  color: vars.color.text.primary,
  margin: 0,
  padding: vars.spacing[1],

  '::placeholder': {
    color: vars.color.text.hint
  },

  ':disabled': {
    cursor: 'not-allowed',
    color: vars.color.text.disabled
  }
});

// 에러 메시지 스타일
export const errorText = style({
  color: vars.color.error,
  fontSize: vars.typography.fontSize.sm,
  marginTop: vars.spacing[1]
});

// 도움말 텍스트 스타일
export const helperText = style({
  color: vars.color.text.hint,
  fontSize: vars.typography.fontSize.sm,
  marginTop: vars.spacing[1]
});

// 타입 정의
export type TagInputVariant = 'outlined' | 'filled' | 'underlined';
export type TagInputSize = 'sm' | 'md' | 'lg';

export type TagInputWrapperStyleVariants = RecipeVariants<typeof tagInputWrapper>;
