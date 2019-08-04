import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo"
import Hamburger from "./Hamburger"
import Styles from "./Navigation.module.scss"
import disableScroll from 'disable-scroll';

class Navigation extends React.Component {
    constructor() {
        super();
        this.navElement = document.querySelector(".nav");
        this.state = {
            navigationOpen: null,
        }
    }

    componentDidMount() {
        this.DetermineNavState()
        // event listener for when screen changes size
        window.addEventListener('resize', () => { this.DetermineNavState() });
    }

    // function to determine whether to show nav based on desktop show nav or hide on mobile.
    DetermineNavState() {
        window.innerWidth < 768 ? this.setState({ navigationOpen: false }) : this.setState({ navigationOpen: true })
    }

    // Handles whether to open or close depending on if nav is open in state
    ShowOrHideNav() {
        return (!this.state.navigationOpen ? this.OpenNav() : this.CloseNav())
    }

    // brings Nav Onto Screen
    OpenNav() {
        disableScroll.on();
        this.setState({ navigationOpen: true })
    }


    // move the navigation off screen
    CloseNav() {
        disableScroll.off();
        this.setState({ navigationOpen: false })
    }

    // Handles the Clicks
    HandleNavAction(event) {

        const navElement = document.querySelector(".nav");
        const navLink = document.querySelectorAll(`.${Styles.navItemLink}`);

        const outsideClickListener = (event) => {
            if (!navElement.contains(event.target) || event.target === navLink) {
                console.log("if hit")
                this.CloseNav();
                removeClickListener();
            }
        }

        const removeClickListener = () => {
            document.removeEventListener('click', outsideClickListener)
            document.removeEventListener("click", navClickListener)
        }


        const navClickListener = (event) => {

            navLink.forEach(element => {
                if (element.contains(event.target)) {
                    // console.log("navclicked")
                    this.CloseNav();
                    removeClickListener();
                }
            });
        }

        document.addEventListener('click', outsideClickListener)
        document.addEventListener("click", navClickListener)

    }



    render() {
        // List of the Nav items and their paths
        // this will be loaded dynamically in the future
        let links = [
            { label: 'HOME', link: "/" },
            { label: 'ABOUT', link: "/about" },
            { label: 'PORTFOLIO', link: "/portfolio" },
            { label: 'BLOG', link: "/blog" },
            { label: 'CONTACT', link: "/contact" }
        ];

        // creates the JSX for the nav items by looping through the nav links declared.
        let navItems = links.map((link, index) => {
            return (
                <NavLink className={Styles.navItemLink} key={link.label} to={link.link} exact={true} activeClassName={Styles.currentNavPage} onClick={() => { console.log("test")}} >
                <li className={Styles.navItem}>

                        {link.label}
                    
                </li>
                </NavLink>
            );
        });

        let navMenu = (
            <div className={Styles.nav} >
                <div className={Styles.navIcon}>
                    <NavLink to="/">
                        <BrandLogo />
                    </NavLink>
                </div>
                <ul className={Styles.navMenu} >
                    {navItems}
                </ul>
            </div>
        )


        return (

            <div className={Styles.navContainer} >
                <div className={Styles.hamburgerContainer} >
                    <div className={Styles.hamburger} onClick={() => { this.ShowOrHideNav() }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                {this.state.navigationOpen ? navMenu : null}
                {this.state.navigationOpen ? <div className={Styles.opaqueBlock} /> : null}
            </div>
        )
    }

}

export default Navigation;