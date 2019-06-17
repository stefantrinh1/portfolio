import React from "react";

const AboutIntro = (props) => {
    return (
        <div className="about__intro-container">
            <h2 className="about__intro-title">{props.aboutTitle}</h2>
            <p>{props.aboutCopy}</p>
        </div>
    )
}
export default AboutIntro;
