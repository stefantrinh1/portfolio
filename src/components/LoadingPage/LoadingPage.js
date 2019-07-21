import React from "react";
import Styles from "./LoadingPage.module.scss";
import BrandLogo from "../SocialLogos/BrandLogo";

const LoadingPage = () => {
    return(
        <div className={Styles.LoadingPage}>
            <div className={Styles.LoadingPage__container}>
                <div className={Styles.logoContainer}><BrandLogo /></div>
                <p>loading...</p>
            </div>
        </div>
    )
}

export default LoadingPage;