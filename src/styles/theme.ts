export const theme = {
  colors: {
    primary: '#4f46e5',
    secondary: '#7c3aed',
    accent: '#06b6d4',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    surfaceLight: '#2a2a2a',
    text: '#ffffff',
    textMuted: '#9ca3af',
    border: '#2a2a2a',
  },
  fonts: {
    heading: "'Segoe UI', sans-serif",
    body: "'Segoe UI', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
};

export type Theme = typeof theme;
