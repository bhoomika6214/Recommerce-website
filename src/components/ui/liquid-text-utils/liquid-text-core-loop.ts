import { useEffect, useRef, type RefObject } from 'react';

/**
 * Calls `frame(dtSeconds)` every animation frame, but only while the element is
 * on screen and the browser tab is visible, so it costs nothing otherwise.
 */
export function useVisibleLoop(
  ref: RefObject<HTMLElement | null>,
  frame: (dt: number) => void,
  { enabled = true }: { enabled?: boolean } = {}
) {
  const frameRef = useRef(frame);
  useEffect(() => {
    frameRef.current = frame;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let raf = 0;
    let last = 0;
    let onScreen = true;

    const tick = (now: number) => {
      // cap dt so a long pause (tab switch) doesn't make the simulation jump
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      frameRef.current(dt);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (raf || !onScreen || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    observer.observe(el);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    start();
    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [ref, enabled]);
}
