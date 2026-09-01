import React from "react";

const companyLinks = [
  {
    name: "hotelmauryapalaceandresidency",
    url: "https://hotelmauryapalaceandresidency.sangroupofhotels.in/",
  },
  {
    name: "streamedgesakleshpur",
    url: "https://streamedgesakleshpur.com/",
  },
  {
    name: "kaduhithluresort",
    url: "https://kaduhithluresort.com/",
  },
];

const scrollingLinks = [...companyLinks, ...companyLinks];

export default function MovingText() {
  return (
    <div className="ak-moving-section-wrap ak-moving-section-hover-push ak-normal text-uppercase">
      <div className="ak-moving-section-in">
        {scrollingLinks.map((company, i) => (
          <div className="ak-moving-section" key={i}>
            <h3>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.name}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
