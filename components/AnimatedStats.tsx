'use client';

import { useEffect, useState } from 'react';

export function AnimatedStats() {
  const [members, setMembers] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMembers(206);
      setCountries(25);
      return;
    }
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMembers(Math.round(206 * eased));
      setCountries(Math.round(25 * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <div className="hero-stats" aria-label="The Mosaic at a glance">
    <div><strong>{members}+</strong><span>Members</span></div>
    <div><strong>{countries}+</strong><span>Countries</span></div>
    <div><strong>Global</strong><span>Perspectives</span></div>
  </div>;
}
