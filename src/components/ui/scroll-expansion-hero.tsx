import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import './scroll-expansion-hero.css';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

// Share of the scroll track used to expand the media. The rest of the track
// keeps it full-screen for a moment before the page moves on.
const EXPAND_END = 0.7;

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Normal page scrolling drives the animation: no wheel/touch hijacking, so
  // keyboard, scrollbar, touch momentum and anchor links all behave natively.
  // Progress is written straight to a CSS variable, so React doesn't re-render
  // on every scroll frame.
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let frame = 0;

    const update = (): void => {
      frame = 0;
      const total = track.offsetHeight - window.innerHeight;
      const scrolled = -track.getBoundingClientRect().top;
      const raw = total > 0 ? scrolled / total : 1;
      const progress = Math.min(Math.max(raw / EXPAND_END, 0), 1);
      stage.style.setProperty('--p', progress.toFixed(4));
    };

    const onScroll = (): void => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  const shade = (
    <div
      className='seh-shade absolute inset-0 bg-gradient-to-t from-[rgba(5,25,30,0.45)] to-[rgba(5,25,30,0.15)]'
    />
  );

  return (
    <div>
      <div ref={trackRef} className='seh-track'>
        <div
          ref={stageRef}
          className='seh-stage'
          style={{ '--tx': isMobile ? 180 : 150 } as CSSProperties}
        >
          <div className='seh-bg absolute inset-0 z-0'>
            <img
              src={bgImageSrc}
              alt=''
              width={1920}
              height={1080}
              className='w-full h-full'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              loading='eager'
            />
            <div
              className='absolute inset-0'
              style={{
                background:
                  'radial-gradient(circle at center, rgba(5, 25, 30, 0.3) 0%, rgba(5, 9, 27, 0.45) 100%)',
              }}
            />
          </div>

          <div className='relative z-10 flex h-full w-full flex-col items-center justify-center'>
            <div className='seh-media'>
              {mediaType === 'video' ? (
                mediaSrc.includes('youtube.com') ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={
                        mediaSrc.includes('embed')
                          ? mediaSrc +
                            (mediaSrc.includes('?') ? '&' : '?') +
                            'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                          : mediaSrc.replace('watch?v=', 'embed/') +
                            '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                            mediaSrc.split('v=')[1]
                      }
                      className='w-full h-full'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                    {shade}
                  </div>
                ) : (
                  <div className='relative w-full h-full pointer-events-none'>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover'
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                    {shade}
                  </div>
                )
              ) : (
                <div className='relative w-full h-full'>
                  <img
                    src={mediaSrc}
                    alt={title || 'Media content'}
                    width={1280}
                    height={720}
                    className='w-full h-full object-cover'
                  />
                  {shade}
                </div>
              )}
            </div>

            <div
              className={`relative z-10 flex w-full flex-col items-center justify-center gap-2 text-center md:gap-4 ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
            >
              <div className='overflow-hidden py-1'>
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                  <h2 className='seh-move-left font-manrope text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#F4FAFF] leading-[0.95] tracking-[-1.5px] md:tracking-[-3px] uppercase select-none'>
                    {firstWord}
                  </h2>
                </motion.div>
              </div>
              <div className='overflow-hidden py-1'>
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                >
                  <h2 className='seh-move-right font-manrope text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#F4FAFF] leading-[0.95] tracking-[-1.5px] md:tracking-[-3px] uppercase select-none'>
                    {restOfTitle}
                  </h2>
                </motion.div>
              </div>
            </div>

            <motion.div
              className='pointer-events-none absolute bottom-8 z-10 flex flex-col items-center text-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              {date && (
                <p className='seh-move-left font-inter mb-2 text-lg font-medium uppercase tracking-[0.05em] text-[#E3F2F3] md:text-xl lg:text-2xl'>
                  {date}
                </p>
              )}
              {scrollToExpand && (
                <p className='seh-move-right font-inter text-xs font-medium uppercase tracking-[0.12em] text-[#DDF4EE] md:text-sm'>
                  {scrollToExpand}
                </p>
              )}
              <div className='seh-hint mt-3 flex flex-col items-center'>
                <div className='relative h-9 w-[1.5px] overflow-hidden rounded-full bg-gradient-to-b from-[#8FE3C0] to-transparent'>
                  <motion.div
                    className='absolute left-0 top-0 h-3 w-full rounded-full bg-[#8FE3C0]'
                    animate={{ y: [0, 28, 0] }}
                    transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {children && (
        <section className='flex w-full flex-col px-8 py-10 md:px-16 lg:py-20'>
          <div className='container mx-auto'>{children}</div>
        </section>
      )}
    </div>
  );
};

export default ScrollExpandMedia;
