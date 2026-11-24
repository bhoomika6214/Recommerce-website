import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, type MotionValue, type Variants } from 'framer-motion';
import './motion-cursor-multifollow.css';

/**
 * A site-wide cursor: a small dot plus three rings that trail behind it, each
 * a little slower than the last. All in brand blue, the rings getting lighter as they trail.
 *
 * - grows over anything clickable
 * - squeezes while the mouse button is held
 * - only runs with a real mouse (not touch) and not when "reduce motion" is on
 */

type Kind = 'default' | 'hover' | 'pressed';

// Anything the pointer can click or type into
const INTERACTIVE =
  'a, button, summary, input, select, textarea, label, [role="button"], [role="tab"], [data-cursor-hover]';

interface LayerProps {
  px: MotionValue<number>;
  py: MotionValue<number>;
  size: number;
  stiffness: number;
  damping: number;
  kind: Kind;
  variants: Variants;
  className: string;
}

function Layer({ px, py, size, stiffness, damping, kind, variants, className }: LayerProps) {
  const x = useSpring(px, { stiffness, damping });
  const y = useSpring(py, { stiffness, damping });

  return (
    <motion.div
      className={`mc ${className}`}
      initial={false}
      animate={kind}
      variants={variants}
      style={{
        x,
        y,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
    />
  );
}

export function CursorMultifollow() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [kind, setKind] = useState<Kind>('default');

  const px = useMotionValue(-100);
  const py = useMotionValue(-100);

  // Only for a real mouse, and only if the visitor hasn't asked for less motion
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(finePointer.matches && !reduced.matches);
    update();
    finePointer.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      finePointer.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let pressed = false;
    let hovering = false;
    const sync = () => setKind(pressed ? 'pressed' : hovering ? 'hover' : 'default');

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      px.set(e.clientX);
      py.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      const next = !!el?.closest(INTERACTIVE);
      if (next !== hovering) {
        hovering = next;
        sync();
      }
    };
    const onDown = () => {
      pressed = true;
      sync();
    };
    const onUp = () => {
      pressed = false;
      sync();
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    // hide the system arrow: the dot takes its place
    document.documentElement.classList.add('mc-on');

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      document.documentElement.classList.remove('mc-on');
    };
  }, [enabled, px, py]);

  if (!enabled) return null;

  return (
    <div className={`mc-root ${visible ? 'mc-root--visible' : ''}`} aria-hidden="true">
      <Layer
        px={px}
        py={py}
        size={8}
        stiffness={900}
        damping={55}
        kind={kind}
        className="mc-dot"
        variants={{
          default: { scale: 1 },
          hover: { scale: 0.45 },
          pressed: { scale: 0.6 },
        }}
      />
      <Layer
        px={px}
        py={py}
        size={18}
        stiffness={1000}
        damping={50}
        kind={kind}
        className="mc-ring mc-ring--1"
        variants={{
          default: { scale: 1, borderColor: '#009bff', backgroundColor: 'rgba(0, 155, 255, 0)' },
          hover: { scale: 1.9, borderColor: '#009bff', backgroundColor: 'rgba(0, 155, 255, 0.14)' },
          pressed: { scale: 0.65, borderColor: '#0077cc', backgroundColor: 'rgba(0, 155, 255, 0)' },
        }}
      />
      <Layer
        px={px}
        py={py}
        size={28}
        stiffness={800}
        damping={70}
        kind={kind}
        className="mc-ring mc-ring--2"
        variants={{
          default: { scale: 1, borderColor: '#4db8ff' },
          hover: { scale: 1.5, borderColor: '#4db8ff' },
          pressed: { scale: 0.75, borderColor: '#009bff' },
        }}
      />
      <Layer
        px={px}
        py={py}
        size={38}
        stiffness={700}
        damping={90}
        kind={kind}
        className="mc-ring mc-ring--3"
        variants={{
          default: { scale: 1, borderColor: '#8fd3ff' },
          hover: { scale: 1.3, borderColor: '#8fd3ff' },
          pressed: { scale: 0.85, borderColor: '#4db8ff' },
        }}
      />
    </div>
  );
}

export default CursorMultifollow;
