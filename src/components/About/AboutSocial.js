import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import { Link } from "react-router-dom";
import Styles from "./About.module.scss"
import BackArrow from "../../icons-logos/icons/BackArrow"

const AboutSocial = (props) => {
    return (
        <div className={Styles.aboutSocial}>
            <Link to="/about">
                <div className={Styles.backArrow}>
                    <BackArrow />
                </div>
            </Link>

            <InstagramFeed />
        </div>
    )

}

export default AboutSocial;