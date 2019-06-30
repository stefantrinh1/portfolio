import React from "react";
import HtmlLogo from "./HtmlLogo";
import CssLogo from "./CssLogo";
import SassLogo from "./SassLogo";
import JavascriptLogo from "./JavascriptLogo";
import JqueryLogo from "./JqueryLogo";
import BootstrapLogo from "./BootstrapLogo";
import DjangoLogo from "./DjangoLogo";
import SqlLiteLogo from "./SqlLiteLogo";
import GitLogo from "./GitLogo";
import MacOsLogo from "./MacOsLogo";
import PhotoshopLogo from "./PhotoshopLogo";
import SketchLogo from "./SketchLogo";
import PythonLogo from "./PythonLogo";


const TechStack = (props) => {


    console.log(props)
    return (
        <div className="stacklogos">
            <HtmlLogo />
            <CssLogo />
            <SassLogo />
            <JavascriptLogo />
            <JqueryLogo />
            <BootstrapLogo />
            <PythonLogo />
            <DjangoLogo />
            <SqlLiteLogo />
            <GitLogo />
            <MacOsLogo />
            <PhotoshopLogo />
            <SketchLogo />
        </div>
    )
}

export default TechStack;