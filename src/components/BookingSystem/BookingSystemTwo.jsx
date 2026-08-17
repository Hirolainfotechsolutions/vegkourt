import React, { useLayoutEffect, useRef } from "react";
import VideoButton from "../VideoPopUp/VideoButton";
import BookingSystem from "./BookingSystem";
import { imageZoomInOut } from "../../helper/main";
import bookingSystemBg from "/assets/img/vegkourtimages/reservation-split-bg.png";

export default function BookingSystemTwo({ videoId, videoSrc, poster }) {
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
  }, [videoId]);
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div
        className="ak-booking-system home-reservation-section"
        ref={imageContainer}
      >
        <img
          className="ak-booking-system-bg-img ak-bg"
          src={bookingSystemBg}
          alt="Vegkourt reservation dining table"
          ref={imageZoomIn}
        />
        <div className="ak-height-150 ak-height-lg-60"></div>
        <div className="container">
          <div className="row justify-content-center align-content-center align-items-center home-reservation-row">
            <div className="col-md-6 col-12 home-reservation-video">
              <div className="ak-height-lg-60"></div>
              <VideoButton videoId={videoId} videoSrc={videoSrc} poster={poster} />
              <div className="ak-height-lg-60"></div>
            </div>
            <div className="col-md-6 col-12 home-reservation-content">
              <div className="booking-system-map-second">
                <div className="booking-system-heading">
                  <p className="home-reservation-subtitle">Reservations</p>
                  <h2 className="home-reservation-title">Reservations</h2>
                  <BookingSystem compact />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-60"></div>
      </div>
    </>
  );
}
