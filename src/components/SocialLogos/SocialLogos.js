import React from "react";
import LinkedinLogo from "./LinkedinLogo";
import GithubLogo from "./GithubLogo";
import InstagramLogo from "./InstagramLogo";

const SocialLogos = () => {
    return (
        <div className="sociallogos">

            <a href="https://github.com/stefantrinh1" target="_blank" aria-label="See Github Repository and Portfolio" rel="noopener noreferrer">
                <GithubLogo />
            </a>

            <a href="https://www.linkedin.com/in/stefantrinh1/" target="_blank" aria-label="See Linkedin Profile and Employment History" rel="noopener noreferrer">
                <LinkedinLogo />
            </a>

            <a href="https://www.instagram.com/travel.code.geek/" target="_blank" aria-label="See Instagram for Social" rel="noopener noreferrer">
                <InstagramLogo />
            </a>
            
        </div>
    )
}

export default SocialLogos;