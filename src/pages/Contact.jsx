import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CommonHero from "../components/CommonHero/CommonHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import CommentConatctFrom from "../components/Comment/CommentConatctFrom";

export default function Contact() {
  return (
    <>
      <CommonHero
        title={"Contact Us"}
        link={"/"}
        image={"/assets/img/vegkourtimages/vegkourtimg5.webp"}
      />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <div className="contact-content">
          <div className="contact-form">
            <div className="contact-form-title ">
              <SectionTitle animTwo={true} textWhite={"Contact Us"} />
            </div>
            <CommentConatctFrom />
          </div>
          <div className="contact-map">
            <GoogleMap addressLink="https://www.google.com/maps?q=8M55%2BF2%20Mysuru%2C%20Karnataka&output=embed" />
          </div>
        </div>
      </div>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <SectionTitle
          title={"Nearby Find Us"}
          subTitle={"Visit us"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        <LocationConatiner />
      </div>
    </>
  );
}
