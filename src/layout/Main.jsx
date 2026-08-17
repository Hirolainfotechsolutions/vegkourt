import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Scrollup from "../components/ScrollUp/Scrollup";
import ReservationPopup from "../components/ReservationPopup/ReservationPopup";
import { scrollUpBtn } from "../helper/main";

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
      <Scrollup />
    </>
  );
}
