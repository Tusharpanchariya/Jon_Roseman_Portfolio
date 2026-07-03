'use client';

import { useEffect, useRef, useState } from 'react';

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

function StatItem({ target, suffix = '', label, sublabel }: StatProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 1500; // 1.5 seconds animation
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = target / steps;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elementRef} className="text-center py-6">
      <div className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-[#111111] tracking-tight mb-3">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-[#111111] font-medium mb-1">
        {label}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-[#666666]">
        {sublabel}
      </div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 border-b border-[#E7E7E7] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:divide-x divide-[#E7E7E7]">
          <div className="md:px-4">
            <StatItem target={40} suffix="+" label="Years" sublabel="Legendary Journey" />
          </div>
          <div className="md:px-4">
            <StatItem target={100} suffix="+" label="Collaborations" sublabel="Music & Film" />
          </div>
          <div className="md:px-4">
            <StatItem target={200} suffix="+" label="TV Stars" sublabel="Represented & Managed" />
          </div>
          <div className="md:px-4">
            <StatItem target={2} label="Published Books" sublabel="Global Editorial" />
          </div>
        </div>
      </div>
    </section>
  );
}
