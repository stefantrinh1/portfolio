import React from "react";
// import ReactMarkdown from "react-markdown";
const ReactMarkdown = require('react-markdown/with-html');

const AboutIntro = (props) => {
    return (
        <div>

            <h2 className="about__intro-title">
                {props.aboutTitle}
            </h2>
       
            <ReactMarkdown className="about__intro-copy" escapeHtml={false}>
                {props.aboutCopy}
            </ReactMarkdown>

        </div>
    )
}
export default AboutIntro;
