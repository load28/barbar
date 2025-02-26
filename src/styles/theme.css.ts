import { createGlobalTheme, createTheme } from '@vanilla-extract/css';

// 기본 테마 변수 정의
const themeVars = createGlobalTheme(':root', {
  color: {
    // 브랜드 색상
    primary: '#FF6B00',        // 주 브랜드 색상 (오렌지)
    secondary: '#FF9E5C',      // 보조 브랜드 색상 (밝은 오렌지)
    tertiary: '#FFD6B8',       // 세 번째 브랜드 색상 (매우 옅은 오렌지)

    // 상태 색상
    success: '#22C55E',        // 성공 상태 색상 (녹색)
    warning: '#F59E0B',        // 경고 상태 색상 (황색)
    error: '#EF4444',          // 오류 상태 색상 (적색)
    info: '#3B82F6',           // 정보 상태 색상 (청색)

    // 배경 색상 (라이트 모드)
    background: {
      default: '#FFFFFF',      // 기본 배경색 (흰색)
      paper: '#F9FAFB',        // 카드/종이 배경색 (매우 옅은 회색)
      subtle: '#F3F4F6'       // 미묘한 배경색 (옅은 회색)
    },

    // 텍스트 색상 (라이트 모드)
    text: {
      primary: '#111827',      // 기본 텍스트 색상 (거의 검정)
      secondary: '#4B5563',    // 보조 텍스트 색상 (어두운 회색)
      disabled: '#9CA3AF',     // 비활성화된 텍스트 색상 (중간 회색)
      hint: '#6B7280'         // 힌트 텍스트 색상 (회색)
    },

    // 테두리 색상 (라이트 모드)
    border: {
      default: '#E5E7EB',      // 기본 테두리 색상 (밝은 회색)
      focus: '#FF6B00',        // 포커스 테두리 색상 (오렌지)
      subtle: '#F3F4F6'       // 미묘한 테두리 색상 (매우 옅은 회색)
    },

    // 버튼 색상 (라이트 모드)
    button: {
      primary: {
        background: '#FF6B00',  // 기본 버튼 배경색 (오렌지)
        text: '#FFFFFF',        // 기본 버튼 텍스트 색상 (흰색)
        hover: '#E95800',       // 기본 버튼 호버 색상 (진한 오렌지)
        active: '#D45000'      // 기본 버튼 활성 색상 (더 진한 오렌지)
      },
      secondary: {
        background: '#FFFFFF',  // 보조 버튼 배경색 (흰색)
        text: '#FF6B00',        // 보조 버튼 텍스트 색상 (오렌지)
        hover: '#FFF8F3',       // 보조 버튼 호버 색상 (매우 옅은 오렌지)
        active: '#FFE8D9'      // 보조 버튼 활성 색상 (옅은 오렌지)
      },
      tertiary: {
        background: 'transparent',  // 세 번째 버튼 배경색 (투명)
        text: '#4B5563',            // 세 번째 버튼 텍스트 색상 (회색)
        hover: '#F3F4F6',           // 세 번째 버튼 호버 색상 (매우 옅은 회색)
        active: '#E5E7EB'          // 세 번째 버튼 활성 색상 (옅은 회색)
      }
    }
  },

  typography: {
    fontFamily: {
      base: '\'Pretendard\', \'Noto Sans KR\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif',
      heading: '\'Pretendard\', \'Noto Sans KR\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      md: '1rem',      // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
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
    }
  },

  spacing: {
    '0': '0',
    '1': '0.25rem',    // 4px
    '2': '0.5rem',     // 8px
    '3': '0.75rem',    // 12px
    '4': '1rem',       // 16px
    '5': '1.25rem',    // 20px
    '6': '1.5rem',     // 24px
    '8': '2rem',       // 32px
    '10': '2.5rem',    // 40px
    '12': '3rem',      // 48px
    '16': '4rem',      // 64px
    '20': '5rem',      // 80px
    '24': '6rem',      // 96px
    '32': '8rem',      // 128px
    '40': '10rem',     // 160px
    '48': '12rem',     // 192px
    '64': '16rem',     // 256px
    '80': '20rem',     // 320px
    '96': '24rem',     // 384px
    '128': '32rem'    // 512px
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    md: '0.25rem',     // 4px
    lg: '0.5rem',      // 8px
    xl: '1rem',        // 16px
    full: '9999px'
  },

  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },

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

  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px'
  },

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
});

// 다크 테마 정의
export const darkThemeClass = createTheme({
  color: {
    // 브랜드 색상
    primary: themeVars.color.primary,
    secondary: themeVars.color.secondary,
    tertiary: '#7C3A12',       // 세 번째 브랜드 색상 (어두운 오렌지)

    // 상태 색상
    success: themeVars.color.success,
    warning: themeVars.color.warning,
    error: themeVars.color.error,
    info: themeVars.color.info,

    // 배경 색상 (다크 모드)
    background: {
      default: '#111827',      // 기본 배경색 (어두운 회색)
      paper: '#1F2937',        // 카드/종이 배경색 (진한 회색)
      subtle: '#374151'       // 미묘한 배경색 (중간 회색)
    },

    // 텍스트 색상 (다크 모드)
    text: {
      primary: '#F9FAFB',      // 기본 텍스트 색상 (거의 흰색)
      secondary: '#D1D5DB',    // 보조 텍스트 색상 (밝은 회색)
      disabled: '#6B7280',     // 비활성화된 텍스트 색상 (중간 회색)
      hint: '#9CA3AF'         // 힌트 텍스트 색상 (회색)
    },

    // 테두리 색상 (다크 모드)
    border: {
      default: '#374151',      // 기본 테두리 색상 (진한 회색)
      focus: themeVars.color.primary,  // 포커스 테두리 색상 (오렌지)
      subtle: '#1F2937'       // 미묘한 테두리 색상 (진한 회색)
    },

    // 버튼 색상 (다크 모드)
    button: {
      primary: {
        background: themeVars.color.primary,  // 기본 버튼 배경색 (오렌지)
        text: themeVars.color.button.primary.text,  // 기본 버튼 텍스트 색상 (흰색)
        hover: themeVars.color.button.primary.hover,  // 기본 버튼 호버 색상 (진한 오렌지)
        active: themeVars.color.button.primary.active  // 기본 버튼 활성 색상 (더 진한 오렌지)
      },
      secondary: {
        background: '#374151',  // 보조 버튼 배경색 (진한 회색)
        text: themeVars.color.primary,  // 보조 버튼 텍스트 색상 (오렌지)
        hover: '#4B5563',       // 보조 버튼 호버 색상 (중간 회색)
        active: '#6B7280'      // 보조 버튼 활성 색상 (회색)
      },
      tertiary: {
        background: 'transparent',  // 세 번째 버튼 배경색 (투명)
        text: '#D1D5DB',            // 세 번째 버튼 텍스트 색상 (밝은 회색)
        hover: '#374151',           // 세 번째 버튼 호버 색상 (진한 회색)
        active: '#4B5563'          // 세 번째 버튼 활성 색상 (중간 회색)
      }
    }
  },

  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
  }
});

// vars는 기본 테마 변수를 그대로 사용
export const vars = themeVars;
