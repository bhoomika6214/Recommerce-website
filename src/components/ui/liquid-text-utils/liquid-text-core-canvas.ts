import { useEffect, useState, type RefObject } from 'react';

/** Highest device-pixel-ratio the canvas will render at (keeps the shader cheap on 3x phones). */
export function defaultMaxDpr(): number {
  return 2;
}

/**
 * Sizes a canvas to `cssW` x `cssH` CSS pixels, backed by `dpr` times as many
 * real pixels so it stays sharp on high-density screens. Returns the dpr used.
 */
export function sizeCanvas(
  canvas: HTMLCanvasElement,
  cssW: number,
  cssH: number,
  maxDpr: number
): number {
  const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, maxDpr));
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  canvas.style.width = `${cssW}px`;
  canvas.style.height = `${cssH}px`;
  return dpr;
}

/** Tracks an element's size in whole CSS pixels. */
export function useElementSize(ref: RefObject<HTMLElement | null>): { width: number; height: number } {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (w: number, h: number) => {
      const width = Math.round(w);
      const height = Math.round(h);
      setSize((prev) => (prev.width === width && prev.height === height ? prev : { width, height }));
    };

    const rect = el.getBoundingClientRect();
    update(rect.width, rect.height);

    const observer = new ResizeObserver(([entry]) => {
      update(entry.contentRect.width, entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
