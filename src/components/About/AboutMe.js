import React from "react";
import BackArrow from "../../icons-logos/icons/backarrow.png";
import Styles from "./About.module.scss";
import { Link } from "react-router-dom";
const ReactMarkdown = require('react-markdown/with-html');

const AboutMe = (props) => {
    // Sets props to a cleaner tider variable.
    const AboutJSON = props.AboutJSON

    return (
        <div className={Styles.aboutContainer}>

            <Link to="/about">
                {/* <img className={Styles.backArrow} src={BackArrow} alt="BackArrow" /> */}
                <svg className={Styles.backArrow} width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id={Styles.artBoard} transform="translate(-209.000000, -179.000000)">
                            <polygon id="Shape" points="259 200.875 220.875 200.875 238.375 183.375 234 179 209 204 234 229 238.375 224.625 220.875 207.125 259 207.125"></polygon>
                        </g>
                    </g>
                </svg>
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