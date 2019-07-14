import React from "react";
import {Link} from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo"
import Styles from "./NotFound.module.scss";


const NotFound = () => {
    return (
        <div className={Styles.notFound}>
            <div className={Styles.flexItems}><BrandLogo /></div>
            <div className={[Styles.flexItems, Styles.icon].join(' ')}><h1>404</h1></div>
            <div className={Styles.flexItems}><h1>404 Error.<br/>Page Not Found.</h1></div>
            <div className={Styles.flexItems}><Link to="/">Return To Home Page</Link></div>
        </div>
    )
}

export default NotFound;