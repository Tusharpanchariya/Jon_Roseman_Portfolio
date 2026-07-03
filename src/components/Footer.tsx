'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E7E7E7] py-16 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        
        {/* Editorial Role Stack */}
        <div className="space-y-3">
          <h4 className="font-serif text-xl tracking-widest text-[#111111] uppercase font-normal">
            Jon Roseman
          </h4>
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#666666] flex flex-wrap gap-x-4 gap-y-1">
            <span>Music Producer</span>
            <span className="text-[#E7E7E7] hidden md:inline">|</span>
            <span>Creative Director</span>
            <span className="text-[#E7E7E7] hidden md:inline">|</span>
            <span>Author</span>
          </div>
        </div>

        {/* Minimal Copyright details */}
        <div className="space-y-2 md:text-right">
          <p className="text-[10px] uppercase tracking-widest text-[#666666]">
            &copy; {currentYear} Jon Roseman. All Rights Reserved.
          </p>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#666666] font-light">
            Designed for longevity. Timeless Editorial.
          </p>
        </div>

      </div>
    </footer>
  );
}
