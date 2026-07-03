'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-[#FAF9F6] text-[#111111] pt-32 pb-20 flex flex-col justify-center border-b border-[#E7E7E7] font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Text Block Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4"
          >
            {/* Minimal Sub-roles */}
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#666666] font-semibold flex flex-wrap gap-x-4 gap-y-1">
              <span>Music Producer</span>
              <span className="text-[#E7E7E7]">•</span>
              <span>Creative Director</span>
              <span className="text-[#E7E7E7]">•</span>
              <span>Author</span>
            </div>

            {/* Huge Heading */}
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[#111111] tracking-tight leading-none uppercase">
              Jon Roseman
            </h1>
          </motion.div>

          {/* Copy description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-sm md:text-base text-[#666666] max-w-xl leading-relaxed font-light"
          >
            For over four decades, Jon Roseman has collaborated with internationally celebrated artists, filmmakers, and creative visionaries, helping shape timeless music and storytelling.
          </motion.p>

          {/* CTA Link Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="pt-4"
          >
            <Link 
              href="/#work" 
              className="bg-[#111111] text-[#FAF9F6] border border-[#111111] py-4 px-10 text-xs uppercase tracking-widest font-semibold hover:bg-[#666666] hover:border-[#666666] transition-all duration-300 inline-block text-center"
            >
              Explore Work
            </Link>
          </motion.div>
        </div>

        {/* Large Portrait Column */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full aspect-[4/5] bg-white border border-[#E7E7E7] overflow-hidden"
          >
            <img 
              src="/profile/images.webp" 
              alt="Jon Roseman Portrait" 
              className="w-full h-full object-cover grayscale contrast-110" 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
