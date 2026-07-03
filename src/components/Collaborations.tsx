'use client';

import { BRAND_DATA } from '../data/content';

export default function Collaborations() {
  const collaborations = BRAND_DATA.collaborations;

  return (
    <section id="legacy" className="py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E7E7E7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#666666] block mb-3">Historical Chapters</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-[#111111] tracking-tight">
            Legendary Collaborations
          </h2>
          <div className="w-16 h-[1px] bg-[#111111] mx-auto mt-6"></div>
        </div>

        {/* Chapters */}
        <div className="space-y-36">
          {collaborations.map((collab, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={collab.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Artwork & Gallery Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] bg-white border border-[#E7E7E7] overflow-hidden">
                    <img 
                      src={collab.image} 
                      alt={collab.artist} 
                      className="w-full h-full object-cover grayscale contrast-110" 
                    />
                  </div>

                  {/* Thumbnail Gallery */}
                  {collab.gallery && collab.gallery.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {collab.gallery.map((img, i) => (
                        <div key={i} className="aspect-[3/2] bg-white border border-[#E7E7E7] overflow-hidden">
                          <img 
                            src={img} 
                            alt={`${collab.artist} chapter view ${i + 1}`} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Narrative Text Column */}
                <div className={`lg:col-span-6 flex flex-col space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#111111] tracking-tight uppercase leading-none">
                    {collab.artist}
                  </h3>
                  
                  <div className="w-12 h-[1px] bg-[#111111]"></div>
                  
                  <p className="text-sm text-[#666666] leading-relaxed font-light">
                    {collab.story}
                  </p>

                  <div className="border-l border-[#C5A880] pl-6 py-2 mt-4 bg-[#FAF9F6]">
                    <span className="text-[10px] uppercase tracking-widest text-[#666666] block mb-1">
                      Jon's Contribution
                    </span>
                    <p className="font-serif text-base italic text-[#111111] leading-relaxed">
                      "{collab.contribution}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
