import React from "react";

const AboutIntro = (props) => {
    return (
        <div>
            <h2>{props.aboutTitle}</h2>

            <p>{props.aboutCopy}</p>
            <p>About intro loaded</p>
        </div>

    )
}
export default AboutIntro;
