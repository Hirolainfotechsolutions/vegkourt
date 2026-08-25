import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CommentUser from "../Comment/CommentUser";
import CommentConatctFrom from "../Comment/CommentConatctFrom";
import VideoButton from "../VideoPopUp/VideoButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import { imageZoomInOut } from "../../helper/main";
import BlogUser from "../../dataJson/bloguser.json";

export default function BlogDetailsContainerAround({ props }) {
  const videoImg = useRef();
  const container = useRef();
  const blogImg = useRef();
  const article = props.article || [];
  const internalImageAlt = getImageAltText(article) || props.title;
  const displayArticle = article.filter((block) => !isAltTextBlock(block));
  const altTextIndex = article.findIndex(isAltTextBlock);
  const internalImageIndex = altTextIndex > 0 ? altTextIndex - 1 : 2;
  const internalLinks = BlogUser.filter((blog) => blog.id !== props?.id).slice(
    0,
    4
  );

  useEffect(() => {
    imageZoomInOut(container.current, videoImg.current);
    imageZoomInOut(container.current, blogImg.current);
  }, []);
  return (
    <div ref={container}>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <img className="imagesZoom" src={props?.img} alt={props.title} ref={blogImg} />
      <div className="ak-height-75 ak-height-lg-30"></div>
      {displayArticle.map((block, index) => (
        <React.Fragment key={`${block.type}-${index}`}>
          {block.type === "heading" ? (
            <>
              <h4 className="anim-title-2 ak-white-color">{block.text}</h4>
              <div className="ak-height-20 ak-height-lg-20"></div>
            </>
          ) : block.type === "table" ? (
            <>
              <div className="blog-table-wrap">
                <table>
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="ak-height-30 ak-height-lg-20"></div>
            </>
          ) : (
            <>
              <p>{renderLinkedText(block.text, props.inlineLinks)}</p>
              <div className="ak-height-20 ak-height-lg-20"></div>
            </>
          )}
          {props.internalImg && index === internalImageIndex && (
            <>
              <div className="blog-internal-image">
                <img src={props.internalImg} alt={internalImageAlt} />
              </div>
              <div className="ak-height-40 ak-height-lg-30"></div>
            </>
          )}
        </React.Fragment>
      ))}
      <div className="ak-height-75 ak-height-lg-30"></div>
      {props.showVideo && (
        <>
        <div className="video-section">
          <img
            src={props.videoImg}
            alt="..."
            ref={videoImg}
            className="video-section-bg-img ak-bg imagesZoom"
          />
          <VideoButton videoId={"UsD1MhKBmD4"} />
        </div>
        <div className="ak-height-75 ak-height-lg-30"></div>
        </>
      )}
      <div className="blog-details-border"></div>
      <div className="ak-height-35 ak-height-lg-30"></div>
      {internalLinks.length > 0 && (
        <>
          <div className="blog-internal-links">
            <h5>Related Blogs</h5>
            <div>
              {internalLinks.map((blog) => (
                <Link to={blog.slug} key={blog.id}>
                  {blog.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="ak-height-35 ak-height-lg-30"></div>
        </>
      )}
      <div className="social-link">
        <p>Explore More:</p>
        <Link to="/menu">Menu</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {(props.comment?.length > 0 || props.reply?.length > 0) && (
        <>
          <div className="ak-height-100 ak-height-lg-60"></div>
          <CommentUser props={props} />
        </>
      )}
      <div className="ak-height-100 ak-height-lg-60"></div>
      <div className="contact-content">
        <div className="contact-form">
          <div className="contact-form-title ">
            <SectionTitle animTwo={true} textWhite={"Post A Comment"} />
          </div>
          <CommentConatctFrom />
        </div>
      </div>
    </div>
  );
}

function isAltTextBlock(block) {
  return block.type === "paragraph" && /^Alt text\s*:/i.test(block.text || "");
}

function getImageAltText(article) {
  const altBlock = article.find(isAltTextBlock);

  if (!altBlock) {
    return "";
  }

  return altBlock.text.replace(/^Alt text\s*:\s*/i, "").trim();
}

function renderLinkedText(text, links = []) {
  if (!links.length) {
    return text;
  }

  const sortedLinks = [...links].sort((a, b) => b.text.length - a.text.length);
  const matches = [];

  sortedLinks.forEach((link) => {
    const index = text.indexOf(link.text);
    if (index === -1) {
      return;
    }

    const overlaps = matches.some(
      (match) =>
        index < match.index + match.text.length &&
        index + link.text.length > match.index
    );

    if (!overlaps) {
      matches.push({ ...link, index });
    }
  });

  if (!matches.length) {
    return text;
  }

  matches.sort((a, b) => a.index - b.index);

  const parts = [];
  let cursor = 0;

  matches.forEach((match) => {
    if (cursor < match.index) {
      parts.push(text.slice(cursor, match.index));
    }

    const linkedText = text.slice(match.index, match.index + match.text.length);

    if (match.href.startsWith("http")) {
      parts.push(
        <a
          href={match.href}
          key={`${match.href}-${match.index}`}
          target="_blank"
          rel="noreferrer"
        >
          {linkedText}
        </a>
      );
    } else {
      parts.push(
        <Link to={match.href} key={`${match.href}-${match.index}`}>
          {linkedText}
        </Link>
      );
    }

    cursor = match.index + match.text.length;
  });

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return parts;
}
