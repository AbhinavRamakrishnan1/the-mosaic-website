'use client';

import { useEffect, useState } from 'react';

export function MemberCounter({ total }: { total: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total);
      return;
    }
    const duration = 7000;
    const startedAt = performance.now();
    let frame = 0;
    const animate = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      setCount(Math.min(total, Math.max(1, Math.floor(progress * total))));
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [total]);
  return <p className="member-counter" aria-live="polite" aria-atomic="true"><strong>{count}</strong> members and growing</p>;
}
