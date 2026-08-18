import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Camera, PlayCircle, ThumbsUp } from "lucide-react";
import { footerAnimation, scrollUpBtn, scrollUpShow } from "../../helper/main";
import { WhiteButton } from "../../components/Button/Button";

import footerBg from "/assets/img/vegkourtimages/vegkourtimg10.webp";
import vegkourtLogo from "/assets/img/vegkourtimages/logobg2.jpg";

const Footertext = {
  website: "www.sangroupofhotels.in",
  websiteLink: "http://www.sangroupofhotels.in/",
  phoneone: "07349646315",
  addressone: "No. 2716, 2, 3 7, Sri Harsha Rd",
  addresstwo: "Lashkar Mohalla, Mandi Mohalla",
  addressthree: "Mysuru, Karnataka 570001",
  mapLink: "https://www.google.com/maps/search/?api=1&query=8M55%2BF2%20Mysuru%2C%20Karnataka",
  hours: [
    { service: "Breakfast", time: "7-11 am" },
    { service: "Brunch", time: "11 am-3:30 pm" },
    { service: "Lunch", time: "12-3:30 pm" },
    { service: "Dinner", time: "7-11 pm" },
    { service: "Takeout", time: "11 am-3:30 pm, 7-11 pm" },
    { service: "Online Orders", time: "11 am-3:30 pm, 7-11 pm" },
  ],
  copyright: "Copyright 2026 Vegkourt. All Rights Reserved",
};

const Footernav = [
  {
    title: "Home",
    link: "/",
    key: "home",
  },
  {
    title: "About",
    link: "/about",
    key: "about",
  },
  {
    title: "Menu",
    link: "/menu",
    key: "menu",
  },
  {
    title: "Blogs",
    link: "/blog",
    key: "blog",
  },
  {
    title: "Gallery",
    link: "/gallery",
    key: "gallery",
  },
  {
    title: "Reservations",
    link: "/reservations",
    key: "reservations",
  },
  {
    title: "Contact Us",
    link: "/contact",
    key: "contact",
  },
];

const FooterSocial = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/veg_kourt/",
    Icon: Camera,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/",
    Icon: ThumbsUp,
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/",
    Icon: PlayCircle,
  },
];

export default function Footer() {
  const scrollup = useRef();
  const footerContainer = useRef(null);
  const footerHrTop = useRef(null);
  const footerHrBottom = useRef(null);
  const footerTimeBorder = useRef(null);

  useLayoutEffect(() => {
    footerAnimation(
      footerContainer.current,
      footerHrTop.current,
      footerHrBottom.current,
      footerTimeBorder.current
    );
    scrollUpShow(scrollup.current);
  }, [
    footerContainer.current,
    footerHrTop.current,
    footerHrBottom.current,
    footerTimeBorder.current,
  ]);

  return (
    <footer>
      <div className="ak-height-150 ak-height-lg-150"></div>
      <div className="ak-footer ak-style-1">
        <img className="ak-bg footer-bg-img" src={footerBg} />
        <div className="container ak-hr-container" ref={footerContainer}>
          <div className="ak-braner-logo type-color-1 footer-logo">
            <div
              className="footer-log-elem"
              ref={scrollup}
              onClick={() => scrollUpBtn()}
            >
              <div className="footer-log-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
                >
                  <path
                    d="M28.991 12.2063L14.8322 1L0.67334 12.2063"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <img src={vegkourtLogo} alt="..." />
            </div>
          </div>
          <div className="ak-height-100 ak-height-lg-60"></div>
          <div className="ak-footer-hr-top" ref={footerHrTop}></div>

          <div className="footer-main">
            <div className="footer-eamil-menu">
              <div className="footer-email">
                <a href={Footertext.websiteLink} target="_blank" rel="noreferrer">
                  {Footertext.website}
                </a>
              </div>
              <div className="footer-menu">
                <ul>
                  {Footernav?.map((item) => {
                    return (
                      <li key={item.key}>
                        <Link to={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="footer-social" aria-label="Social media links">
                {FooterSocial.map((item) => (
                  <a
                    href={item.link}
                    key={item.title}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.title}
                    title={item.title}
                  >
                    <item.Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>
            <div className="ak-height-75 ak-height-lg-5"></div>
            <div className="footer-info">
              <div className="fooer-phn">
                <a href={`tel:${Footertext.phoneone}`}>{Footertext.phoneone}</a>
              </div>
              <div className="footer-address">
                <a
                  href={Footertext.mapLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {Footertext.addressone}
                  <br />
                  {Footertext.addresstwo}
                  <br />
                  {Footertext.addressthree}
                </a>
              </div>
              <div className="footer-time">
                <h6 className="footer-time-title">Opening Hours</h6>
                <div
                  className="footer-time-border footer-time-title-border"
                  ref={footerTimeBorder}
                ></div>
                {Footertext.hours.map((item) => (
                  <React.Fragment key={item.service}>
                    <p>
                      <span>{item.service}</span>
                      <span>{item.time}</span>
                    </p>
                  </React.Fragment>
                ))}
              </div>
              <div className="footer-btn">
                <WhiteButton to="/reservations">Reservations</WhiteButton>
              </div>
            </div>
          </div>

          <div
            className="ak-footer-hr-bottom qodef-grid-item"
            ref={footerHrBottom}
          ></div>
          <div className="ak-height-130 ak-height-lg-30"></div>

          <div className="copy-right-section">
            <p className="text-uppercase text-md-center text-white">
              {Footertext.copyright}
            </p>
          </div>

          <div className="ak-height-45 ak-height-lg-30"></div>
        </div>
      </div>
    </footer>
  );
}
