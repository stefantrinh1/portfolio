import React from "react";
import InstagramFeed from "../../InstagramFeed/InstagramFeed";
import { Link } from "react-router-dom";
import Styles from "./AboutSocial.module.scss"
import BackArrow from "../../../icons-logos/icons/BackArrow"
import ScrollToTop from '../../ScrollToTop'

const AboutSocial = (props) => {
    return (
        <div className={Styles.aboutSocial}>
            <ScrollToTop />
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