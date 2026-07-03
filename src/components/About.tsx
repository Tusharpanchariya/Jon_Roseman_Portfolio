'use client';

import { BRAND_DATA } from '../data/content';

export default function About() {
  const { profile } = BRAND_DATA;

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E7E7E7] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Huge Section Title */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#666666] block mb-3">The Biography</span>
          <h2 className="font-serif text-5xl md:text-8xl font-light text-[#111111] tracking-tight uppercase leading-none">
            About
          </h2>
          <div className="w-16 h-[1px] bg-[#111111] mt-6"></div>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Biography Narrative (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-[#111111] leading-relaxed">
              {profile.bioShort}
            </h3>
            
            <div className="w-12 h-[1px] bg-[#E7E7E7] my-6"></div>

            <div className="space-y-6 text-sm text-[#666666] leading-relaxed font-light">
              {profile.bioLong.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Areas of Expertise */}
            <div className="pt-8">
              <h4 className="text-[10px] uppercase tracking-widest text-[#111111] font-semibold mb-4 border-b border-[#E7E7E7] pb-2">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.roles.map((role, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] uppercase tracking-wider text-[#666666] border border-[#E7E7E7] px-3 py-1 bg-white font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait frame (Right) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/5] bg-white border border-[#E7E7E7] p-3">
              <img 
                src="/profile/images (1).webp" 
                alt="Jon Roseman Studio Biography Portrait" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-6 right-6 bg-[#111111] text-[#FAF9F6] px-4 py-2 border border-[#C5A880]">
                <span className="font-serif text-sm tracking-widest uppercase">Bohemian Rhapsody \'75</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
