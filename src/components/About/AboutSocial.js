import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import Styles from "./About.module.scss"

const AboutSocial = (props) => {
    return (
        <div className={Styles.aboutSocial}>

            <h1>Getting To Know Me Personally</h1>

            <p>Hello, I am Stefan, a web developer who absolutely loves building websites and applications not only as a job but as a hobby.</p>
            <p> My main hobbies are of course Coding, Travelling, Hiking and Dining Out. </p>

            <hr />
            <InstagramFeed />
        </div>
    )

}

export default AboutSocial;