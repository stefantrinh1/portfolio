import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import Styles from "./About.module.scss"
import TravelledMap from "../TravelledMap/TravelledMap"

const AboutSocial = (props) => {
    return (
        <div className={Styles.aboutSocial}>
            <InstagramFeed />
        </div>
    )

}

export default AboutSocial;