import React from "react";
import Styles from "./BlogTemplate.module.scss";
import { format } from "timeago.js";
const ReactMarkdown = require("react-markdown/with-html");
const readingTime = require("reading-time");

const BlogTemplate = props => {
  // pulls blogJson out of props
  const {
    // id,
    blogTitle,
    blogDescription,
    authorImage,
    authorName,
    authorWebsite,
    publishedDate,
    categories,
    blogMainImage,
    blogMainImageDescription,
    blogContent
  } = props;

  return (
    <div className={Styles.blogPost}>
      <h1 className={Styles.blogTitle}>{blogTitle}</h1>
      <h3 className={Styles.blogDescription}>{blogDescription}</h3>

      <div className={Styles.blogWidget}>
        <img
          className={Styles.authorImage}
          src={authorImage}
          alt={`Author ${authorName}`}
        />

        <div className={Styles.widgetCopy}>
          <p className={Styles.authorName}>
            By{" "}
            <a
              className={Styles.website}
              href={authorWebsite ? authorWebsite : null}
            >
              {authorName}
            </a>
          </p>
          <p className={Styles.publishedDate}>
            {format(publishedDate)} | {readingTime(blogContent).text}
          </p>
        </div>
      </div>

      <div className={Styles.categoryLabels}>
        {categories.map(element => {
          return (
            <div className={Styles.CategoryLabel} key={element}>
              {element}
            </div>
          );
        })}
      </div>

      <img
        className={Styles.mainImage}
        src={blogMainImage}
        alt={blogMainImageDescription ? blogMainImageDescription : "Main Image"}
      />
      <ReactMarkdown className={Styles.blogContent} escapeHtml={false}>
        {blogContent}
      </ReactMarkdown>
    </div>
  );
};

export default BlogTemplate;
