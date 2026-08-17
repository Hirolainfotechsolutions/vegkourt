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
        title={"Reservations"}
        link={"/"}
        image={"/assets/img/vegkourtimages/banner2.webp"}
      />
      <div className="ak-height-100 ak-height-lg-60"></div>
      <section className="reservation-page-intro">
        <div className="container">
          <div className="reservation-intro-grid">
            <div>
              <p className="reservation-intro-kicker">Vegkourt Mysuru</p>
              <h2>Reserve Your Table</h2>
            </div>
            <p>
              Plan a pure vegetarian lunch, dinner, family gathering, or
              celebration at Vegkourt. Share your preferred date, time, party
              size, and seating request, and our team will confirm your table.
            </p>
          </div>
          <div className="reservation-info-row">
            <div>
              <span>Best For</span>
              <p>Family dining, birthdays, business meals</p>
            </div>
            <div>
              <span>Location</span>
              <p>Sri Harsha Road, Lashkar Mohalla, Mysuru</p>
            </div>
            <div>
              <span>Call</span>
              <p>
                <a href="tel:07349646315">07349646315</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="ak-height-100 ak-height-lg-60"></div>
      <div className="container-fluid">
        <div className="ak-booking-system-map-from">
          <div className="booking-system-map">
            <GoogleMap addressLink="https://www.google.com/maps?q=8M55%2BF2%20Mysuru%2C%20Karnataka&output=embed" />
            <div className="booking-system-map-second">
              <div className="booking-system-heading">
                <SectionTitle
                  title={"Plan Your Visit"}
                  subTitle={"Table Booking"}
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
        title={"Find Vegkourt"}
        subTitle={"Mysuru Location"}
        tyle={"center"}
      />
      <div className="ak-height-65 ak-height-lg-30"></div>

      <LocationConatiner />
    </>
  );
}
