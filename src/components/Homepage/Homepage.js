import React from "react";
import BackgroundDesktop from "../../media-files/hpbg-desktop.jpg";
import BackgroundTablet from "../../media-files/hpbg-tablet.jpg";
import BackgroundMobile from "../../media-files/hpbg-mobile.jpg";
import { NavLink } from "react-router-dom";
import SocialLogos from "../SocialLogos/SocialLogos";
import Styles from "./Homepage.module.scss"

class Homepage extends React.Component {



    render() {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // event listener for when screen changes size
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

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
                        <NavLink to="/portfolio"><button className={Styles.mainBtn}>Explore Projects</button></NavLink>
                    </div>
                </header>
                <SocialLogos />
            </div>
        )


        return (Homepage)

    }
}

export default Homepage;
