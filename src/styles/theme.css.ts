import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { orange, gray, state } from './colors.css';

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
    'spacing0': null,
    'spacing1': null,
    'spacing2': null,
    'spacing3': null,
    'spacing4': null,
    'spacing5': null,
    'spacing6': null,
    'spacing8': null,
    'spacing10': null,
    'spacing12': null,
    'spacing16': null,
    'spacing20': null,
    'spacing24': null,
    'spacing32': null,
    'spacing40': null,
    'spacing48': null,
    'spacing64': null,
    'spacing80': null,
    'spacing96': null,
    'spacing128': null
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
    'spacing0': '0',
    'spacing1': '0.25rem', // 4px
    'spacing2': '0.5rem', // 8px
    'spacing3': '0.75rem', // 12px
    'spacing4': '1rem', // 16px
    'spacing5': '1.25rem', // 20px
    'spacing6': '1.5rem', // 24px
    'spacing8': '2rem', // 32px
    'spacing10': '2.5rem', // 40px
    'spacing12': '3rem', // 48px
    'spacing16': '4rem', // 64px
    'spacing20': '5rem', // 80px
    'spacing24': '6rem', // 96px
    'spacing32': '8rem', // 128px
    'spacing40': '10rem', // 160px
    'spacing48': '12rem', // 192px
    'spacing64': '16rem', // 256px
    'spacing80': '20rem', // 320px
    'spacing96': '24rem', // 384px
    'spacing128': '32rem' // 512px
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
    primary: orange[600],
    secondary: orange[500],
    tertiary: orange[200],

    // 상태 색상
    success: state.success.base,
    warning: state.warning.base,
    error: state.error.base,
    info: state.info.base,

    // 배경 색상 (라이트 모드)
    background: {
      default: gray[0],
      paper: gray[50],
      subtle: gray[100]
    },

    // 텍스트 색상 (라이트 모드)
    text: {
      primary: gray[900],
      secondary: gray[600],
      disabled: gray[400],
      hint: gray[500]
    },

    // 테두리 색상 (라이트 모드)
    border: {
      default: gray[200],
      focus: orange[600],
      subtle: gray[100]
    },

    // 버튼 색상 (라이트 모드)
    button: {
      primary: {
        background: orange[600],
        text: gray[0],
        hover: orange[700],
        active: orange[800]
      },
      secondary: {
        background: gray[0],
        text: orange[600],
        hover: orange[50],
        active: orange[100]
      },
      tertiary: {
        background: 'transparent',
        text: gray[600],
        hover: gray[100],
        active: gray[200]
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
    primary: orange[600],
    secondary: orange[500],
    tertiary: orange[900],

    // 상태 색상
    success: state.success.base,
    warning: state.warning.base,
    error: state.error.base,
    info: state.info.base,

    // 배경 색상 (다크 모드)
    background: {
      default: gray[900],
      paper: gray[800],
      subtle: gray[700]
    },

    // 텍스트 색상 (다크 모드)
    text: {
      primary: gray[50],
      secondary: gray[300],
      disabled: gray[500],
      hint: gray[400]
    },

    // 테두리 색상 (다크 모드)
    border: {
      default: gray[700],
      focus: orange[600],
      subtle: gray[800]
    },

    // 버튼 색상 (다크 모드)
    button: {
      primary: {
        background: orange[600],
        text: gray[0],
        hover: orange[700],
        active: orange[800]
      },
      secondary: {
        background: gray[700],
        text: orange[600],
        hover: gray[600],
        active: gray[500]
      },
      tertiary: {
        background: 'transparent',
        text: gray[300],
        hover: gray[700],
        active: gray[600]
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
