import { style } from '@vanilla-extract/css';
import { vars } from '@bb-styles/theme.css';

export const loginContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: vars.spacing[4],
  backgroundColor: vars.color.background.default
});

export const logo = style({
  width: '80px',
  height: '80px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.color.primary,
  color: vars.color.button.primary.text,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  marginBottom: vars.spacing[6]
});

export const appTitle = style({
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  margin: 0,
  marginBottom: vars.spacing[2],
  color: vars.color.text.primary
});

export const appDescription = style({
  fontSize: vars.typography.fontSize.md,
  textAlign: 'center',
  color: vars.color.text.secondary,
  marginBottom: vars.spacing[8],
  maxWidth: '280px'
});

export const kakaoButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '320px',
  height: '48px',
  backgroundColor: '#FEE500', // 카카오 브랜드 색상
  color: '#000000',
  fontWeight: vars.typography.fontWeight.medium,
  fontSize: vars.typography.fontSize.md,
  borderRadius: vars.borderRadius.xl,
  border: 'none',
  cursor: 'pointer',
  marginBottom: vars.spacing[3],
  transition: `opacity ${vars.motion.duration.fast} ${vars.motion.easing.easeInOut}`,

  ':hover': {
    opacity: 0.9
  },

  ':active': {
    opacity: 0.8
  }
});

export const termsText = style({
  fontSize: vars.typography.fontSize.xs,
  color: vars.color.text.hint,
  textAlign: 'center',
  marginTop: vars.spacing[8],
  maxWidth: '280px'
});
