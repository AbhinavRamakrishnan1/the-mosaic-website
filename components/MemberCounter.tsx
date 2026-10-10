'use client';

import { useEffect, useState } from 'react';

export function MemberCounter({ total }: { total: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total);
      return;
    }
    const step = Math.max(1, Math.ceil(total / 35));
    const timer = window.setInterval(() => setCount(current => Math.min(total, current + step)), 35);
    return () => window.clearInterval(timer);
  }, [total]);
  return <p className="member-counter" aria-live="polite" aria-atomic="true"><strong>{count}</strong> members and growing</p>;
}
