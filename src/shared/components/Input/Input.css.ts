import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@bb/styles/theme.css';

// 기본 입력 필드 컨테이너 스타일
const inputWrapperBase = style({
  position: 'relative',
  width: '100%',
});

// 기본 라벨 스타일
export const inputLabel = style({
  display: 'block',
  marginBottom: vars.spacing[1],
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  color: vars.color.text.secondary,
});

// 기본 입력 필드 스타일
const inputBase = style({
  width: '100%',
  fontFamily: vars.typography.fontFamily.base,
  backgroundColor: vars.color.background.default,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.typography.fontSize.md,
  transition: `
    border-color ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut},
    box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}
  `,
  appearance: 'none',
  WebkitAppearance: 'none',

  '::placeholder': {
    color: vars.color.text.hint,
  },

  ':focus': {
    outline: 'none',
    borderColor: vars.color.border.focus,
    boxShadow: `0 0 0 1px ${vars.color.border.focus}`,
  },

  ':disabled': {
    backgroundColor: vars.color.background.subtle,
    color: vars.color.text.disabled,
    cursor: 'not-allowed',
  },
});

// 유효성 검사 상태
export type ValidationState = 'valid' | 'invalid' | 'none';

// 입력 필드 크기
export type InputSize = 'sm' | 'md' | 'lg';

// 에러 메시지 스타일
export const errorMessage = style({
  color: vars.color.error,
  fontSize: vars.typography.fontSize.sm,
  marginTop: vars.spacing[1],
});

// 도움말 텍스트 스타일
export const helperText = style({
  color: vars.color.text.hint,
  fontSize: vars.typography.fontSize.sm,
  marginTop: vars.spacing[1],
});

// 접두/접미 아이콘 컨테이너 기본 스타일
const iconBaseStyle = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: vars.color.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
});

// 접두 아이콘 스타일
export const prefixIconContainer = style([
  iconBaseStyle,
  {
    left: vars.spacing[3],
  }
]);

// 접미 아이콘 스타일
export const suffixIconContainer = style([
  iconBaseStyle,
  {
    right: vars.spacing[3],
  }
]);

// 입력 필드 레시피
export const input = recipe({
  base: inputBase,

  variants: {
    // 입력 필드 크기
    size: {
      sm: {
        height: vars.spacing[8],
        padding: `0 ${vars.spacing[3]}`,
        fontSize: vars.typography.fontSize.sm,
      },
      md: {
        height: vars.spacing[10],
        padding: `0 ${vars.spacing[4]}`,
        fontSize: vars.typography.fontSize.md,
      },
      lg: {
        height: vars.spacing[12],
        padding: `0 ${vars.spacing[5]}`,
        fontSize: vars.typography.fontSize.lg,
      },
    },

    // 유효성 검사 상태
    validation: {
      valid: {
        borderColor: vars.color.success,
        ':focus': {
          borderColor: vars.color.success,
          boxShadow: `0 0 0 1px ${vars.color.success}`,
        },
      },
      invalid: {
        borderColor: vars.color.error,
        ':focus': {
          borderColor: vars.color.error,
          boxShadow: `0 0 0 1px ${vars.color.error}`,
        },
      },
      none: {},
    },

    // 접두 아이콘 여부
    hasPrefixIcon: {
      true: {},
    },

    // 접미 아이콘 여부
    hasSuffixIcon: {
      true: {},
    },

    // 비활성화 상태
    disabled: {
      true: {
        backgroundColor: vars.color.background.subtle,
        color: vars.color.text.disabled,
        cursor: 'not-allowed',
      },
    },

    // 전체 너비 설정
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
  },

  // 컴파운드 베리언트 - 조합에 따른 특수 스타일
  compoundVariants: [
    // 접두 아이콘이 있을 때 패딩 조정
    {
      variants: {
        hasPrefixIcon: true,
        size: 'sm',
      },
      style: {
        paddingLeft: vars.spacing[6],
      },
    },
    {
      variants: {
        hasPrefixIcon: true,
        size: 'md',
      },
      style: {
        paddingLeft: vars.spacing[8],
      },
    },
    {
      variants: {
        hasPrefixIcon: true,
        size: 'lg',
      },
      style: {
        paddingLeft: vars.spacing[10],
      },
    },

    // 접미 아이콘이 있을 때 패딩 조정
    {
      variants: {
        hasSuffixIcon: true,
        size: 'sm',
      },
      style: {
        paddingRight: vars.spacing[6],
      },
    },
    {
      variants: {
        hasSuffixIcon: true,
        size: 'md',
      },
      style: {
        paddingRight: vars.spacing[8],
      },
    },
    {
      variants: {
        hasSuffixIcon: true,
        size: 'lg',
      },
      style: {
        paddingRight: vars.spacing[10],
      },
    },
  ],

  // 기본값
  defaultVariants: {
    size: 'md',
    validation: 'none',
    disabled: false,
    fullWidth: true,
    hasPrefixIcon: false,
    hasSuffixIcon: false,
  },
});

// 입력 필드 컨테이너 레시피
export const inputWrapper = recipe({
  base: inputWrapperBase,

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
  },

  defaultVariants: {
    fullWidth: true,
  },
});

export type InputStyleVariants = RecipeVariants<typeof input>;
export type InputWrapperStyleVariants = RecipeVariants<typeof inputWrapper>;
