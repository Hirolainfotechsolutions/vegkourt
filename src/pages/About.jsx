import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import CommonHero from "../components/CommonHero/CommonHero";
import OpeningHoursInfo from "../components/OpenIngHour/OpeningHoursInfo";
import Videos from "../components/VideoPopUp/Videos";

const aboutIntro = {
  title: "Veg Kourt",
  textWhite: "Welcome To",
  imgOne: "/assets/img/vegkourtimages/outsideimage.webp",
  details:
    "Veg Kourt welcomes guests into a warm pure vegetarian restaurant space in Mysuru, shaped around bold spices, crisp textures, and slow table conversations.",
  subtext:
    "The menu runs from Mocktails, Nibbles & Bar Bites, Small Plates, Indian Street Chaats, Flatbread & Naanzas, Asian Plates, Main Course, Pastas, Soups & Salads, Indian Main Course, Indian Breads, Rice And Biryani, and Desserts.",
  buttonText: "Explore Veg Kourt",
};

const celebrationInfo = {
  title: "Birthday Parties",
  image: "/assets/img/vegkourtimages/bdparty.webp",
  subtext:
    "Celebrate birthdays, family moments, and small gatherings with pure vegetarian starters, curries, rice, breads, Oriental plates, and desserts arranged around your occasion.",
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
