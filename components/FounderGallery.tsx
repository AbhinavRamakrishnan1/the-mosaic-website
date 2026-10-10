'use client';

import Image from 'next/image';
import { useState } from 'react';

const photos = [
  { src: '/abhinav-ramakrishnan.png', alt: 'Abhinav Ramakrishnan, founder of The Mosaic' },
  { src: '/abhinav-founder-formal.png', alt: 'Abhinav Ramakrishnan' },
  { src: '/abhinav-community-event.jpeg', alt: 'Abhinav Ramakrishnan connecting with students at a community event' },
];

export function FounderGallery() {
  const [active, setActive] = useState(0);
  const photo = photos[active];

  return <div className="founder-gallery">
    <Image className={`founder-photo founder-photo-${active}`} src={photo.src} alt={photo.alt} width={360} height={440} priority={active === 0} />
    <button className="founder-gallery-button" type="button" aria-label="Show next founder photo" onClick={() => setActive(current => (current + 1) % photos.length)}>→</button>
    <span className="founder-gallery-count" aria-live="polite">{active + 1} / {photos.length}</span>
  </div>;
}
