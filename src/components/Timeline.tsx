'use client';

import { useState, useRef, useEffect } from 'react';
import { BRAND_DATA, TimelineEvent } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface TimelineProps {
  onOpenVideo?: (url: string, title: string) => void;
}

export default function Timeline({ onOpenVideo }: TimelineProps) {
  const timelineData = BRAND_DATA.timeline;
  const [activeEvent, setActiveEvent] = useState<TimelineEvent>(timelineData[0]);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(timelineData[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fallback styling for archive visual tiles
  const getEventFallbackStyle = (id: string) => {
    const overlays: Record<string, string> = {
      'queen': 'url("/assets/brand_cover.webp")',
      'stones': 'url("/assets/book_cover.webp")',
      'jackson': 'url("/profile/images.webp")',
      'dylan': 'url("/assets/brand_cover.webp")',
      'mccartney': 'url("/assets/book_cover.webp")',
      'tv-agency': 'url("/profile/images (1).webp")',
      'author-speaker': 'url("/assets/book_cover.webp")'
    };
    return overlays[id] || 'url("/assets/brand_cover.webp")';
  };

  const handleVideoTrigger = (event: TimelineEvent) => {
    if (event.videoUrl && onOpenVideo) {
      onOpenVideo(event.videoUrl, `${event.artist} - ${event.title}`);
    } else if (event.videoUrl) {
      // Direct window redirect if layout triggers aren't passed
      const win = window.open(event.videoUrl, '_blank');
      win?.focus();
    }
  };

  return (
    <section id="timeline" className="py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#666666] block mb-3">Chronological Archive</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-[#111111] tracking-tight">
            Career Timeline
          </h2>
          <div className="w-16 h-[1px] bg-[#111111] mt-6"></div>
        </div>

        {/* 1. Desktop Horizontal Timeline */}
        <div className="hidden md:block space-y-12">
          {/* Scrollable Timeline Header List */}
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-1 overflow-x-auto pb-4 scrollbar-none border-b border-[#E7E7E7] snap-x"
          >
            {timelineData.map((event) => {
              const isActive = activeEvent.id === event.id;
              return (
                <button
                  key={event.id}
                  onClick={() => setActiveEvent(event)}
                  className="flex-1 min-w-[120px] text-left py-4 px-2 snap-start border-t-2 transition-all duration-300 relative focus:outline-hidden"
                  style={{
                    borderTopColor: isActive ? '#111111' : 'transparent'
                  }}
                >
                  <span className="font-serif text-2xl font-light text-[#111111] block mb-1">
                    {event.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#666666] block truncate">
                    {event.artist}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expanded Magazine Spread Card */}
          <div className="grid grid-cols-12 gap-12 pt-6 min-h-[480px]">
            {/* Context Narrative Column */}
            <div className="col-span-7 flex flex-col justify-between py-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-5xl font-light text-[#111111]">{activeEvent.year}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#666666] border border-[#E7E7E7] px-3 py-1 font-semibold">
                    {activeEvent.role}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-light text-[#111111] mb-2 leading-tight">
                    {activeEvent.artist} — {activeEvent.title}
                  </h3>
                  <p className="text-sm font-medium text-[#111111] leading-relaxed mb-4">
                    {activeEvent.description}
                  </p>
                  <p className="text-xs text-[#666666] leading-relaxed font-light">
                    {activeEvent.details}
                  </p>
                </div>
              </div>

              {activeEvent.videoUrl && (
                <button
                  onClick={() => handleVideoTrigger(activeEvent)}
                  className="w-fit flex items-center gap-3 text-[10px] uppercase tracking-widest font-semibold border-b border-[#111111] pb-1 hover:opacity-70 transition-opacity mt-8"
                >
                  <Play className="w-3.5 h-3.5 fill-[#111111]" /> Watch Archival Clip
                </button>
              )}
            </div>

            {/* Media Canvas Column */}
            <div className="col-span-5 relative bg-[#FAF9F6] border border-[#E7E7E7] aspect-[4/3] overflow-hidden group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-103 grayscale contrast-110"
                style={{ backgroundImage: getEventFallbackStyle(activeEvent.id) }}
              />
              {activeEvent.videoUrl && (
                <div 
                  onClick={() => handleVideoTrigger(activeEvent)}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full border border-[#FAF9F6]/80 flex items-center justify-center backdrop-blur-xs text-[#FAF9F6] hover:scale-105 transition-transform duration-300">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. Mobile Accordion Stack Layout */}
        <div className="block md:hidden space-y-4">
          {timelineData.map((event) => {
            const isExpanded = expandedMobileId === event.id;

            return (
              <div 
                key={event.id} 
                className="border border-[#E7E7E7] bg-[#FAF9F6] overflow-hidden"
              >
                {/* Year Title Header Bar */}
                <button
                  onClick={() => setExpandedMobileId(isExpanded ? null : event.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left border-b border-[#E7E7E7]/60"
                >
                  <div>
                    <span className="font-serif text-xl font-light text-[#111111] mr-3">
                      {event.year}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#666666]">
                      {event.artist}
                    </span>
                  </div>
                  <span className="text-lg font-light text-[#111111]">
                    {isExpanded ? '—' : '+'}
                  </span>
                </button>

                {/* Animated Body Accordion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 py-6 space-y-4 border-t border-[#E7E7E7]/40 bg-[#FAF9F6]">
                        {event.videoUrl && (
                          <div className="relative aspect-[16/9] w-full border border-[#E7E7E7] overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-cover bg-center grayscale"
                              style={{ backgroundImage: getEventFallbackStyle(event.id) }}
                            />
                            <div 
                              onClick={() => handleVideoTrigger(event)}
                              className="absolute inset-0 flex items-center justify-center bg-black/20"
                            >
                              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white">
                                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          <span className="text-[9px] uppercase tracking-widest text-[#666666] border border-[#E7E7E7] px-2 py-0.5 font-medium">
                            {event.role}
                          </span>
                          <h4 className="font-serif text-lg text-[#111111] pt-1">
                            {event.title}
                          </h4>
                          <p className="text-xs font-semibold text-[#111111] leading-relaxed">
                            {event.description}
                          </p>
                          <p className="text-xs text-[#666666] leading-relaxed font-light">
                            {event.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
