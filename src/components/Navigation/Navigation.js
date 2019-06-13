import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo"
import Hamburger from "./Hamburger"


class Navigation extends React.Component {

        state = {
            navigationOpen:false,
        }
 

    OpenNav() {
        const navElement = document.querySelector(".nav");
        const style = getComputedStyle(navElement)
        const navWidth = style.getPropertyValue('width');
        // grabs the width of the nav set by the scss in pixels
        if (this.state.navigationOpen) {
            // move the navigation off screen
            navElement.style.left = `-${navWidth}`
            this.setState({
                navigationOpen:false
            })
        }

        else {
            // moves the nav into view
            navElement.style.left = "0%";
            this.setState({
                navigationOpen:true
            })
        }
    }


    render() {
        // List of the Nav items and their paths
        // this will be loaded dynamically in the future
        let links = [
            { label: 'Home', link: "/" },
            { label: 'About', link: "/about" },
            { label: 'Portfolio', link: "/portfolio" },
            { label: 'Blog', link: "/blog" },
            { label: 'Contact', link: "/contact" }
        ];

        // creates the JSX for the nav items by looping through the nav links declared.
        let navItems = links.map((link, index) => {
            return (
                <li className="nav__nav-item" key={link.label}>

                    <NavLink to={link.link} exact={true} activeClassName="nav__currentNavPage">
                        {link.label}
                    </NavLink>
                </li>
            );
        });

        return (

            <div>
                <div className="nav__hamburger" onClick={() => {this.OpenNav()}}>
                    <Hamburger />
                </div>

                <div className="nav">
                    <div className="nav__nav-icon">
                        <NavLink to="/">
                            <BrandLogo />
                        </NavLink>
                    </div>
                    <ul className="nav__nav-menu">
                        {navItems}
                    </ul>
                </div>
            </div>
        )
    }

}

export default Navigation;