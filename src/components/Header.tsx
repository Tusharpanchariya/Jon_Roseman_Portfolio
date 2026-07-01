'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="gold-text">JON</span> ROSEMAN
        </a>
        
        {/* Mobile Navigation Toggle Hamburger */}
        <button 
          className={`nav-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Drawer Menu */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#timeline" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Highlights</a></li>
            <li><a href="#stories" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Stories</a></li>
            <li><a href="#podcast" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Podcast</a></li>
            <li><a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Speaking</a></li>
            <li><a href="#book" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>The Book</a></li>
            <li><a href="#gallery" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a></li>
            <li><a href="#contact" className="nav-btn-mobile btn-gold" onClick={() => setIsMobileMenuOpen(false)}>Book Jon</a></li>
          </ul>
        </nav>

        {/* Header Action Button (Desktop Only) */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-gold btn-sm">Book Jon</a>
        </div>
      </div>
    </header>
  );
}
