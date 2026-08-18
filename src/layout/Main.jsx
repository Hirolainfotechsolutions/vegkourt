import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Scrollup from "../components/ScrollUp/Scrollup";
import ReservationPopup from "../components/ReservationPopup/ReservationPopup";
import { scrollUpBtn } from "../helper/main";
import { Phone, MessageCircle } from "lucide-react";

export default function Main() {
  const { pathname } = useLocation();
  const hideFooter = pathname == "/error-pages" || pathname == "/comming-soon";
  const disableReservationPopup = hideFooter || pathname == "/reservations";

  useEffect(() => {
    scrollUpBtn();
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
      {hideFooter ? " " : <Footer />}
      <ReservationPopup disabled={disableReservationPopup} />
      {!hideFooter && (
        <div className="floating-contact-actions" aria-label="Quick contact">
          <a
            href="https://wa.me/917349646315"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle aria-hidden="true" size={22} strokeWidth={2} />
          </a>
          <a href="tel:07349646315" aria-label="Call Vegkourt" title="Call">
            <Phone aria-hidden="true" size={21} strokeWidth={2} />
          </a>
        </div>
      )}
      <Scrollup />
    </>
  );
}
