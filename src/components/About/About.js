import React from "react";
// import LoadingPage from "../LoadingPage/LoadingPage";
import Styles from "./About.module.scss";
import { Link } from "react-router-dom";
import AboutImg from "../../media-files/aboutimage.jpg";
import ContentBoxes from "./Contentboxes/ContentBoxes";
const ReactMarkdown = require("react-markdown/with-html");
const About = props => {
  const { image, title, content } = props.aboutMainJSON;

  return (
    <div className={Styles.about}>
      <div className={Styles.imagecontainer}>
        <img
          src={image.fields.file.url}
          alt={
            image.fields.description ? image.fields.description : "description"
          }
        />
      </div>
      <div className={Styles.details}>
        <h1 className={Styles.title}>{title}</h1>

        <ReactMarkdown className={Styles.introCopy} escapeHtml={false}>
          {content}
        </ReactMarkdown>
      </div>

      <ContentBoxes />
    </div>
  );
};

export default About;
