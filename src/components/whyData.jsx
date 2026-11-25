import { Globe2, Users, Sprout } from 'lucide-react';
import card1 from '../assets/WhyChooseCardImage.png';
import card2 from '../assets/WhyChooseCradImage2.png';
import card3 from '../assets/WhyChooseCardImage3.png';

// Content for the "Why Choose Recommerce" layouts.
// Feature 1 keeps the original sentence; 2 and 3 are based on the Mission text.
export const features = [
  {
    id: 1,
    no: '01',
    title: 'Circular Economy Pioneers',
    description:
      'Recommerce leads the charge in fostering a circular economy, transforming waste into valuable resources.',
    Icon: Globe2,
    image: card1,
  },
  {
    id: 2,
    no: '02',
    title: 'Expertise-Driven Events',
    description:
      'Recommerce’s subject-oriented, theme-based events are powered by expert market analysis and research, amplifying business and communication strategies.',
    Icon: Users,
    star: true,
    image: card2,
  },
  {
    id: 3,
    no: '03',
    title: 'Positive Impact',
    description:
      'By engaging with Recommerce, you’re joining a movement that contributes to a cleaner, more sustainable future, leaving a positive legacy for generations to come.',
    Icon: Sprout,
    image: card3,
  },
];
