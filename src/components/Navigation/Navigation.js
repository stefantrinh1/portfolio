import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo"
import Hamburger from "./Hamburger"



class Navigation extends React.Component {
    constructor() {
        super();
        
        this.state = {
            navigationOpen: false,
        }
    }
    // move the navigation off screen
    CloseNav() {
        const navElement = document.querySelector(".nav");
        const style = getComputedStyle(navElement);
        const navWidth = style.getPropertyValue('width');


        // this if statement makes sure that only the nav on mobile closes and does not do the same on desktop.
        if (window.innerWidth < 768) {
            // grabs the width of the nav from the dom in Pixels
            navElement.style.left = `-${navWidth}`
            this.setState({
                navigationOpen: false
            })

        }

    }

    // brings Nav Onto Screen
    OpenNav() {
        const navElement = document.querySelector(".nav");
        navElement.style.left = "0%";
        this.setState({
            navigationOpen: true
        })
    }


    // Handles whether to open or close depending on if nav is open in state
    HandleNav() {
        return (!this.state.navigationOpen ? this.OpenNav() : this.CloseNav())
    }

    hideOnClickOutside(element) {
        const outsideClickListener = event => {
            if (!element.contains(event.target) && this.state.navigationOpen) { // or use: event.target.closest(selector) === null
                element.style.left = `70%`
                removeClickListener()
            }
        }
        const removeClickListener = () => {
            document.removeEventListener('click', outsideClickListener)
        }
        document.addEventListener('click', outsideClickListener)
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
                <li className="nav__nav-item" key={link.label} onClick={() => { this.CloseNav() }}>

                    <NavLink to={link.link} exact={true} activeClassName="nav__currentNavPage">
                        {link.label}
                    </NavLink>
                </li>
            );
        });


        return (

            <div>
                <div className="nav__hamburger" onClick={() => { this.HandleNav() }}>
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