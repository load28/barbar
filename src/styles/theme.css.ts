import { createTheme, createThemeContract } from '@vanilla-extract/css';

// 테마 계약 생성 - 모든 테마가 충족해야 하는 계약
const themeContract = createThemeContract({
  color: {
    // 브랜드 색상
    primary: null,
    secondary: null,
    tertiary: null,

    // 상태 색상
    success: null,
    warning: null,
    error: null,
    info: null,

    // 배경 색상
    background: {
      default: null,
      paper: null,
      subtle: null
    },

    // 텍스트 색상
    text: {
      primary: null,
      secondary: null,
      disabled: null,
      hint: null
    },

    // 테두리 색상
    border: {
      default: null,
      focus: null,
      subtle: null
    },

    // 버튼 색상
    button: {
      primary: {
        background: null,
        text: null,
        hover: null,
        active: null
      },
      secondary: {
        background: null,
        text: null,
        hover: null,
        active: null
      },
      tertiary: {
        background: null,
        text: null,
        hover: null,
        active: null
      }
    },

    shadow: {
      none: null,
      sm: null,
      md: null,
      lg: null,
      xl: null
    }
  },

  typography: {
    fontFamily: {
      base: null,
      heading: null,
      mono: null
    },
    fontSize: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null
    },
    fontWeight: {
      normal: null,
      medium: null,
      bold: null
    },
    lineHeight: {
      tight: null,
      normal: null,
      loose: null
    }
  },

  spacing: {
    '0': null,
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '8': null,
    '10': null,
    '12': null,
    '16': null,
    '20': null,
    '24': null,
    '32': null,
    '40': null,
    '48': null,
    '64': null,
    '80': null,
    '96': null,
    '128': null
  },

  borderRadius: {
    none: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null
  },

  motion: {
    duration: {
      fast: null,
      normal: null,
      slow: null
    },
    easing: {
      easeInOut: null,
      easeOut: null,
      easeIn: null,
      linear: null
    }
  },

  breakpoints: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null
  },

  zIndex: {
    mobileStepper: null,
    fab: null,
    speedDial: null,
    appBar: null,
    drawer: null,
    modal: null,
    snackbar: null,
    tooltip: null
  }
});

// 공통 값 정의
const commonValues = {
  // 브랜드 색상
  primary: '#FF6B00', // 주 브랜드 색상 (오렌지)
  secondary: '#FF9E5C', // 보조 브랜드 색상 (밝은 오렌지)

  // 상태 색상
  success: '#22C55E', // 성공 상태 색상 (녹색)
  warning: '#F59E0B', // 경고 상태 색상 (황색)
  error: '#EF4444', // 오류 상태 색상 (적색)
  info: '#3B82F6', // 정보 상태 색상 (청색)

  // 버튼 공통 값
  primaryButtonText: '#FFFFFF', // 기본 버튼 텍스트 색상 (흰색)
  primaryButtonHover: '#E95800', // 기본 버튼 호버 색상 (진한 오렌지)
  primaryButtonActive: '#D45000', // 기본 버튼 활성 색상 (더 진한 오렌지)

  // 공통 타이포그래피
  fontFamily: {
    base: 'var(--font-geist-sans), "Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading:
      'var(--font-geist-sans), "Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'var(--font-geist-mono), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem' // 24px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700'
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    loose: '1.75'
  },

  // 공통 스페이싱
  spacing: {
    '0': '0',
    '1': '0.25rem', // 4px
    '2': '0.5rem', // 8px
    '3': '0.75rem', // 12px
    '4': '1rem', // 16px
    '5': '1.25rem', // 20px
    '6': '1.5rem', // 24px
    '8': '2rem', // 32px
    '10': '2.5rem', // 40px
    '12': '3rem', // 48px
    '16': '4rem', // 64px
    '20': '5rem', // 80px
    '24': '6rem', // 96px
    '32': '8rem', // 128px
    '40': '10rem', // 160px
    '48': '12rem', // 192px
    '64': '16rem', // 256px
    '80': '20rem', // 320px
    '96': '24rem', // 384px
    '128': '32rem' // 512px
  },

  // 공통 테두리 반경
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    md: '0.25rem', // 4px
    lg: '0.5rem', // 8px
    xl: '1rem', // 16px
    full: '9999px'
  },

  // 공통 모션
  motion: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      linear: 'linear'
    }
  },

  // 공통 브레이크포인트
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px'
  },

  // 공통 z-index
  zIndex: {
    mobileStepper: '1000',
    fab: '1050',
    speedDial: '1050',
    appBar: '1100',
    drawer: '1200',
    modal: '1300',
    snackbar: '1400',
    tooltip: '1500'
  }
};

