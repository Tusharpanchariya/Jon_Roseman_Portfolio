'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Stories from '../components/Stories';
import PodcastPlayer from '../components/PodcastPlayer';
import Speaking from '../components/Speaking';
import BookShowcase from '../components/BookShowcase';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Lightbox, { LightboxMedia } from '../components/Lightbox';

export default function Home() {
  const [lightboxMedia, setLightboxMedia] = useState<LightboxMedia | null>(null);

  // Setup scroll reveals for elements with .reveal class
  useEffect(() => {
    // Add a tiny delay to ensure React has fully rendered the components in the DOM
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      if (revealElements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      revealElements.forEach((el) => observer.observe(el));
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline onOpenVideo={(url, title) => setLightboxMedia({ url, title, type: 'video' })} />
        <Stories onOpenStory={(title, content, date, readTime) => setLightboxMedia({ url: '', title, type: 'story', content, date, readTime })} />
        <PodcastPlayer />
        <Speaking />
        <BookShowcase />
        <Gallery 
          onOpenVideo={(url, title) => setLightboxMedia({ url, title, type: 'video' })} 
          onOpenStory={(title, content, date, readTime) => setLightboxMedia({ url: '', title, type: 'story', content, date, readTime })} 
        />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <Lightbox media={lightboxMedia} onClose={() => setLightboxMedia(null)} />
    </>
  );
}
