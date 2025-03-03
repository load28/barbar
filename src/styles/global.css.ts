import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@bb-styles/theme.css';

// 기본 리셋 및 기본 스타일 설정
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box'
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.md,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.default,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  transition: 'background-color 0.3s, color 0.3s'
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.typography.fontFamily.heading,
  margin: 0,
  fontWeight: vars.typography.fontWeight.bold,
  lineHeight: vars.typography.lineHeight.tight,
  color: vars.color.text.primary
});

globalStyle('h1', {
  fontSize: vars.typography.fontSize['2xl']
});

globalStyle('h2', {
  fontSize: vars.typography.fontSize.xl
});

globalStyle('h3', {
  fontSize: vars.typography.fontSize.lg
});

globalStyle('p', {
  margin: `${vars.spacing.spacing2} 0`
});

// 링크 스타일
globalStyle('a', {
  color: vars.color.primary,
  textDecoration: 'none',
  transition: 'color 0.2s'
});

// 링크 호버 상태
globalStyle('a:hover', {
  textDecoration: 'underline'
});

globalStyle('button', {
  cursor: 'pointer',
  fontFamily: 'inherit'
});

globalStyle('input, textarea, select', {
  fontFamily: 'inherit',
  fontSize: 'inherit'
});

// 모바일 최적화
globalStyle('input, textarea', {
  appearance: 'none',
  WebkitAppearance: 'none',
  borderRadius: 0
});

// 포커스 스타일
globalStyle('input:focus, textarea:focus, select:focus', {
  outline: 'none'
});

// 앱 컨테이너 (모바일 최적화)
globalStyle('#__next, #root', {
  maxWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});

// 접근성 관련 스타일
globalStyle(':focus-visible', {
  outline: `2px solid ${vars.color.border.focus}`,
  outlineOffset: '2px'
});

// 스크롤바 스타일링
globalStyle('::-webkit-scrollbar', {
  width: '6px',
  height: '6px'
});

globalStyle('::-webkit-scrollbar-track', {
  background: vars.color.background.subtle
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: vars.color.text.disabled,
  borderRadius: vars.borderRadius.full
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  background: vars.color.text.secondary
});
