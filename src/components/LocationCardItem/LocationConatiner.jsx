import React from "react";
import { Link } from "react-router-dom";

const locationInfo = {
  city: "Mysuru",
  addressLineOne: "No. 2716, 2, 3 7, Sri Harsha Rd",
  addressLineTwo: "Lashkar Mohalla, Mandi Mohalla",
  addressLineThree: "Mysuru, Karnataka 570001",
  phone: "07349646315",
  website: "www.sangroupofhotels.in",
  websiteLink: "http://www.sangroupofhotels.in/",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=8M55%2BF2%20Mysuru%2C%20Karnataka",
};

function LocationIcon() {
  return (
    <div className="card-icon">
      <svg
        viewBox="0 0 40 41"
        height="41"
        width="40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 11.127C16.1403 11.127 13 14.1177 13 17.7936C13 18.8971 13.2897 19.9913 13.8404 20.9618L19.6172 28.9121C19.6941 29.0448 19.8407 29.127 20 29.127C20.1593 29.127 20.3059 29.0448 20.3828 28.9121L26.1617 20.9585C26.7103 19.9913 27 18.8971 27 17.7936C27 14.1177 23.8597 11.127 20 11.127ZM20 21.127C18.0701 21.127 16.5 19.6316 16.5 17.7936C16.5 15.9557 18.0701 14.4603 20 14.4603C21.9299 14.4603 23.5 15.9557 23.5 17.7936C23.5 19.6316 21.9299 21.127 20 21.127Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function LocationCard({ className = "" }) {
  return (
    <div className={`location-card-item ${className}`}>
      <Link to={locationInfo.mapLink} target="_blank" rel="noreferrer">
        <LocationIcon />
      </Link>
      <h6 className="card-title">{locationInfo.city}</h6>
      <p className="card-subtext">{locationInfo.addressLineOne}</p>
      <p>{locationInfo.addressLineTwo}</p>
      <p>{locationInfo.addressLineThree}</p>
      <p>
        <a href={`tel:${locationInfo.phone}`}>{locationInfo.phone}</a>
      </p>
      <p>
        <a href={locationInfo.websiteLink} target="_blank" rel="noreferrer">
          {locationInfo.website}
        </a>
      </p>
    </div>
  );
}

export default function LocationConatiner() {
  return (
    <div className="container">
      <div className="location-card location-card-single">
        <LocationCard />
      </div>
    </div>
  );
}
