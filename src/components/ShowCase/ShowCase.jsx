import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import classNames from "classnames";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    src: "/assets/img/vegkourtimages/sev-tamatar.webp",
    thumbnail: "/assets/img/vegkourtimages/sev-tamatar.webp",
    caption: "Sev Tamatar",
    title: "Sev Tamatar",
    desp: "Mains",
  },
  {
    src: "/assets/img/vegkourtimages/crispy-paneer-rolls.webp",
    thumbnail: "/assets/img/vegkourtimages/crispy-paneer-rolls.webp",
    caption: "Crispy Paneer Rolls",
    title: "Crispy Paneer Rolls",
    desp: "Starters",
  },
  {
    src: "/assets/img/vegkourtimages/shahi-tukda-rabri.webp",
    thumbnail: "/assets/img/vegkourtimages/shahi-tukda-rabri.webp",
    caption: "Shahi Tukda Rabri",
    title: "Shahi Tukda Rabri",
    desp: "Desserts",
  },
];

export default function ShowCase() {
  const ClassOption = classNames(
    "row row-cols-1 row-cols-md-2  row-cols-xl-3 g-5"
  );
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container" id="foodItems">
        <SectionTitle
          title={"Vegkourt Plates"}
          subTitle={"Food Showcase"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames={ClassOption}
        >
          {galleryItems?.map((image, index) => (
            <Link to={image.thumbnail} key={index}>
              <div className="gallery-hover">
                <img className="h-100" src={image.src} alt={image.caption} />
                <div className="gallery-img-overlay">
                  <div className="images-info">
                    <div className="gallery-img-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <rect
                          x="0.507812"
                          y="19.7305"
                          width="40"
                          height="1"
                          fill="#FFD28D"
                        />
                        <rect
                          x="20.0078"
                          y="0.730469"
                          width="1"
                          height="40"
                          fill="#FFD28D"
                        />
                      </svg>
                    </div>
                    <div className="gallery-hover-info">
                      <div>
                        <h6>{image.title}</h6>
                        <p>{image.desp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}
