import React from "react";
import { Link } from "react-router-dom";

export default function SideBarBlogDetails(props) {
  return (
    <>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div>
        <div className="search-filed">
          <input type="text" className="input-section" placeholder="Search" />
          <button type="submit" className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M15.5 14.0898H14.71L14.43 13.8198C15.4439 12.6439 16.0011 11.1425 16 9.58985C16 8.30427 15.6188 7.04756 14.9046 5.97864C14.1903 4.90972 13.1752 4.0766 11.9874 3.58463C10.7997 3.09266 9.49279 2.96394 8.23192 3.21474C6.97104 3.46555 5.81285 4.08461 4.90381 4.99365C3.99477 5.90269 3.3757 7.06088 3.1249 8.32176C2.87409 9.58264 3.00282 10.8896 3.49479 12.0773C3.98676 13.265 4.81988 14.2802 5.8888 14.9944C6.95772 15.7086 8.21442 16.0898 9.5 16.0898C11.11 16.0898 12.59 15.4998 13.73 14.5198L14 14.7998V15.5898L19 20.5798L20.49 19.0898L15.5 14.0898ZM9.5 14.0898C7.01 14.0898 5 12.0798 5 9.58985C5 7.09985 7.01 5.08985 9.5 5.08985C11.99 5.08985 14 7.09985 14 9.58985C14 12.0798 11.99 14.0898 9.5 14.0898Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div>
        <h5>Popular Categories</h5>
        <div className="category-list">
          {props?.props?.popularcategorylis.map((elem, i) => (
            <Link to="/blog" key={i}>
              {elem}
            </Link>
          ))}
        </div>
      </div>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div className="popular-tag">
        {props?.props?.populartag.map((elem, i) => (
          <Link to="/blog" key={i}>
            {elem}
          </Link>
        ))}
      </div>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div className="author-info">
        <img
          className="author-img"
          src="/assets/img/logo/vegkourt-logo-header.png"
          alt="..."
        />
        <h6 className="author-title">Vegkourt Kitchen</h6>
        <p className="author-text">
          Notes from our pure vegetarian kitchen in Mysuru.
        </p>
        <a
          href="http://www.sangroupofhotels.in/"
          className="author-link"
          target="_blank"
          rel="noreferrer"
        >
          Visit SAN Group
        </a>
      </div>
    </>
  );
}
