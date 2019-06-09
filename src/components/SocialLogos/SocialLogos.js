import React from "react";
import LinkedinLogo from "./LinkedinLogo";
import GithubLogo from "./GithubLogo";
import InstagramLogo from "./InstagramLogo";

const SocialLogos = () => {
    return (
        <div className="sociallogos">

            <a href="https://github.com/stefantrinh1" target="_blank" rel="noopener noreferrer">
                <GithubLogo />
            </a>

            <a href="https://www.linkedin.com/in/stefantrinh1/" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo />
            </a>

            <a href="https://www.instagram.com/travel.code.geek/" target="_blank" rel="noopener noreferrer">
                <InstagramLogo />
            </a>
            
        </div>
    )
}

export default SocialLogos;