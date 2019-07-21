import React from "react";

const AboutIntro = (props) => {
    return (
        <div>

            <h2 className="introTitle">
                {props.aboutTitle}
            </h2>
       
            <ReactMarkdown className="introCopy" escapeHtml={false}>
                {props.aboutCopy}
            </ReactMarkdown>

        </div>
    )
}
export default AboutIntro;
