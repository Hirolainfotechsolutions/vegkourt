import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ExternalLink, MapPin, Phone, Sparkles, X } from "lucide-react";

import logo from "/assets/img/newlogos/3.svg";

const Headerlogo = {
  title: "reservations",
  link: "/reservations",
  img: logo,
};

const groupWebsiteUrl = "https://sangroupofhotels.in/";

const groupProjects = [
  {
    title: "Hotel Maurya Palace and Residency",
    location: "Mysore, Karnataka",
    image: "/assets/img/group-projects/mauriya1.webp",
    url: "https://hotelmauryapalaceandresidency.sangroupofhotels.in/",
  },
  {
    title: "Kaduhithlu Resort",
    location: "Kaduhithlu, Karnataka",
    image: "/assets/img/group-projects/kaduhithlu-banner-2.webp",
    logo: "/assets/img/group-projects/tHE-KADUHITHLU-final-logo-724x1024.webp",
    url: "https://kaduhithluresort.com/",
  },
  {
    title: "Streamedge Sakleshpur",
    location: "Sakleshpur, Karnataka",
    image: "/assets/img/group-projects/streamedge1.webp",
    url: "https://streamedgesakleshpur.com/",
  },
  {
    title: "Jewel Rock",
    location: "Coming Soon",
    logo: "/assets/img/group-projects/JW-LOGO.webp",
    comingSoon: true,
  },
  {
    title: "Coastal Jewel",
    location: "Coming Soon",
    logo: "/assets/img/group-projects/gold-logo-1024x1024.webp",
    comingSoon: true,
  },
];

export default function TopMainMenu(props) {
  const { Topnavlist } = props;

  const [showTopNavFullScreen, setshowTopNavFullScreen] = useState("");
  const [showGroupProjects, setShowGroupProjects] = useState(false);
  const showTopnav = () => {
    let topAllList = gsap.utils.toArray(".top-main-menu-li");
    let i = 1;

    if (showTopNavFullScreen == "") {
      setshowTopNavFullScreen("active");
      gsap.set(".ak-main_header_right", {
        display: "none",
      });

      topAllList.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            delay: i++ * 0.4,
            opacity: 1,
          }
        );
      });
    } else {
      gsap.set(".ak-main_header_right", {
        display: "block",
        delay: 0.5,
        duration: 1.5,
      });

      topAllList.forEach((item) => {
        gsap.set(item, {
          y: 0,
          opacity: 0,
        });
      });
      setshowTopNavFullScreen("");
    }
  };

  const closeTopnav = () => {
    gsap.set(".ak-main_header_right", {
      display: "block",
    });
    gsap.set(".top-main-menu-li", {
      y: 0,
      opacity: 0,
    });
    setshowTopNavFullScreen("");
  };

  const openGroupProjects = () => {
    if (showTopNavFullScreen) {
      closeTopnav();
    }

    setShowGroupProjects(true);
  };

  const closeGroupProjects = () => {
    setShowGroupProjects(false);
  };

  useEffect(() => {
    if (!showGroupProjects) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGroupProjects();
      }
    };

    document.body.classList.add("group-projects-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("group-projects-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showGroupProjects]);

  return (
    <div className="header-top">
      <div className="wrapper">
        <div className="header-logo">
          <Link to={Headerlogo?.link} className="logo">
            {Headerlogo?.title}
          </Link>
        </div>
        <div className="center-log">
          <Link to="/">
            <img src={Headerlogo?.img} alt="..." />
          </Link>
        </div>

        <a className="mobile-header-call" href="tel:07349646315">
          <Phone aria-hidden="true" size={16} strokeWidth={2} />
          <span>07349646315</span>
        </a>

        <button
          className="group-projects-trigger group-projects-top-trigger"
          type="button"
          onClick={openGroupProjects}
        >
          <Sparkles aria-hidden="true" size={16} strokeWidth={1.8} />
          <span>Our Groups</span>
        </button>

        <div className="nav-toggles" onClick={showTopnav}>
          <span
            id="navBar"
            className={`ak-munu_toggles-top ${showTopNavFullScreen}`}
          >
            <span></span>
          </span>
        </div>

        <ul className={`top-main-menu ${showTopNavFullScreen}`}>
          {Topnavlist?.map((item, i) => (
            <li className="top-main-menu-li" key={i}>
              <Link to={item.link} onClick={closeTopnav}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showGroupProjects && (
        <div className="group-projects-overlay" role="presentation">
          <button
            className="group-projects-backdrop"
            type="button"
            aria-label="Close group projects"
            onClick={closeGroupProjects}
          />
          <section
            className="group-projects-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="group-projects-title"
          >
            <button
              className="group-projects-close"
              type="button"
              aria-label="Close group projects"
              onClick={closeGroupProjects}
            >
              <X aria-hidden="true" size={22} strokeWidth={1.7} />
            </button>
            <div className="group-projects-shell">
              <a
                className="group-projects-brand-panel"
                href={groupWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 id="group-projects-title">SAN Group of Hotels</h2>
                <span className="group-projects-tagline">
                  Redefining Hospitality Since 1990
                </span>
                <img
                  src="/assets/img/group-projects/san-logo-png.webp"
                  alt="SAN Group of Hotels"
                />
                <span
                  className="group-projects-explore"
                >
                  Explore All
                </span>
              </a>
              <div
                className={`group-projects-grid project-count-${groupProjects.length}`}
              >
                {groupProjects.map((project) => {
                  const cardContent = (
                    <>
                      <span
                        className={`group-project-media${
                          project.comingSoon ? " logo-card" : ""
                        }`}
                      >
                        {project.image ? (
                          <img
                            className="group-project-image"
                            src={project.image}
                            alt={project.title}
                          />
                        ) : (
                          <img
                            className="group-project-logo-image"
                            src={project.logo}
                            alt={project.title}
                          />
                        )}
                      </span>
                    <strong>{project.title}</strong>
                    <span className="group-project-location">
                      <MapPin aria-hidden="true" size={13} strokeWidth={1.8} />
                      {project.location}
                    </span>
                    <span className="group-project-card-button">
                      {project.comingSoon ? "Coming Soon" : "Explore More"}
                      {!project.comingSoon && (
                        <ExternalLink
                          aria-hidden="true"
                          size={15}
                          strokeWidth={1.8}
                        />
                      )}
                    </span>
                    </>
                  );

                  return project.comingSoon ? (
                    <div
                      className="group-project-card group-project-card-coming"
                      key={project.title}
                    >
                      {cardContent}
                    </div>
                  ) : (
                    <a
                      className="group-project-card"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={project.url}
                    >
                      {cardContent}
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
