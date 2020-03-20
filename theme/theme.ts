const light = {
  foreground: '#000',
  background: '#fff',
  accents1: '#666',
  transition: 'var(--transition)'
};

const dark = {
  foreground: '#fff',
  background: '#000',
  accents1: '#828282',
  transition: 'var(--transition)'
};

const defaultTheme = {
  fontSans:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  transition: 'all 750ms',
  pageMargin: 'calc(64pt - 1px)',
  pageMarginMedium: 'calc(34pt - 1px)'
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
