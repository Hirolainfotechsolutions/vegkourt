import React from "react";
import CommonHero from "../components/CommonHero/CommonHero";
import FoodMenuItem from "../components/FoodMenu/FoodMenuItem";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import foodmenulist from "../dataJson/foodmenulist.json";

export default function Menu() {
  return (
    <div>
      <CommonHero
        title={"Our Menu"}
        link={"/"}
        image={"/assets/img/vegkourtimages/vegkourtimg3.webp"}
      />
      {foodmenulist?.map((item, i) => (
        <div key={i} className="set-bg-img-section">
          <img
            src={`${item.bgImgShow}`}
            alt="..."
            className="bg-img ak-bg"
          />

          <div className="ak-height-150 ak-height-lg-60"></div>
          <div className="container">
            <SectionTitle
              title={item.headingtext.title}
              subTitle={item.headingtext.subTitle}
              tyle={item.headingtext.tyle}
            />
            <div className="ak-height-65 ak-height-lg-30"></div>
            <div className="ak-menu-list">
              {item.foodMenu?.map((item, index) => {
                return <FoodMenuItem key={index} data={item} />;
              })}
            </div>
          </div>

          <div className="ak-height-150 ak-height-lg-0"></div>
          <div className="ak-height-150 ak-height-lg-60"></div>
        </div>
      ))}
    </div>
  );
}
