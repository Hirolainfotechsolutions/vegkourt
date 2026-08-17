import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import CommonHero from "../components/CommonHero/CommonHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import BookingSystem from "../components/BookingSystem/BookingSystem";
import GoogleMap from "../components/GoogleMap/GoogleMap";

export default function Reservations() {
  return (
    <>
      <CommonHero
        title={"Reservation"}
        link={"/"}
        image={"/assets/img/vegkourtimages/vegkourtimg6.webp"}
      />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container-fluid">
        <div className="ak-booking-system-map-from">
          <div className="booking-system-map">
            <GoogleMap addressLink="https://www.google.com/maps?q=8M55%2BF2%20Mysuru%2C%20Karnataka&output=embed" />
            <div className="booking-system-map-second">
              <div className="booking-system-heading">
                <SectionTitle
                  title={"Reservations"}
                  subTitle={"Reservations"}
                  animTwo={true}
                />
                <div className="ak-height-60 ak-height-lg-30"></div>
                <BookingSystem />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <SectionTitle
        title={"Nearby Find Us"}
        subTitle={"Visit Us"}
        tyle={"center"}
      />
      <div className="ak-height-65 ak-height-lg-30"></div>

      <LocationConatiner />
    </>
  );
}
