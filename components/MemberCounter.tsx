'use client';

import { useEffect, useState } from 'react';

export function MemberCounter({ total }: { total: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total);
      return;
    }
    const timer = window.setInterval(() => {
      setCount(current => {
        const next = Math.min(total, current + 1);
        if (next === total) window.clearInterval(timer);
        return next;
      });
    }, 18);
    return () => window.clearInterval(timer);
  }, [total]);
  return <p className="member-counter" aria-live="polite" aria-atomic="true"><strong>{count}</strong> members and growing</p>;
}
