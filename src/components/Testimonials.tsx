'use client';

import { useState, useEffect } from 'react';
import { BRAND_DATA } from '../data/content';

export default function Testimonials() {
  const testimonials = BRAND_DATA.testimonials;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!testimonials.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Auto-slide every 8 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Endorsements</span>
          <h2 className="section-title">Industry Reflections</h2>
          <div className="divider"></div>
        </div>

        <div className="testimonials-carousel-wrapper">
          <div className="testimonials-slider">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`testimonial-slide ${currentSlide === idx ? 'active' : ''}`}
                style={{ display: currentSlide === idx ? 'block' : 'none' }}
              >
                <div className="quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <h4 className="testimonial-author">{t.author}</h4>
                <span className="testimonial-title">{t.title}</span>
              </div>
            ))}
          </div>
          
          {/* Slider Controls */}
          <div className="slider-controls">
            <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Testimonial">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="slider-dots">
              {testimonials.map((_, idx) => (
                <span 
                  key={idx}
                  className={`slider-dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                ></span>
              ))}
            </div>
            <button className="slider-arrow next" onClick={handleNext} aria-label="Next Testimonial">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
