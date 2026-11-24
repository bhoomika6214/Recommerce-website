import { ImageAutoSlider } from './ui/image-auto-slider';
import './Gallery.css';

// Web-sized copies (1000px, WebP) of the photos in src/assets/gallery.
// Every .webp in these two folders is picked up automatically, so to add or
// remove a photo you only add or remove a file.
const expoPhotos = import.meta.glob('../assets/gallery-web/6thRecommerce/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});
const itadPhotos = import.meta.glob('../assets/gallery-web/itad/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

const toList = (files, meta) =>
  Object.keys(files)
    .sort()
    .map((path) => ({ url: files[path], ...meta }));

const expo = toList(expoPhotos, {
  alt: 'A moment from the 6th Recommerce Expo',
  title: '6th Recommerce Expo',
  category: 'Recommerce Expo',
});
const itad = toList(itadPhotos, {
  alt: 'A moment from the ITAD & WEEE Global Leaders Meet',
  title: 'ITAD & WEEE Global Leaders Meet',
  category: 'ITAD & WEEE',
});

// Alternate between the two events so the strip stays varied.
const galleryImages = [];
for (let i = 0; i < Math.max(expo.length, itad.length); i++) {
  if (expo[i]) galleryImages.push(expo[i]);
  if (itad[i]) galleryImages.push(itad[i]);
}

export default function Gallery() {
  return (
    <section className="gl" id="gallery" aria-label="Gallery">
      <div className="gl-head">
        <div className="gl-eyebrow">
          <span className="gl-eyebrow-line" />
          OUR GALLERY
          <span className="gl-eyebrow-line" />
        </div>
        <h2 className="gl-heading">
          Capturing <span className="gl-accent">Moments</span> of Impact
        </h2>
        <p className="gl-sub">
          Highlights from the 6th Recommerce Expo and the ITAD &amp; WEEE Global Leaders Meet.
        </p>
      </div>

      {/* about 7 seconds per photo keeps the scroll speed gentle */}
      <ImageAutoSlider images={galleryImages} duration={galleryImages.length * 7} />
    </section>
  );
}
