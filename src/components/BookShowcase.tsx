'use client';

import { useState, useEffect } from 'react';
import { BRAND_DATA } from '../data/content';

export default function BookShowcase() {
  const book = BRAND_DATA.book;
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    if (!book.quotes.length) return;
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % book.quotes.length);
    }, 6000); // Shift quotes every 6 seconds
    return () => clearInterval(interval);
  }, [book.quotes.length]);

  const activeQuote = book.quotes[quoteIndex];

  return (
    <section id="book" className="book-section section-padding">
      <div className="container">
        <div className="book-grid">
          
          <div className="book-media-column">
            <div className="book-cover-wrapper">
              <div className="gold-accent-frame"></div>
              <img 
                src="/assets/book_cover.webp" 
                alt="From Here To Obscurity Book Cover" 
                className="book-cover-img"
              />
              <div className="book-badge-sticker">
                <span className="sticker-text gold-text">OUT NOW</span>
              </div>
            </div>
          </div>

          <div className="book-info-column">
            <span className="section-subtitle gold-text">The Autobiography</span>
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-subtitle gold-gradient">{book.subtitle}</h3>
            
            <p className="book-description">{book.description}</p>

            <div className="book-quotes-slider">
              {activeQuote && (
                <div className="book-quote-item">
                  <p className="book-quote-text">"{activeQuote.text}"</p>
                  <span className="book-quote-author">&mdash; {activeQuote.author}</span>
                </div>
              )}
            </div>

            <div className="book-cta-group">
              <a 
                href={book.links.amazon} 
                className="btn btn-gold" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-amazon" style={{ marginRight: '8px' }}></i> Purchase on Amazon
              </a>
              <a href={book.links.signedCopy} className="btn btn-outline">
                Request Signed Copy
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
