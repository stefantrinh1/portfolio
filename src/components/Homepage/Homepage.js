import React from "react";
import BackgroundDesktop from "../../media-files/hpbg-desktop.jpg";
import BackgroundTablet from "../../media-files/hpbg-tablet.jpg";
import BackgroundMobile from "../../media-files/hpbg-mobile.jpg";
import { NavLink } from "react-router-dom";
import SocialLogos from "../SocialLogos/SocialLogos";
import Styles from "./Homepage.module.scss"

class Homepage extends React.Component {

    render() {

        let Homepage = (
            <div className={Styles.homepage}>
                <img
                    className={Styles.backgroundImg}
                    alt="background"
                    srcSet={`
                            ${BackgroundDesktop} 1200w,
                            ${BackgroundTablet} 768w,
                            ${BackgroundMobile} 480w
                `} />

                <header className={Styles.header} >
                    <div className={Styles.headerCopy} >
                        <h1 className={[Styles.headerTitle, Styles.headerTitle1].join(" ")} >STEFAN</h1>
                        <h1 className={[Styles.headerTitle, Styles.headerTitle2].join(" ")} >TRINH</h1>
                        <h2 className={Styles.headerSubtitle} >NOT JUST A WEB DEVELOPER</h2>
                        <button className={Styles.mainBtn}><NavLink to="/portfolio">Explore Projects</NavLink></button>
                    </div>
                </header>
                <SocialLogos />
            </div>
        )


        return (Homepage)

    }
}

export default Homepage;
