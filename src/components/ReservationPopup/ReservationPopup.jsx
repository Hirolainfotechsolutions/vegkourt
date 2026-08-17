import React, { useEffect, useState } from "react";
import BookingSystem from "../BookingSystem/BookingSystem";

const POPUP_STORAGE_KEY = "vegkourt-reservation-popup-shown";

export default function ReservationPopup({ disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (disabled || sessionStorage.getItem(POPUP_STORAGE_KEY)) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [disabled]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.classList.add("reservation-popup-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("reservation-popup-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="reservation-popup" role="dialog" aria-modal="true">
      <button
        className="reservation-popup-backdrop"
        type="button"
        aria-label="Close reservation popup"
        onClick={() => setIsOpen(false)}
      ></button>
      <div className="reservation-popup-panel">
        <button
          className="reservation-popup-close"
          type="button"
          aria-label="Close reservation popup"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        <BookingSystem />
      </div>
    </div>
  );
}
