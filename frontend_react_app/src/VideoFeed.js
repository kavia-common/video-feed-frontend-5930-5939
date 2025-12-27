import React from "react";
import VideoCard from "./VideoCard";

// PUBLIC_INTERFACE
function VideoFeed({ videos }) {
  /**
   * VideoFeed renders a vertical, scrollable list of videos much like TikTok.
   * Each video fills most of the viewport, and is split into VideoCard components.
   * 
   * @param videos - List of video objects to display
   */
  return (
    <main className="video-feed-main">
      {videos.map((vid, idx) => (
        <VideoCard key={vid.id || idx} video={vid} />
      ))}
    </main>
  );
}

export default VideoFeed;
