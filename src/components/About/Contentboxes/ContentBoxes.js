import React from "react";
import Styles from "./ContentBoxes.module.scss";
import { Link } from "react-router-dom";
import InformationIcon from "../AboutIcons/InformationIcon";
import BreifcaseIcon from "../AboutIcons/BreifcaseIcon";
import CameraIcon from "../AboutIcons/CameraIcon";

export default () => (
  <section className={Styles.aboutCards}>
    <div className={Styles.aboutCard}>
      <Link to={`/about/aboutme`}>
        <InformationIcon />
        <h2 className={Styles.boxtitle}>Tech Stack</h2>
        <p>
          Find out more about my technology stack and what I use to create many
          of my projects.
        </p>
      </Link>
    </div>
    <div className={Styles.aboutCard}>
      <Link to={`/about/career`}>
        <BreifcaseIcon />
        <h2 className={Styles.boxtitle}>Career History</h2>
        <p>
          Are you an employer or recruiter? Find out more about my past career
          history and work experience.
        </p>
      </Link>
    </div>

    <div className={Styles.aboutCard}>
      <Link to={`/about/social`}>
        <CameraIcon />
        <h2 className={Styles.boxtitle}>Social</h2>
        <p>
          Want to know the personal side of me. You can follow me on my travels
          and life adventures
        </p>
      </Link>
    </div>
  </section>
);
