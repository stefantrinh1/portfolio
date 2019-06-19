import React from "react";

const AboutIntro = (props) => {
    return (
        <div>
            <h2 className="about__intro-title">{props.aboutTitle}</h2>
       
            <p className="about__intro-copy">{props.aboutCopy}</p>
        </div>
    )
}
export default AboutIntro;
