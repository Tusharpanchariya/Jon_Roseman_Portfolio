'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Statistics from '../components/Statistics';
import FeaturedWork from '../components/FeaturedWork';
import Collaborations from '../components/Collaborations';
import Timeline from '../components/Timeline';
import BookStore from '../components/BookStore';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import CartDrawer from '../components/CartDrawer';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Home() {
  
  // Setup smooth scroll via Lenis client-side
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Custom Mouse Follower Ring */}
      <CustomCursor />
      
      {/* Editorial Header */}
      <Header />
      
      {/* Landing Blocks */}
      <main className="bg-[#FAF9F6]">
        <Hero />
        <About />
        <Statistics />
        <FeaturedWork />
        <Collaborations />
        <Timeline />
        <BookStore />
        <ContactForm />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Cart Slider Drawer */}
      <CartDrawer />
    </>
  );
}
