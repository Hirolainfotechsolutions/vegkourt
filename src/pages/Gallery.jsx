import React from "react";
import classNames from "classnames";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import CommonHero from "../components/CommonHero/CommonHero";

import foodmenulist from "../dataJson/foodmenulist.json";

const menuGalleryItems = foodmenulist.flatMap((section) =>
  section.foodMenu.map((item) => ({
    src: item.image,
    thumbnail: item.image,
    caption: item.title,
    title: item.title,
    desp: section.headingtext.title,
  }))
);

export default function GalleryShow() {
  const ClassOption = classNames(
    "row row-cols-1 row-cols-md-2  row-cols-xl-3 g-5"
  );
  return (
    <>
      <CommonHero
        title={"Gallery"}
        link={"/"}
        image={"/assets/img/vegkourtimages/vegkourtimg4.webp"}
      />
      <div className="container">
        <div className="ak-height-150 ak-height-lg-60"></div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames={ClassOption}
        >
          {menuGalleryItems?.map((image, index) => (
            <a
              href={image.thumbnail}
              data-sub-html={`<h4>${image.title}</h4><p>${image.desp}</p>`}
              key={`${image.title}-${index}`}
            >
              <div className="gallery-hover gallery-menu-card">
                <div className="gallery-menu-img-wrap">
                  <img src={image.src} alt={image.caption} loading="lazy" />
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
                <div className="gallery-menu-caption">
                  <h6>{image.title}</h6>
                  <p>{image.desp}</p>
                </div>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </>
  );
}
