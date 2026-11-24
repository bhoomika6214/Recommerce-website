export type BjorkTone = 'light' | 'dark';

// Default ink colours for each tone. "dark" means a dark background, so the ink is light.
export const BJORK_PALETTE: Record<BjorkTone, { text: string; background: string }> = {
  dark: { text: '#ededed', background: '#0a0a0a' },
  light: { text: '#171717', background: '#fafafa' },
};
