import React from 'react'
import Styles from "./TechStack.module.scss"

export default (props) => (
    <div className={Styles.techStackContainer}>
    {/* // return a list of logos pulling from contentful. */}
    {console.log(props)}
    {props.LogosJSON.map(logo => {
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
  </div>
)