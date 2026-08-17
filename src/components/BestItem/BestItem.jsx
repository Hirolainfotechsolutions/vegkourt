import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";

const bestItem = {
  title: "Menu Highlights",
  textWhite: "Our",
  imgOne: "/assets/img/vegkourtimages/vegkourtimg5.webp",
  imgTwo: "/assets/img/vegkourtimages/vegkourtimg11.webp",
  details:
    "From crisp starters to generous vegetarian plates, Vegkourt brings rich mains, rice bowls, Oriental flavours, and desserts together on one warm table.",
};

export default function BestItem() {
  const { imgOne, imgTwo, details, title } = bestItem;
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <div className="ak-best-item">
          <div className="best-item-section-1">
            <SectionTitle title={title} textWhite={"Our"} />
            <div className="ak-height-30 ak-height-lg-30"></div>
            <p>{details}</p>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="img-one">
              <ImgesOverlay image={imgTwo} />
            </div>
          </div>
          <div className="best-item-section-2" data-speed="1.1" data-lag="1">
            <img src="/assets/img/icon/star_line.svg" alt="..." />
          </div>
          <div className="best-item-section-3">
            <div className="img-two">
              <ImgesOverlay image={imgOne} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
