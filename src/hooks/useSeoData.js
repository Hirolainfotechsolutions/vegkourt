import { useEffect } from 'react';
import seodata from '../dataJson/seodata.json';

const useSeoData = (pageId) => {
  useEffect(() => {
    // Find the page data from seodata.json
    const pageData = seodata.pages.find(page => page.id === pageId);

    if (pageData) {
      // Set document title
      document.title = pageData.metaTitle;

      // Set or update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageData.metaDescription);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = pageData.metaDescription;
        document.head.appendChild(metaDescription);
      }

      // Set Open Graph meta tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', pageData.metaTitle);
      } else {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.content = pageData.metaTitle;
        document.head.appendChild(ogTitle);
      }

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', pageData.metaDescription);
      } else {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.content = pageData.metaDescription;
        document.head.appendChild(ogDescription);
      }
    }
  }, [pageId]);
};

export default useSeoData;
