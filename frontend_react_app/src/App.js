import React, { useState, useEffect } from 'react';
import './App.css';
import VideoFeed from './VideoFeed';
import mockVideos from './mockVideos';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="brand-header">
        <div className="brand-title">
          <svg
            width="32"
            height="32"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
            style={{ marginRight: "10px" }}
          >
            <rect
              x="8"
              y="8"
              width="32"
              height="32"
              rx="8"
              fill="#3b82f6"
            />
            <path
              d="M20 28c0-2.21 1.79-4 4-4s4 1.79 4 4v5a1 1 0 0 1-2 0v-5a2 2 0 1 0-4 0v5a1 1 0 1 1-2 0v-5Z"
              fill="#fff"
            />
            <circle
              cx="24"
              cy="20"
              r="4"
              fill="#06b6d4"
              stroke="#fff"
              strokeWidth="1.5"
            />
          </svg>
          <span className="brand-text">Vidify</span>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <VideoFeed videos={mockVideos} />
    </div>
  );
}

export default App;
