import './image-auto-slider.css';

export interface SliderImage {
  url: string;
  alt: string;
  title?: string;
  category?: string;
}

interface ImageAutoSliderProps {
  images: SliderImage[];
  /** Seconds for one full pass through all the images. */
  duration?: number;
  className?: string;
}

/**
 * An endless, auto-scrolling row of images. The list is rendered twice and the
 * track slides left by exactly one list's width, so the loop never jumps.
 * It pauses on hover, and with "reduce motion" on it becomes a swipeable row.
 */
export function ImageAutoSlider({ images, duration = 40, className = '' }: ImageAutoSliderProps) {
  return (
    <div className={`ias ${className}`} role="region" aria-label="Photo gallery">
      <div className="ias-track" style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((copy) =>
          images.map((img, i) => (
            <figure
              key={`${copy}-${i}`}
              className="ias-item"
              // the second copy only exists for the loop, so hide it from screen readers
              aria-hidden={copy === 1 ? true : undefined}
            >
              <img
                src={img.url}
                alt={copy === 1 ? '' : img.alt}
                className="ias-img"
                loading="lazy"
                draggable={false}
              />
              {(img.title || img.category) && (
                <figcaption className="ias-caption">
                  {img.category && <span className="ias-tag">{img.category}</span>}
                  {img.title && <h3>{img.title}</h3>}
                </figcaption>
              )}
            </figure>
          ))
        )}
      </div>
    </div>
  );
}

export default ImageAutoSlider;
