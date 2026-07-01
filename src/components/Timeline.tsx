'use client';

import { useState } from 'react';
import { BRAND_DATA, TimelineEvent } from '../data/content';

interface TimelineProps {
  onOpenVideo: (url: string, title: string) => void;
}

export default function Timeline({ onOpenVideo }: TimelineProps) {
  const timelineData = BRAND_DATA.timeline;
  const [activeEvent, setActiveEvent] = useState<TimelineEvent>(timelineData[0]);

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

  return (
    <section id="timeline" className="timeline-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Interactive History</span>
          <h2 className="section-title">Career Milestones</h2>
          <div className="divider"></div>
          <p className="section-description">
            Click on each legendary chapter below to explore archives, watch original videos, and read untold stories from the sets.
          </p>
        </div>

        <div className="timeline-interactive-wrapper">
          {/* Scrollable Timeline Navigation Badge Indicators */}
          <div className="timeline-nav-scroll">
            <div className="timeline-nav">
              {timelineData.map((event) => (
                <button 
                  key={event.id}
                  className={`timeline-nav-btn ${activeEvent.id === event.id ? 'active' : ''}`}
                  onClick={() => setActiveEvent(event)}
                >
                  <span className="nav-btn-year">{event.year}</span>
                  <span className="nav-btn-title">{event.artist}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Milestone Panel */}
          <div className="timeline-display-card">
            <div className="timeline-card-content">
              <div className="timeline-meta">
                <span className="timeline-year gold-text">{activeEvent.year}</span>
                <span className="timeline-category">{activeEvent.role}</span>
              </div>
              <h3 className="timeline-event-title">{activeEvent.artist} - {activeEvent.title}</h3>
              <p className="timeline-event-summary">{activeEvent.description}</p>
              
              <div className="timeline-event-details">
                <p>{activeEvent.details}</p>
              </div>
              
              {activeEvent.videoUrl && (
                <div className="timeline-cta-row">
                  <button 
                    className="btn btn-gold btn-sm"
                    onClick={() => onOpenVideo(activeEvent.videoUrl, `${activeEvent.artist} - ${activeEvent.title}`)}
                  >
                    <i className="fa-solid fa-play" style={{ marginRight: '8px' }}></i> Watch Video Clip
                  </button>
                </div>
              )}
            </div>

            <div className="timeline-card-media">
              {activeEvent.videoUrl ? (
                <div 
                  className="video-preview-thumbnail"
                  style={{ backgroundImage: getEventFallbackStyle(activeEvent.id) }}
                  onClick={() => onOpenVideo(activeEvent.videoUrl, `${activeEvent.artist} - ${activeEvent.title}`)}
                >
                  <div className="play-overlay">
                    <i className="fa-solid fa-circle-play gold-text"></i>
                  </div>
                  <div className="tv-glow"></div>
                </div>
              ) : (
                <div 
                  className="video-preview-thumbnail"
                  style={{ 
                    backgroundImage: getEventFallbackStyle(activeEvent.id),
                    cursor: 'default' 
                  }}
                >
                  <div className="tv-glow"></div>
                  <div className="text-center" style={{ padding: '30px', zIndex: 2 }}>
                    <i className="fa-solid fa-microphone-lines gold-text" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                    <h4 className="gold-text" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '1px' }}>Archival History</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '10px' }}>Executive Records & Legal Briefs</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
