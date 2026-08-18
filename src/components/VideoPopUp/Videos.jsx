import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { imageZoomInOut } from "../../helper/main";

import aboutVideoBg from "/assets/img/vegkourtimages/vegkourtimg11.webp";

const instagramReelUrl = "https://www.instagram.com/veg_kourt/reel/DXwYG0ATFfo/";

export default function Videos({
  videoId,
  videoSrc,
  poster = "/assets/img/vegkourtimages/vegkourtimg10.webp",
  reelUrl = instagramReelUrl,
}) {
  const [isReelOpen, setIsReelOpen] = useState(false);
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
  }, [videoId]);

  useEffect(() => {
    if (!isReelOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsReelOpen(false);
      }
    };

    document.body.classList.add("reel-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("reel-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isReelOpen]);

  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="video-section image-only" ref={imageContainer}>
        <img
          src={aboutVideoBg}
          alt="..."
          className="video-section-bg-img ak-bg"
          ref={imageZoomIn}
        />
        <div className="video-section-content">
          <div className="video-section-copy">
            <p>Vegkourt Menu</p>
            <h3>Bold Spices, Crisp Textures</h3>
            <a href={reelUrl} target="_blank" rel="noreferrer">
              Open On Instagram
            </a>
          </div>
          <div className="instagram-reel-card">
            <img
              src={poster}
              alt="Vegkourt reel preview"
            />
            <button type="button" onClick={() => setIsReelOpen(true)}>
              Play Reel
            </button>
          </div>
        </div>
      </div>
      {isReelOpen && (
        <div className="reel-modal" role="dialog" aria-modal="true">
          <button
            className="reel-modal-backdrop"
            type="button"
            aria-label="Close reel"
            onClick={() => setIsReelOpen(false)}
          />
          <div className="reel-modal-panel">
            <button
              className="reel-modal-close"
              type="button"
              aria-label="Close reel"
              onClick={() => setIsReelOpen(false)}
            >
              X
            </button>
            {videoSrc ? (
              <video src={videoSrc} poster={poster} controls autoPlay preload="metadata" />
            ) : (
              <>
                <div className="reel-modal-preview">
                  <img src={poster} alt="Vegkourt Instagram reel preview" />
                  <p>Instagram does not allow this reel to play inside the site.</p>
                </div>
                <a href={reelUrl} target="_blank" rel="noreferrer">
                  Watch Reel On Instagram
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
