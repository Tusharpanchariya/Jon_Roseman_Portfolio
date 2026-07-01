'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

function CounterItem({ target, label, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let start = 0;
          const duration = 2000; // 2 seconds
          const stepTime = Math.max(Math.floor(duration / target), 15);
          
          const timer = setInterval(() => {
            start += Math.ceil(target / 80);
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return (
    <div className="counter-item" ref={elementRef}>
      <span className="counter-num gold-text">
        {prefix}{count}{suffix}
      </span>
      <span className="counter-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Cinematic Visual Background */}
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="ambient-glow"></div>
      </div>
      
      <div className="container hero-content-wrapper">
        <div className="hero-text-block">
          <span className="hero-overline gold-text">A Legendary Pioneer</span>
          <h1 className="hero-title">
            <span className="outline-text">JON</span> <span className="gold-gradient">ROSEMAN</span>
          </h1>
          <p className="hero-subtitle">The Godfather of the Music Video</p>
          <p className="hero-tagline">
            Producer of Queen's 'Bohemian Rhapsody' and visual partner to Michael Jackson, The Rolling Stones, Bob Dylan, and Rod Stewart. Former powerhouse agent shaping British television.
          </p>
          
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-gold">Book Jon</a>
            <a href="#stories" className="btn btn-outline">Watch Stories</a>
            <a href="#contact" className="btn btn-text">Contact &rarr;</a>
          </div>
        </div>
      </div>

      {/* Quick highlights counter strip */}
      <div className="hero-counter-strip">
        <div className="container counter-container">
          <CounterItem target={50} label="Years in Media" suffix="+" />
          <CounterItem target={100} label="Legendary Videos" suffix="+" />
          <CounterItem target={1} label="Bohemian Rhapsody" prefix="#" />
          <CounterItem target={200} label="TV Stars Represented" suffix="+" />
        </div>
      </div>
    </section>
  );
}
