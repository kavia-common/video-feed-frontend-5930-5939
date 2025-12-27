import React, { useRef, useEffect, useState } from "react";

// PUBLIC_INTERFACE
function VideoCard({ video }) {
  /**
   * VideoCard displays a single video with overlay action buttons.
   * 
   * @param video - {id, src, username, caption, likes, comments, shares, avatarSrc}
   */
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Autoplay and pause on click (for demo usability)
  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Pause video when leaving viewport (for polish)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const handleVisibility = () => {
      const rect = vid.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        vid.pause();
        setIsPlaying(false);
      }
    };
    window.addEventListener("scroll", handleVisibility, true);
    return () => window.removeEventListener("scroll", handleVisibility, true);
  }, []);

  return (
    <section className="video-card">
      <video
        className="video-card-player"
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        loop
        playsInline
        controls={false}
        onClick={handleTogglePlay}
        tabIndex={0}
        aria-label={`Play video by ${video.username}`}
      />
      <div className="video-card-overlay">
        <div className="video-card-info">
          <img
            src={video.avatarSrc}
            alt={`${video.username}'s avatar`}
            className="video-avatar"
            loading="lazy"
          />
          <div className="video-author-meta">
            <span className="video-username">@{video.username}</span>
            <span className="video-caption">{video.caption}</span>
          </div>
        </div>
        <div className="video-actions">
          <button className="action-btn" aria-label="Like">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M23.73 6.399c2.327 1.153 3.77 3.555 2.939 6.198-.9 2.644-5.124 5.877-9.855 10.405-.185.167-.438.167-.623 0C9.427 18.474 5.204 15.241 4.303 12.597c-.83-2.643.613-5.045 2.94-6.197A5.272 5.272 0 0 1 16 8.818a5.27 5.27 0 0 1 7.73-2.419Z" stroke="#3b82f6" strokeWidth="2" fill={video.liked ? "#3b82f6" : "none"}/></svg>
            <span>{video.likes}</span>
          </button>
          <button className="action-btn" aria-label="Comment">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M6.667 18.667c0 1.104.792 2 1.764 2h7.902c.972 0 1.764-.896 1.764-2v-2a2 2 0 0 1 2-2h2c1.104 0 2 .896 2 2v2c0 2.665-2.494 5.217-7.902 5.217-5.408 0-7.902-2.552-7.902-5.217v-2c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v2c0 1.104.792 2 1.764 2h6.902" stroke="#06b6d4" strokeWidth="2"/></svg>
            <span>{video.comments}</span>
          </button>
          <button className="action-btn" aria-label="Share">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="m10 18 12-6M10 14l12 6M26 10.667v10.666A2.667 2.667 0 0 1 23.333 24H8.667A2.667 2.667 0 0 1 6 21.333V10.667A2.667 2.667 0 0 1 8.667 8h14.666A2.667 2.667 0 0 1 26 10.667Z" stroke="#3b82f6" strokeWidth="2"/></svg>
            <span>{video.shares}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoCard;
