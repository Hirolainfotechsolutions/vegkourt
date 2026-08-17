import React from "react";
import CommonHero from "../components/CommonHero/CommonHero";
import BlogConatiner from "../components/BlogCard/BlogConatiner";

export default function Blog() {
  return (
    <>
      <CommonHero
        title={"Blogs"}
        link={"/"}
        image={"/assets/img/vegkourtimages/vegkourtimg7.webp"}
      />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <BlogConatiner />
    </>
  );
}
