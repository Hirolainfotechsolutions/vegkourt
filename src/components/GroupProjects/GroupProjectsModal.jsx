import React, { useEffect } from "react";
import { ExternalLink, MapPin, X } from "lucide-react";

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

export default function GroupProjectsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("group-projects-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("group-projects-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="group-projects-overlay" role="presentation">
      <button
        className="group-projects-backdrop"
        type="button"
        aria-label="Close group projects"
        onClick={onClose}
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
          onClick={onClose}
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
            <span className="group-projects-explore">Explore All</span>
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
  );
}
