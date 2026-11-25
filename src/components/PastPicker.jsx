import { useState } from 'react';
import Pastevents from './Pastevents';
import { PastRows, PastStepper, PastBento, PastAccordion, PastWall } from './PastVariants';
import './PastVariants.css';

// Temporary: a floating switcher so the Past Events layouts can be compared in place.
const VARIANTS = [
  { name: 'Current marquee', Component: Pastevents },
  { name: 'Series rows', Component: PastRows },
  { name: 'Edition stepper', Component: PastStepper },
  { name: 'Bento tiles', Component: PastBento },
  { name: 'Accordion', Component: PastAccordion },
  { name: 'Poster wall', Component: PastWall },
];

const STORAGE_KEY = 'past-layout';

const readSaved = () => {
  try {
    const n = Number(window.localStorage.getItem(STORAGE_KEY));
    return n >= 0 && n < VARIANTS.length ? n : 0;
  } catch {
    return 0;
  }
};

const PastPicker = () => {
  const [index, setIndex] = useState(readSaved);
  const { Component } = VARIANTS[index];

  const choose = (i) => {
    setIndex(i);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(i));
    } catch {
      /* storage unavailable, the choice just won't be remembered */
    }
  };

  return (
    <>
      <Component key={index} />
      <div className="ppk-bar" role="toolbar" aria-label="Choose Past Events layout">
        <span className="ppk-title">PAST EVENTS LAYOUT</span>
        {VARIANTS.map((v, i) => (
          <button
            key={v.name}
            type="button"
            className={`ppk-btn ${i === index ? 'active' : ''}`}
            onClick={() => choose(i)}
          >
            {i + 1}. {v.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default PastPicker;
