import React from "react";
import Styles from "./TechStack.module.scss";
import StackLogo from "./StackLogo";
export default props => {
  return (
    <div className={Styles.techStackContainer}>
      
      {/* // return a list of logos pulling from contentful. */}
      {props.stackJSON.map(stack => {
        const {
          name,
          website,
          logo: {
            fields: {
              file: { url }
            }
          }
        } = stack.fields;

        return (
          <StackLogo
            key={stack.sys.id}
            id={stack.sys.id}
            stackName={name}
            stackLogo={url}
            stackWebsite={website}
          />
        );
      })}
    </div>
  );
};
