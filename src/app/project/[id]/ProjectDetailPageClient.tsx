'use client';

import { Project } from '../../../data/content';
import { Play, ArrowLeft, ShieldCheck, Film, Calendar, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface ClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetailPageClient({ project, relatedProjects }: ClientProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      
      {/* Back to Archive navigation */}
      <div className="mb-12">
        <Link 
          href="/#work" 
          className="text-xs uppercase tracking-widest text-[#666666] hover:text-[#111111] transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Archive
        </Link>
      </div>

      {/* Title & Headline */}
      <div className="space-y-4 mb-16">
        <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
          Archival Record
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-[#111111] tracking-tight leading-tight">
          {project.artist} — {project.title}
        </h1>
        <div className="w-16 h-[1px] bg-[#111111] mt-6"></div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
        
        {/* Large Media Player Canvas */}
        <div className="lg:col-span-8 space-y-8">
          {project.videoUrl ? (
            <div className="relative aspect-video w-full border border-[#E7E7E7] bg-black">
              <iframe
                src={project.videoUrl}
                title={`${project.artist} - ${project.title}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="relative aspect-video w-full border border-[#E7E7E7] overflow-hidden bg-white">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale" 
              />
            </div>
          )}

          {/* Project Gallery Stills */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-6 pt-6">
              <h3 className="font-serif text-2xl font-light text-[#111111]">
                Production Stills & Artifacts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className="aspect-[3/2] bg-white border border-[#E7E7E7] overflow-hidden group">
                    <img 
                      src={img} 
                      alt={`${project.title} detail ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info / Metadata Columns */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Metadata Specs Box */}
          <div className="border border-[#E7E7E7] bg-[#FAF9F6] p-6 space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-[#111111] font-semibold border-b border-[#E7E7E7] pb-3 flex items-center gap-2">
              <Film className="w-4 h-4 text-[#C5A880] stroke-1" /> Production Credits
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#666666] font-light flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Release Year</span>
                <span className="font-semibold text-[#111111]">{project.year}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#666666] font-light flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Jon's Role</span>
                <span className="font-semibold text-[#111111]">{project.role}</span>
              </div>
              
              {project.credits.map((cred, i) => (
                <div key={i} className="flex items-center justify-between text-xs border-t border-[#E7E7E7]/60 pt-4">
                  <span className="text-[#666666] font-light">{cred.label}</span>
                  <span className="font-semibold text-[#111111]">{cred.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative description */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-light text-[#111111] border-b border-[#E7E7E7] pb-3">
              The Story Behind The Project
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed font-light whitespace-pre-line">
              {project.story || project.description}
            </p>
          </div>

        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className="py-16 border-t border-[#E7E7E7] mt-16">
          <h3 className="font-serif text-2xl font-light text-[#111111] mb-12">
            Related Archives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((rp) => (
              <Link 
                key={rp.id}
                href={`/project/${rp.id}`} 
                className="group flex flex-col space-y-3"
              >
                <div className="aspect-[3/2] bg-white border border-[#E7E7E7] overflow-hidden">
                  <img 
                    src={rp.image} 
                    alt={rp.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 grayscale group-hover:grayscale-0" 
                  />
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#C5A880] transition-colors leading-tight">
                    {rp.artist} — {rp.title}
                  </h4>
                  <span className="text-[10px] text-[#666666]">{rp.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
