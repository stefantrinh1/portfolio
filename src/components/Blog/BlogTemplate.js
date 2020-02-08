import React from "react";
import Styles from "./BlogTemplate.module.scss";
import { format } from "timeago.js";
import ScrollUpButton from "react-scroll-up-button";
const ReactMarkdown = require("react-markdown/with-html");
const readingTime = require("reading-time");

const BlogTemplate = props => {
  // pulls blogJson out of props
  const blogJSON = props.blogJson;

  // calculates the Reading time based on number of words.
  const contentBlogStats = readingTime(blogJSON.fields.blogContent);


  return (
    <div className={Styles.blogPost}>
      <h1 className={Styles.blogTitle}>{blogJSON.fields.blogTitle}</h1>
      <h3 className={Styles.blogDescription}>
        {blogJSON.fields.blogDescription}
      </h3>

      <div className={Styles.blogWidget}>
        <img
          className={Styles.authorImage}
          src={blogJSON.fields.author.fields.authorImage.fields.file.url}
          alt={`Author ${blogJSON.fields.author.fields.authorName}`}
        />

        <div className={Styles.widgetCopy}>
          <p className={Styles.authorName}>
            By{" "}
            <a
              className={Styles.website}
              href={
                blogJSON.fields.author.fields.website
                  ? blogJSON.fields.author.fields.website
                  : null
              }
            >
              {blogJSON.fields.author.fields.authorName}
            </a>
          </p>
          <p className={Styles.publishedDate}>
            {format(blogJSON.fields.publishedDate)} | {contentBlogStats.text}
          </p>
        </div>
      </div>

      <div className={Styles.categoryLabels}>
        {blogJSON.fields.categories.map(element => {
          return (
            <div className={Styles.CategoryLabel} key={element}>
              {element}
            </div>
          );
        })}
      </div>

      <img
        className={Styles.mainImage}
        src={blogJSON.fields.blogMainImage.fields.file.url}
        alt="main"
      />
      <ReactMarkdown className={Styles.blogContent} escapeHtml={false}>
        {blogJSON.fields.blogContent}
      </ReactMarkdown>

      <ScrollUpButton />
    </div>
  );
};

export default BlogTemplate;
