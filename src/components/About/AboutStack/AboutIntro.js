import React from "react";
import Styles from "./AboutStack.module.scss"
const ReactMarkdown = require('react-markdown/with-html');

const AboutIntro = (props) => {
    return (
        <div>
            <h2 className={Styles.introTitle}>
                {props.AboutJSON.aboutTitle}
            </h2>

            <ReactMarkdown className={Styles.introCopy} escapeHtml={false}>
                {props.AboutJSON.aboutCopy}
            </ReactMarkdown>
        </div>
    )
}
export default AboutIntro;
