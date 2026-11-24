import { ImageAutoSlider } from './ui/image-auto-slider';
import './Gallery.css';

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`;

const galleryImages = [
  { url: img('1540575467063-178a50c2df87'), alt: 'Audience watching a speaker at a summit', title: 'Sustainability Summit 2024', category: 'Events' },
  { url: img('1515187029135-18ee286d815b'), alt: 'A group of people in a workshop discussion', title: 'Team Collaboration Workshop', category: 'Workshops' },
  { url: img('1497366216548-37526070297c'), alt: 'A bright modern office corridor', title: 'Green Innovation Hub', category: 'Office' },
  { url: img('1559136555-9303baea8ebd'), alt: 'People working at tables in a loft office', title: 'Circular Economy Expo', category: 'Events' },
  { url: img('1497215728101-856f4ea42174'), alt: 'A desk with a laptop beside a tall window', title: 'Modern Workspace', category: 'Office' },
  { url: img('1552664730-d307ca884978'), alt: 'A team planning with sticky notes on a wall', title: 'Team Building Activity', category: 'Team' },
  { url: img('1517245386807-bb43f82c33c4'), alt: 'Hands gesturing over a laptop during training', title: 'Training Session', category: 'Workshops' },
  { url: img('1497366811353-6870744d04b2'), alt: 'A meeting room with a long table and large windows', title: 'Sustainable Office Design', category: 'Office' },
  { url: img('1505373877841-8d25f7d46678'), alt: 'A presenter on a large stage in front of an audience', title: 'Conference Presentation', category: 'Events' },
];

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
          Explore our journey through images showcasing events, teamwork, and sustainability in action.
        </p>
      </div>

      <ImageAutoSlider images={galleryImages} duration={45} />
    </section>
  );
}
