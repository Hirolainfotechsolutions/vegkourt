import React, { useLayoutEffect, useRef } from "react";
import { ButtonCommon } from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { borderAnimation, imageZoomInOut } from "../../helper/main";

const about_content = {
  title: "Veg Kourt",
  textWhite: "Pure Vegetarian Dining  ",
  imgOne: "/assets/img/vegkourtimages/vegkourtimg1.webp",
  subtext:
    "The menu moves from papad, chaat, soups, salads, and grills into rich mains, Indian breads, pastas, biryani, Oriental plates, and desserts.",
  details:
    "Inspired by everyday cravings and slow conversations, Veg Kourt brings bold spices, crisp textures, and warm memories into a clean vegetarian dining experience.",
};

export default function AboutContent({ content = about_content }) {
  const { title, textWhite, imgOne, subtext, details, buttonText } = content;
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);
  const borderAbout = useRef(null);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
    borderAnimation(borderAbout.current, 2, 13);
  }, []);

  return (
    <section className="ak-about-bg-color" ref={imageContainer}>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-about ak-style-1">
        <div className="ak-about-bg-img ak-bg">
          <img src={imgOne} alt="..." ref={imageZoomIn} />
        </div>
        <div className="ak-about-hr" ref={borderAbout}></div>
        <div className="container">
          <div className="about-section ak-about-1">
            <div className="about-text-section">
              <SectionTitle title={title} textWhite={textWhite} />

              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{details}</p>
              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{subtext}</p>
              <div className="ak-height-50 ak-height-lg-30"></div>
              <ButtonCommon to={"/about"}>
                {buttonText || "Discover The Kitchen"}
              </ButtonCommon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