// 라이트 테마 구현
export const lightThemeClass = createTheme(themeContract, {
  color: {
    // 브랜드 색상
    primary: commonValues.primary,
    secondary: commonValues.secondary,
    tertiary: '#FFD6B8', // 세 번째 브랜드 색상 (매우 옅은 오렌지)

    // 상태 색상
    success: commonValues.success,
    warning: commonValues.warning,
    error: commonValues.error,
    info: commonValues.info,

    // 배경 색상 (라이트 모드)
    background: {
      default: '#FFFFFF', // 기본 배경색 (흰색)
      paper: '#F9FAFB', // 카드/종이 배경색 (매우 옅은 회색)
      subtle: '#F3F4F6' // 미묘한 배경색 (옅은 회색)
    },

    // 텍스트 색상 (라이트 모드)
    text: {
      primary: '#111827', // 기본 텍스트 색상 (거의 검정)
      secondary: '#4B5563', // 보조 텍스트 색상 (어두운 회색)
      disabled: '#9CA3AF', // 비활성화된 텍스트 색상 (중간 회색)
      hint: '#6B7280' // 힌트 텍스트 색상 (회색)
    },

    // 테두리 색상 (라이트 모드)
    border: {
      default: '#E5E7EB', // 기본 테두리 색상 (밝은 회색)
      focus: commonValues.primary, // 포커스 테두리 색상 (오렌지)
      subtle: '#F3F4F6' // 미묘한 테두리 색상 (매우 옅은 회색)
    },

    // 버튼 색상 (라이트 모드)
    button: {
      primary: {
        background: commonValues.primary, // 기본 버튼 배경색 (오렌지)
        text: commonValues.primaryButtonText, // 기본 버튼 텍스트 색상 (흰색)
        hover: commonValues.primaryButtonHover, // 기본 버튼 호버 색상 (진한 오렌지)
        active: commonValues.primaryButtonActive // 기본 버튼 활성 색상 (더 진한 오렌지)
      },
      secondary: {
        background: '#FFFFFF', // 보조 버튼 배경색 (흰색)
        text: commonValues.primary, // 보조 버튼 텍스트 색상 (오렌지)
        hover: '#FFF8F3', // 보조 버튼 호버 색상 (매우 옅은 오렌지)
        active: '#FFE8D9' // 보조 버튼 활성 색상 (옅은 오렌지)
      },
      tertiary: {
        background: 'transparent', // 세 번째 버튼 배경색 (투명)
        text: '#4B5563', // 세 번째 버튼 텍스트 색상 (회색)
        hover: '#F3F4F6', // 세 번째 버튼 호버 색상 (매우 옅은 회색)
        active: '#E5E7EB' // 세 번째 버튼 활성 색상 (옅은 회색)
      }
    },

    shadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  },

  typography: {
    fontFamily: commonValues.fontFamily,
    fontSize: commonValues.fontSize,
    fontWeight: commonValues.fontWeight,
    lineHeight: commonValues.lineHeight
  },

  spacing: commonValues.spacing,
  borderRadius: commonValues.borderRadius,
  motion: commonValues.motion,
  breakpoints: commonValues.breakpoints,
  zIndex: commonValues.zIndex
});

// 다크 테마 정의
export const darkThemeClass = createTheme(themeContract, {
  color: {
    // 브랜드 색상
    primary: commonValues.primary,
    secondary: commonValues.secondary,
    tertiary: '#7C3A12', // 세 번째 브랜드 색상 (어두운 오렌지)

    // 상태 색상
    success: commonValues.success,
    warning: commonValues.warning,
    error: commonValues.error,
    info: commonValues.info,

    // 배경 색상 (다크 모드)
    background: {
      default: '#111827', // 기본 배경색 (어두운 회색)
      paper: '#1F2937', // 카드/종이 배경색 (진한 회색)
      subtle: '#374151' // 미묘한 배경색 (중간 회색)
    },

    // 텍스트 색상 (다크 모드)
    text: {
      primary: '#F9FAFB', // 기본 텍스트 색상 (거의 흰색)
      secondary: '#D1D5DB', // 보조 텍스트 색상 (밝은 회색)
      disabled: '#6B7280', // 비활성화된 텍스트 색상 (중간 회색)
      hint: '#9CA3AF' // 힌트 텍스트 색상 (회색)
    },

    // 테두리 색상 (다크 모드)
    border: {
      default: '#374151', // 기본 테두리 색상 (진한 회색)
      focus: commonValues.primary, // 포커스 테두리 색상 (오렌지)
      subtle: '#1F2937' // 미묘한 테두리 색상 (진한 회색)
    },

    // 버튼 색상 (다크 모드)
    button: {
      primary: {
        background: commonValues.primary, // 기본 버튼 배경색 (오렌지)
        text: commonValues.primaryButtonText, // 기본 버튼 텍스트 색상 (흰색)
        hover: commonValues.primaryButtonHover, // 기본 버튼 호버 색상 (진한 오렌지)
        active: commonValues.primaryButtonActive // 기본 버튼 활성 색상 (더 진한 오렌지)
      },
      secondary: {
        background: '#374151', // 보조 버튼 배경색 (진한 회색)
        text: commonValues.primary, // 보조 버튼 텍스트 색상 (오렌지)
        hover: '#4B5563', // 보조 버튼 호버 색상 (중간 회색)
        active: '#6B7280' // 보조 버튼 활성 색상 (회색)
      },
      tertiary: {
        background: 'transparent', // 세 번째 버튼 배경색 (투명)
        text: '#D1D5DB', // 세 번째 버튼 텍스트 색상 (밝은 회색)
        hover: '#374151', // 세 번째 버튼 호버 색상 (진한 회색)
        active: '#4B5563' // 세 번째 버튼 활성 색상 (중간 회색)
      }
    },

    shadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
    }
  },

  typography: {
    fontFamily: commonValues.fontFamily,
    fontSize: commonValues.fontSize,
    fontWeight: commonValues.fontWeight,
    lineHeight: commonValues.lineHeight
  },

  spacing: commonValues.spacing,
  borderRadius: commonValues.borderRadius,
  motion: commonValues.motion,
  breakpoints: commonValues.breakpoints,
  zIndex: commonValues.zIndex
});

// 컴포넌트에서 사용할 때는 themeContract를 export하여 사용
export const vars = themeContract;
