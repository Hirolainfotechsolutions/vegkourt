import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import CommonHero from "../components/CommonHero/CommonHero";
import OpeningHoursInfo from "../components/OpenIngHour/OpeningHoursInfo";
import Videos from "../components/VideoPopUp/Videos";

export default function About() {
  return (
    <div>
      <CommonHero
        title={"About Us"}
        link={"/"}
        image={"/assets/img/vegkourtimages/vegkourtimg2.webp"}
      />
      <AboutContent />
      <OpeningHoursInfo typeTwo={true} />
      <Videos videoId={"UsD1MhKBmD4"} />
    </div>
  );
}
