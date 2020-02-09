import React from "react";
import Styles from "./TechStack.module.scss";

export default props => {
  const { id, stackName, stackLogo, stackWebsite } = props;
  return (
          <a
            href={stackWebsite ? stackWebsite : null}
            key={id}
            className={Styles.stacklogoslink}
          >
            <img
              className={Styles.stackLogos}
              src={stackLogo}
              alt={stackName}
              title={stackName}
            />
          </a>
        );
};
