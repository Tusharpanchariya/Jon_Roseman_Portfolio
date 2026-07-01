'use client';

import { useState, useRef, useEffect } from 'react';
import { BRAND_DATA, PodcastEpisode } from '../data/content';

export default function PodcastPlayer() {
  const episodes = BRAND_DATA.podcast.episodes;
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const currentEpisode = episodes[trackIndex];

  // Sync state with HTML5 audio playback events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset progress when track changes
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const onEnded = () => {
      handleNext();
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    // If tracks change, load and handle auto-play
    audio.load();

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [trackIndex]);

  // Sync play state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(err => {
        console.log("Audio play error:", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Sync volume state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setTrackIndex((prev) => (prev + 1 >= episodes.length ? 0 : prev + 1));
    // Trigger auto-play on next track select
    setTimeout(() => setIsPlaying(true), 50);
  };

  const handlePrev = () => {
    setTrackIndex((prev) => (prev - 1 < 0 ? episodes.length - 1 : prev - 1));
    setTimeout(() => setIsPlaying(true), 50);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressBarRef.current;
    if (!audio || !bar || !duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section id="podcast" className="podcast-section section-padding">
      <div className="container">
        <div className="podcast-grid">
          <div className="podcast-info-column">
            <span className="section-subtitle gold-text">Audio Commentary</span>
            <h2 className="section-title">Uncensored: Untold Stories</h2>
            <p className="podcast-description">
              Listen to the Godfather of the Music Video narrate legendary tales of Queen, Bob Dylan, Michael Jackson, and the cutthroat business of British television.
            </p>
            
            {/* Podcast Platform Badges */}
            <div className="podcast-platforms">
              <span className="platform-label gold-text">Listen On:</span>
              <div className="platform-icons">
                <a href="#" className="platform-link" title="Spotify"><i className="fa-brands fa-spotify"></i></a>
                <a href="#" className="platform-link" title="Apple Podcasts"><i className="fa-brands fa-apple"></i></a>
                <a href="#" className="platform-link" title="Amazon Music"><i className="fa-brands fa-amazon"></i></a>
                <a href="#" className="platform-link" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="podcast-player-column">
            <div className="luxury-audio-player">
              
              {/* Player Track Header */}
              <div className="player-header">
                <div className={`visualizer-bars ${isPlaying ? 'playing' : ''}`}>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="track-details">
                  <span className="now-playing-label gold-text">NOW PLAYING</span>
                  <h4 className="track-title">{currentEpisode.title}</h4>
                  <p className="track-artist">Jon Roseman Podcast</p>
                </div>
              </div>

              {/* Controls Panel */}
              <div className="player-controls">
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <div 
                    className="progress-bar-container" 
                    ref={progressBarRef}
                    onClick={handleScrub}
                  >
                    <div 
                      className="progress-bar" 
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                  <span>{formatTime(duration || parseFloat(currentEpisode.duration.split(':')[0]) * 60 + parseFloat(currentEpisode.duration.split(':')[1]))}</span>
                </div>

                <div className="control-buttons">
                  <button className="btn-icon" onClick={handlePrev} title="Previous Episode">
                    <i className="fa-solid fa-backward-step"></i>
                  </button>
                  <button className="btn-play-pause" onClick={handlePlayPause} title={isPlaying ? "Pause" : "Play"}>
                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                  </button>
                  <button className="btn-icon" onClick={handleNext} title="Next Episode">
                    <i className="fa-solid fa-forward-step"></i>
                  </button>
                  
                  {/* Volume Slider Bar */}
                  <div className="volume-control">
                    <button className="btn-icon" onClick={() => setIsMuted(!isMuted)} title={isMuted ? "Unmute" : "Mute"}>
                      <i className={`fa-solid ${isMuted || volume === 0 ? 'fa-volume-xmark' : volume < 0.4 ? 'fa-volume-low' : 'fa-volume-high'}`}></i>
                    </button>
                    <input 
                      type="range" 
                      className="volume-slider" 
                      min="0" 
                      max="1" 
                      step="0.05" 
                      value={volume}
                      onChange={(e) => {
                        setVolume(parseFloat(e.target.value));
                        setIsMuted(false);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Playlist List select */}
              <div className="player-playlist">
                {episodes.map((ep, idx) => (
                  <div 
                    key={ep.id}
                    className={`playlist-item ${trackIndex === idx ? 'active' : ''}`}
                    onClick={() => {
                      setTrackIndex(idx);
                      // Auto-play when explicitly clicked
                      setTimeout(() => setIsPlaying(true), 50);
                    }}
                  >
                    <div className="playlist-track-info">
                      <span className="playlist-track-title">{ep.title}</span>
                      <span className="playlist-track-desc">{ep.summary}</span>
                    </div>
                    <span className="playlist-track-duration">{ep.duration}</span>
                  </div>
                ))}
              </div>
              
              {/* Native Audio Tag (hidden) */}
              <audio ref={audioRef} src={currentEpisode.audioSrc} preload="metadata" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
