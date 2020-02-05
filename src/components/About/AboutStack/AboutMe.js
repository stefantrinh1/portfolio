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
        {/* <div className={Styles.techStackContainer}>
          // return a list of logos pulling from contentful.
          {AboutJSON.techStack.map(logo => {
            console.log(logo);
            return (
              <a
                href={logo.fields.description ? logo.fields.description : null}
                key={logo.sys.id}
                className={Styles.stacklogoslink}
              >
                <img
                  className={Styles.stackLogos}
                  src={logo.fields.file.url}
                  alt={logo.fields.title}
                  title={logo.fields.title}
                />
              </a>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
