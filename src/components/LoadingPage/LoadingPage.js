import React from "react";
import Styles from "./LoadingPage.module.scss";

const LoadingPage = () => {
    return(
        <div className={Styles.LoadingPage}>
            <div className={Styles.LoadingPage__container}>
            loading....
            </div>
        </div>
    )
}

export default LoadingPage;