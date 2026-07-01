'use client';

import { useEffect } from 'react';

export interface LightboxMedia {
  url: string;
  title: string;
  type: 'video' | 'story';
  content?: string;
  date?: string; // Optional metadata for stories/events
  readTime?: string;
}

interface LightboxProps {
  media: LightboxMedia | null;
  onClose: () => void;
}

export default function Lightbox({ media, onClose }: LightboxProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (media) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [media]);

  // Bind ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!media) return null;

  return (
    <div className="lightbox-modal">
      <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
        &times;
      </button>
      <div className="lightbox-overlay" onClick={onClose}></div>
      <div className="lightbox-content">
        
        {/* Render Video Player Lightbox */}
        {media.type === 'video' && (
          <div className="lightbox-video-container">
            <iframe 
              src={`${media.url}?autoplay=1&rel=0`} 
              title={media.title} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Render Full Text Article Reader */}
        {media.type === 'story' && (
          <div className="lightbox-story-container">
            {(media.date || media.readTime) && (
              <span className="lightbox-story-meta">
                {media.date} {media.date && media.readTime && ' • '} {media.readTime}
              </span>
            )}
            <h3 className="lightbox-story-title">{media.title}</h3>
            <div className="lightbox-story-body">
              {media.content?.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )) || <p>No content preview available.</p>}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
