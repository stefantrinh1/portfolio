import React from "react";
import BackArrow from "../../icons-logos/icons/BackArrow";
import Styles from "./About.module.scss";
import { Link } from "react-router-dom";
const ReactMarkdown = require('react-markdown/with-html');

const AboutMe = (props) => {
    // Sets props to a cleaner tider variable.
    const AboutJSON = props.AboutJSON

    return (
        <div className={Styles.aboutContainer}>

            <Link to="/about">
                <div className={Styles.backArrow}>
                    <BackArrow />
                </div>
            </Link>
      

            <h2 className={Styles.introTitle}>
                {AboutJSON.aboutTitle}
            </h2>

            <ReactMarkdown className={Styles.introCopy} escapeHtml={false}>
                {AboutJSON.aboutCopy}
            </ReactMarkdown>

            <div className={Styles.techStack}>
                <h2 className={Styles.techStackTitle}>Tech Stack </h2>
                <div className={Styles.techStackContainer}>
                    {/* // return a list of logos pulling from contentful. */}
                    {AboutJSON.techStack.map(logo => {
                        return <img className={Styles.stackLogos} src={logo.fields.file.url} alt="stacklogo" key={logo.sys.id} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default AboutMe;