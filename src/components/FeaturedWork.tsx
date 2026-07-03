'use client';

import Link from 'next/link';
import { BRAND_DATA } from '../data/content';

export default function FeaturedWork() {
  const projects = BRAND_DATA.projects;

  return (
    <section id="work" className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#666666] block mb-3">Selected Archives</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-[#111111] tracking-tight">
            Selected Works
          </h2>
          <div className="w-16 h-[1px] bg-[#111111] mt-6"></div>
        </div>

        {/* 3-column Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 pb-12">
          {projects.map((project, index) => {
            // Apply varied margins/vertical alignment on larger viewports to simulate masonry pacing
            const alignClass = index % 3 === 1 
              ? 'md:mt-16' 
              : index % 3 === 2 
                ? 'md:-mt-8' 
                : '';

            return (
              <div 
                key={project.id} 
                className={`flex flex-col space-y-4 group ${alignClass}`}
              >
                {/* Image Container with custom cursor trigger */}
                <Link 
                  href={`/project/${project.id}`}
                  className="project-hover-target block overflow-hidden aspect-[3/4] relative bg-[#FAF9F6] border border-[#E7E7E7]"
                >
                  <img 
                    src={project.image} 
                    alt={`${project.artist} - ${project.title}`} 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                  />
                </Link>

                {/* Typography Metadata */}
                <div className="flex flex-col space-y-2 px-1 transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <div className="flex justify-between items-baseline border-b border-[#E7E7E7] pb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#111111]">
                      {project.artist}
                    </span>
                    <span className="text-[10px] text-[#666666] font-mono">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-baseline pt-1">
                    <h3 className="font-serif text-xl font-light text-[#111111] leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-[#666666]">
                      {project.role}
                    </span>
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
