import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalVideo from "react-modal-video";

export default function VideoButton({ videoId, videoSrc, poster }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpen || !videoSrc) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.classList.add("local-video-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("local-video-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, videoSrc]);

  const localVideoModal =
    videoSrc && isOpen
      ? createPortal(
          <div className="local-video-modal" role="dialog" aria-modal="true">
            <button
              className="local-video-backdrop"
              type="button"
              aria-label="Close video"
              onClick={() => setOpen(false)}
            />
            <div className="local-video-panel">
              <button
                className="local-video-close"
                type="button"
                aria-label="Close video"
                onClick={() => setOpen(false)}
              >
                X
              </button>
              <video
                src={videoSrc}
                poster={poster}
                controls
                autoPlay
                preload="metadata"
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div className="video-section">
      {localVideoModal}
      {!videoSrc && (
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
      )}
      <button
        className="video-section-btn"
        type="button"
        aria-label="Play reel"
        onClick={() => setOpen(true)}
      >
        <span className="ak-player-btn ak-accent-color">
          <span></span>
        </span>
      </button>
    </div>
  );
}
