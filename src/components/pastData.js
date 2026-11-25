// Shared edition data for every Past Events layout.
// One entry per event series; every edition is a card. To fill in a missing date or venue,
// add `date` / `venue` to that edition. `held` is the number of editions held so far.

// Web-sized event photos (see src/assets/gallery-web).
const expoFiles = import.meta.glob('../assets/gallery-web/6thRecommerce/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});
const itadFiles = import.meta.glob('../assets/gallery-web/itad/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});
const expoPhoto = (name) => expoFiles[`../assets/gallery-web/6thRecommerce/${name}.webp`];
const itadPhoto = (name) => itadFiles[`../assets/gallery-web/itad/${name}.webp`];

/*
 * One entry per event series, in the order of the folders. Every edition becomes a card.
 * Only facts that are readable in the post-show reports are filled in; an edition with
 * no date or venue yet simply shows its number. To fill one in, add `date` / `venue`.
 *
 *   held: how many editions have been held, or null while that isn't confirmed.
 */
export const SERIES = [
  {
    id: 'textile',
    name: 'Textile',
    title: 'Sustainable Clothing & Textile Recycling Conference',
    held: 4, // the latest edition so far is the 4th
    editions: [
      {
        no: 1,
        date: '30 Apr, 2021',
        venue: 'Online',
        note: 'Online conference supported by MoEFCC, MeitY, BIS and Digital India.',
        image: expoPhoto('urs_4226'),
      },
      { no: 2, image: expoPhoto('urs_4413') },
      {
        no: 3,
        date: '10 Aug, 2022',
        venue: 'The Residency Towers, Coimbatore',
        note: 'With Kianna Media Ventures. Supported by MeitY, Government of India.',
        image: expoPhoto('urs_4256'),
      },
      {
        no: 4,
        date: '19 Oct, 2022',
        time: '9 AM – 6 PM',
        venue: 'Radisson Blu, Jaipur',
        note: 'Organised by Urdhva Management under the Recommerce brand.',
        image: expoPhoto('urs_4566'),
      },
    ],
  },
  {
    id: 'expo',
    name: 'Recommerce Expo',
    title: 'Recommerce Expo',
    held: 6,
    editions: [
      {
        no: 1,
        date: '1 – 3 Feb, 2019',
        venue: 'Bengaluru',
        note: 'The first international exhibition and conference on refurbished electronics and e-waste management.',
        image: expoPhoto('urs_4223'),
      },
      {
        no: 2,
        date: '6 – 7 Mar, 2020',
        venue: 'The LaLiT Ashok, Bengaluru',
        note: "India's largest exhibition and conference for refurbished electronics and e-waste management.",
        image: expoPhoto('urs_4346'),
      },
      {
        no: 3,
        date: '18 – 20 May', // the cover shows no year
        venue: 'The LaLiT Ashok, Bengaluru',
        note: 'E-waste | Battery | Automotive.',
        image: expoPhoto('urs_4232'),
      },
      {
        no: 4,
        date: '9 – 10 Aug, 2023',
        venue: 'Palace Grounds, Bengaluru',
        note: 'E-waste, battery, automotive, tyre, rubber, metal, repair, refurbish and recycle.',
        image: expoPhoto('urs_4396'),
      },
      {
        no: 5,
        date: '3 – 5 Sep, 2024',
        venue: 'The LaLiT Ashok, Bengaluru',
        note: 'Global Business Meet: WEEE | Battery | Automotive.',
        image: expoPhoto('urs_4230'),
      },
      {
        no: 6,
        date: '29 – 30 Apr, 2026',
        venue: 'The LaLiT Ashok, Bengaluru',
        note: "The World's Most Practical Circular Economy Event.",
        image: expoPhoto('urs_4274'),
      },
    ],
  },
  {
    id: 'itad',
    name: 'ITAD',
    title: 'ITAD & WEEE Global Leaders Meet',
    held: 2,
    editions: [
      {
        no: 1,
        date: '30 – 31 Oct, 2025',
        venue: 'Delhi',
        note: 'Global Leaders Meet on ITAD & WEEE. Supported by Digital India.',
        image: itadPhoto('dsc03339'),
      },
      {
        no: 2,
        date: '5 – 6 Oct, 2026',
        venue: 'The LaLiT, New Delhi',
        note: 'Circular electronics, IT asset disposition and e-waste management.',
        image: itadPhoto('6k4a4743'),
      },
    ],
  },
  {
    id: 'cd',
    name: 'C&D',
    title: 'International Conference on Construction & Demolition Waste Management',
    held: 1,
    editions: [
      {
        no: 1,
        date: '7 Dec, 2022',
        time: '9 AM – 5 PM',
        venue: 'The Park, Hyderabad',
        image: expoPhoto('urs_4287'),
      },
    ],
  },
];

export const ordinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const plural = (n) => `${n} edition${n === 1 ? '' : 's'}`;

// every edition of every series, as one flat list of cards
export const ALL_CARDS = SERIES.flatMap((s) => s.editions.map((e) => ({ ...e, series: s })));
