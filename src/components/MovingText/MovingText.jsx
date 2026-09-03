import React from "react";

const companyLinks = [
  {
    name: "Hotel Maurya Palace And Residency",
    url: "https://hotelmauryapalaceandresidency.sangroupofhotels.in/",
  },
  {
    name: "Streamedge Sakleshpur",
    url: "https://streamedgesakleshpur.com/",
  },
  {
    name: "Kaduhithlu Resort",
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
