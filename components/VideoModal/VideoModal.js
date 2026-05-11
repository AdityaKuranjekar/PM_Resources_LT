"use client";
import React, { useState } from 'react';
import styles from './VideoModal.module.css';

const VideoModal = ({ videoUrl, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const fallbackVideoUrl = "https://www.youtube.com/embed/5aT24qP4R94"; // Generic PM Video Placeholder

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className={styles.thumbnailContainer} onClick={handleOpen}>
        <div className={styles.playIcon}>
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleClose}>&times;</button>
            <iframe 
              className={styles.videoIframe}
              src={videoUrl.includes('placeholder') ? fallbackVideoUrl : videoUrl} 
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
