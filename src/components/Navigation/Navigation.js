import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo"
import Styles from "./Navigation.module.scss"
import disableScroll from 'disable-scroll';

class Navigation extends React.Component {
    constructor() {
        super();
        this.navElement = document.querySelector(".nav");
        this.state = {
            navigationOpen: false,
        }
    }

    componentDidMount() {
        this.DetermineNavState()
        // event listener for when screen changes size
        window.addEventListener('resize', () => { this.DetermineNavState() });
    }

    componentDidUpdate() {
        // if nav is in the dom run add the event listeners
        if (this.state.navigationOpen) { this.HandleNavAction() }
    }

    // function to determine whether to show nav based on desktop show nav or hide on mobile.
    DetermineNavState() {
        // this.setState({ navigationOpen: false })
        if (window.innerWidth < 768) {
            this.setState({ navigationOpen: false })
        }
        else {
            console.log()
            this.setState({ navigationOpen: true })
        }
    }

    // Handles whether to open or close depending on if nav is open in state
    ShowOrHideNav() { (!this.state.navigationOpen ? this.OpenNav() : this.CloseNav()) }

    // brings Nav Onto Screen and disabled scrolling
    OpenNav() { disableScroll.on(); this.setState({ navigationOpen: true }) }

    // move the navigation off screen and enabled scrolling
    CloseNav() { disableScroll.off(); this.setState({ navigationOpen: false }) }

    // Handles the Clicks
    HandleNavAction(event) {

        const navElement = document.querySelector(`.${Styles.nav}`);
        const navLink = document.querySelectorAll(`.${Styles.navItem}`);

        const outsideClickListener = (event) => {
            if (!navElement.contains(event.target)) {
                removeEventListener()
                this.CloseNav();
            }
        }

        // if the Nav-Links are clicked the follow function runs
        const navClickListener = (event) => {
            navLink.forEach(element => {
                if (element.contains(event.target)) {
                    // if(window.innerWidth < 768) {}
                    removeEventListener()
                    this.CloseNav()
                }
            });
        }

        const removeEventListener = () => {
            if (window.innerWidth < 768) {
                // document.removeEventListener('click', outsideClickListener)
                document.removeEventListener("click", navClickListener)
            }
        }

        if(window.innerWidth < 768 && this.state.navigationOpen){
        // document.addEventListener('click', outsideClickListener)
        document.addEventListener("click", navClickListener)
        }

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

        return (

            <div className={Styles.navContainer} >
                <div className={Styles.hamburgerContainer} >
                    <div className={Styles.hamburger} onClick={() => { this.ShowOrHideNav() }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                {this.state.navigationOpen ?
                    <div className={Styles.nav} >

                        <div className={Styles.navIcon}>
                            <NavLink to="/">
                                <BrandLogo />
                            </NavLink>
                        </div>

                        <ul className={Styles.navMenu} >
                            {links.map((link, index) => {
                                return (
                                    <NavLink className={Styles.navItemLink} key={link.label} to={link.link} exact={true} activeClassName={Styles.currentNavPage} >
                                        <li className={Styles.navItem}>
                                            {link.label}
                                        </li>
                                    </NavLink>
                                );
                            })}
                        </ul>
                    </div>
                    :
                    null}

                {this.state.navigationOpen ? <div className={Styles.opaqueBlock} /> : null}

            </div>
        )
    }

}

export default Navigation;