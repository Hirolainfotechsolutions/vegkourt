import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";
import { ButtonCommon } from "../Button/Button";
import classNames from "classnames";

const Openinginfo = {
  title: "Opening Hours",
  image: "/assets/img/vegkourtimages/vegkourtimg9.webp",
  subtext:
    "Vegkourt is open through the day for fresh vegetarian breakfast, brunch, lunch, dinner, takeout, and online orders.",
  hours: [
    { service: "Breakfast", time: "7-11 am" },
    { service: "Brunch", time: "11 am-3:30 pm" },
    { service: "Lunch", time: "12-3:30 pm" },
    { service: "Dinner", time: "7-11 pm" },
    { service: "Takeout", time: "11 am-3:30 pm, 7-11 pm" },
    { service: "Online Orders", time: "11 am-3:30 pm, 7-11 pm" },
  ],
};

export default function OpeningHoursInfo({
  typeTwo,
  info = Openinginfo,
  buttonText = "Reservation",
}) {
  const { title, image, subtext, hours } = info;

  const openingHour = classNames("opening-hour", {
    "type-2": typeTwo,
  });

  const openingHourimg = classNames("opening-hour-img-section", {
    "style-2": typeTwo,
  });
  const openingHourtext = classNames("opening-hour-text-section", {
    "type-2": typeTwo,
  });
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className={typeTwo ? "container" : "ak-bg-secendary"}>
        <div className={openingHour}>
          <div className={openingHourimg}>
            <ImgesOverlay image={image} imagesZoom={true} />
          </div>
          <div className={openingHourtext}>
            <SectionTitle title={title} animTwo={true} />
            <div className="ak-height-30 ak-height-lg-30"></div>
            <p className="opening-hour-subtext">{subtext}</p>
            {hours?.length ? (
              <>
                <div className="ak-height-30 ak-height-lg-30"></div>
                <div className="opening-hour-date">
                  {hours.map((item, index) => (
                    <React.Fragment key={item.service}>
                      <p>
                        <span>{item.service}</span>
                        <span>{item.time}</span>
                      </p>
                      {index < hours.length - 1 ? (
                        <div className="opening-hour-hr"></div>
                      ) : (
                        ""
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}

            <div className="ak-height-70 ak-height-lg-30"></div>
            <ButtonCommon to="/reservations">{buttonText}</ButtonCommon>
          </div>
        </div>
      </div>
    </>
  );
}
