import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import CommonHero from "../components/CommonHero/CommonHero";
import OpeningHoursInfo from "../components/OpenIngHour/OpeningHoursInfo";
import Videos from "../components/VideoPopUp/Videos";

const aboutIntro = {
  title: "Vegkourt",
  textWhite: "Welcome To",
  imgOne: "/assets/img/vegkourtimages/outsideimage.webp",
  details:
    "Vegkourt welcomes guests into a warm pure vegetarian restaurant space in Mysuru, built for relaxed meals, family gatherings, and fresh flavours.",
  subtext:
    "From the entrance to the table, the experience is designed to feel clean, inviting, and comfortable for every vegetarian diner.",
  buttonText: "Explore Vegkourt",
};

const celebrationInfo = {
  title: "Birthday Parties",
  image: "/assets/img/vegkourtimages/bdparty.webp",
  subtext:
    "Celebrate birthdays, family moments, and small gatherings with a pure vegetarian menu, warm service, and a table arranged around your occasion.",
  hours: [],
};

export default function About() {
  return (
    <div>
      <CommonHero
        title={"About Us"}
        link={"/"}
        image={"/assets/img/vegkourtimages/vegkourtimg2.webp"}
      />
      <AboutContent content={aboutIntro} />
      <OpeningHoursInfo
        typeTwo={true}
        info={celebrationInfo}
        buttonText="Plan Your Celebration"
      />
      <Videos
        videoSrc="/assets/img/vegkourtimages/video2.mp4"
        poster="/assets/img/vegkourtimages/vegkourtimg10.webp"
      />
    </div>
  );
}
