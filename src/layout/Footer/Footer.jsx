import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
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
  copyrightBrand: "Copyright © 2026 Veg Kourt All Rights Reserved. Designed by",
  designer: "Hirola InfoTech Solutions Pvt Ltd.",
  designerLink: "https://hirolainfotech.com/",
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
    title: "Facebook",
    link: "https://www.facebook.com/",
    Icon: FacebookIcon,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/veg_kourt/",
    Icon: InstagramIcon,
  },
  {
    title: "Pinterest",
    link: "https://www.pinterest.com/",
    Icon: PinterestIcon,
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/",
    Icon: YoutubeIcon,
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
              {Footertext.copyrightBrand}{" "}
              <a
                href={Footertext.designerLink}
                target="_blank"
                rel="noreferrer"
              >
                {Footertext.designer}
              </a>
            </p>
          </div>

          <div className="ak-height-45 ak-height-lg-30"></div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14 8.5V6.6c0-.86.2-1.3 1.42-1.3H17V2.1c-.77-.08-1.54-.1-2.31-.1-2.85 0-4.62 1.74-4.62 4.94V8.5H7v3.58h3.07V22H14v-9.92h2.76l.44-3.58H14Z"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm0 2A3.81 3.81 0 0 0 4 7.8v8.4A3.81 3.81 0 0 0 7.8 20h8.4a3.81 3.81 0 0 0 3.8-3.8V7.8A3.81 3.81 0 0 0 16.2 4H7.8Zm4.2 3.33A4.67 4.67 0 1 1 7.33 12 4.67 4.67 0 0 1 12 7.33Zm0 2A2.67 2.67 0 1 0 14.67 12 2.67 2.67 0 0 0 12 9.33Zm5.02-2.54a1.09 1.09 0 1 1-1.09 1.09 1.09 1.09 0 0 1 1.09-1.09Z"
      />
    </svg>
  );
}

function PinterestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12.18 2C6.92 2 4.14 5.56 4.14 9.44c0 1.8.96 4.05 2.5 4.76.23.11.36.06.42-.17.04-.18.25-1.02.34-1.42.03-.13.02-.24-.09-.37-.5-.6-.9-1.68-.9-2.7 0-2.7 2.04-5.31 5.52-5.31 3 0 5.1 2.05 5.1 4.98 0 3.31-1.67 5.6-3.85 5.6-1.2 0-2.1-.99-1.81-2.21.35-1.46 1.02-3.04 1.02-4.1 0-.95-.51-1.74-1.56-1.74-1.24 0-2.23 1.28-2.23 2.99 0 1.09.37 1.82.37 1.82s-1.22 5.16-1.44 6.12c-.25 1.05-.15 2.53-.04 3.49.08.67.89.82 1.18.21.5-.99 1.32-2.75 1.6-3.82.15-.57.77-2.93.77-2.93.41.77 1.58 1.42 2.83 1.42 3.72 0 6.4-3.42 6.4-7.67C20.27 4.31 16.96 2 12.18 2Z"
      />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M21.58 7.19a2.73 2.73 0 0 0-1.92-1.93C17.96 4.8 12 4.8 12 4.8s-5.96 0-7.66.46a2.73 2.73 0 0 0-1.92 1.93A28.58 28.58 0 0 0 2 12a28.58 28.58 0 0 0 .42 4.81 2.73 2.73 0 0 0 1.92 1.93c1.7.46 7.66.46 7.66.46s5.96 0 7.66-.46a2.73 2.73 0 0 0 1.92-1.93A28.58 28.58 0 0 0 22 12a28.58 28.58 0 0 0-.42-4.81ZM10 15.2V8.8l5.2 3.2L10 15.2Z"
      />
    </svg>
  );
}
