import type { BjorkTone } from './liquid-text-core-palette';

/** Picks the tone to use. An explicit `tone` wins; otherwise it assumes a dark background. */
export function useBjorkTone(tone?: BjorkTone): BjorkTone {
  return tone ?? 'dark';
}
