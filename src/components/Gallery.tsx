'use client';

import { useState } from 'react';
import { BRAND_DATA, TimelineEvent } from '../data/content';

interface GalleryProps {
  onOpenVideo: (url: string, title: string) => void;
  onOpenStory: (title: string, content: string, date: string, readTime: string) => void;
}

type FilterCategory = 'all' | 'music-video' | 'agency' | 'speaker';

export default function Gallery({ onOpenVideo, onOpenStory }: GalleryProps) {
  const galleryItems = BRAND_DATA.timeline;
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  // Dynamic layout background overlay themes helper
  const getEventFallbackStyle = (id: string) => {
    const overlays: Record<string, string> = {
      'queen': 'linear-gradient(rgba(6,6,6,0.8), rgba(6,6,6,0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50 20 L80 80 L20 80 Z\' fill=\'none\' stroke=\'%23c5a880\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")',
      'stones': 'linear-gradient(rgba(6,6,6,0.8), rgba(6,6,6,0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'30\' fill=\'none\' stroke=\'%23c5a880\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")',
      'jackson': 'linear-gradient(rgba(6,6,6,0.8), rgba(6,6,6,0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect x=\'20\' y=\'20\' width=\'60\' height=\'60\' fill=\'none\' stroke=\'%23c5a880\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")',
      'dylan': 'linear-gradient(rgba(6,6,6,0.8), rgba(6,6,6,0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cline x1=\'10\' y1=\'10\' x2=\'90\' y2=\'90\' stroke=\'%23c5a880\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")',
      'mccartney': 'linear-gradient(rgba(6,6,6,0.8), rgba(6,6,6,0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M10 50 Q50 10 90 50\' fill=\'none\' stroke=\'%23c5a880\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")',
      'tv-agency': 'linear-gradient(rgba(6,6,6,0.8), rgba(6,6,6,0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect x=\'15\' y=\'25\' width=\'70\' height=\'50\' rx=\'5\' fill=\'none\' stroke=\'%23c5a880\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")',
      'author-speaker': 'linear-gradient(rgba(6,6,6,0.8), rgba(6,6,6,0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M25 20 H75 V80 H25 Z\' fill=\'none\' stroke=\'%23c5a880\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")'
    };
    return overlays[id] || 'linear-gradient(rgba(6,6,6,0.85), rgba(6,6,6,0.95))';
  };

  const handleItemClick = (item: TimelineEvent) => {
    if (item.videoUrl) {
      onOpenVideo(item.videoUrl, `${item.artist} - ${item.title}`);
    } else {
      // Create readable description parameters for text lightbox
      onOpenStory(
        `${item.artist} - ${item.title}`,
        item.details,
        item.year,
        item.role
      );
    }
  };

  const filterButtons: { label: string; val: FilterCategory }[] = [
    { label: 'All Media', val: 'all' },
    { label: 'Music Videos', val: 'music-video' },
    { label: 'TV & Agency', val: 'agency' },
    { label: 'Speaking & Press', val: 'speaker' }
  ];

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Visual Archive</span>
          <h2 className="section-title">Media Gallery</h2>
          <div className="divider"></div>
          <p className="section-description">
            A curated selection of iconic music videos, television appearances, press clippings, and historical photos.
          </p>
        </div>

        {/* Gallery Filter Navigation */}
        <div className="gallery-filters">
          {filterButtons.map((btn) => (
            <button
              key={btn.val}
              className={`filter-btn ${filter === btn.val ? 'active' : ''}`}
              onClick={() => setFilter(btn.val)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Items Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="gallery-item"
              onClick={() => handleItemClick(item)}
            >
              <div 
                className="gallery-item-image"
                style={{ 
                  backgroundImage: getEventFallbackStyle(item.id),
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%'
                }}
              ></div>
              <div className="gallery-item-overlay">
                <div className="gallery-item-type-icon">
                  <i className={`fa-solid ${item.videoUrl ? 'fa-circle-play' : 'fa-align-left'}`}></i>
                </div>
                <h4 className="gallery-item-title">{item.artist}</h4>
                <span className="gallery-item-artist">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
