import React from "react";
import PortfolioDetailsSlider from "../components/PortfolioDetailsSlider/PortfolioDetailsSlider";
import CommonHero from "../components/CommonHero/CommonHero";
import protfoliList from "../dataJson/protfolilists.json";
import { Link, useParams } from "react-router-dom";

export default function Portfoliodetails() {
  const { id } = useParams();
  const findProtfoli = protfoliList?.find((protfoli) => protfoli.id == id);

  return (
    <>
      <CommonHero title={"Portfolio Details"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-portfolio-details-border"></div>
      <div className="container">
        <div className="portfolio-section">
          <div className="portfolio-info">
            <h2 className="anim-title-3 objects-up-down">
              {findProtfoli?.subtitle}
            </h2>
            <div className="d-inline">
              <h6>
                Category :{" "}
                <span>{findProtfoli?.portfoliodetails?.category}</span>
              </h6>
              <h6>
                Date : <span>{findProtfoli?.portfoliodetails?.date}</span>
              </h6>
              <h6>
                Tags :{" "}
                <span>
                  {findProtfoli?.portfoliodetails?.tags?.map(
                    (data) => `${data} `
                  )}
                </span>
              </h6>
            </div>
          </div>
          <PortfolioDetailsSlider
            props={findProtfoli?.portfoliodetails?.portfolioSlider}
          />
        </div>
        <div className="ak-height-100 ak-height-lg-60"></div>
        <h3 className="ak-white-color">Ingredient</h3>
        <div className="ak-height-30 ak-lg-height-30"></div>
        <div className="portfolio-details">
          <div className="portfolio-details-text">
            <p>{findProtfoli?.portfoliodetails?.desp}</p>
            <div className="ak-height-30 ak-height-lg-15"></div>
            <p>{findProtfoli?.portfoliodetails?.shortdesp}</p>
          </div>
          <div className="portfolio-details-icon">
            <h6>Explore:</h6>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/reservations">Reserve</Link>
          </div>
        </div>
      </div>
    </>
  );
}
