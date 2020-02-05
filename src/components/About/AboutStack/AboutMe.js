import React from "react";
import BackArrow from "../../../icons-logos/icons/BackArrow";
import Styles from "./AboutStack.module.scss";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop";
import AboutIntro from "./AboutIntro";
import TechStack from "../../TechStack/TechStack";

const AboutMe = props => {
  // Sets props to a cleaner tider variable.
  const AboutJSON = props.AboutJSON;

  return (
    <div className={Styles.aboutContainer}>
      <ScrollToTop />
      <Link to="/about">
        <div className={Styles.backArrow}>
          <BackArrow />
        </div>
      </Link>

      <AboutIntro AboutJSON={AboutJSON} />

      <div className={Styles.techStack}>
        <h2 className={Styles.techStackTitle}>Stack Logos</h2>
        <TechStack LogosJSON={AboutJSON.techStack} />
      </div>
    </div>
  );
};

export default AboutMe;
