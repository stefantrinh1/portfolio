import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo"
import Hamburger from "./Hamburger"



class Navigation extends React.Component {
    constructor() {
        super();
        this.navElement = document.querySelector(".nav");
        this.state = {
            navigationOpen: false,
        }
    }

    componentDidMount() {
        // console.log(this.navElement());
        
    }
    // returns Nav Width
    NavWidth() {
        
        const navElement = document.querySelector(".nav");
        const style = getComputedStyle(navElement);
        const navWidth = style.getPropertyValue('width');
        return navWidth
    }
    
    // Handles whether to open or close depending on if nav is open in state
    ShowOrHideNav() {
        return (!this.state.navigationOpen ? this.OpenNav() : this.CloseNav())
    }


    // brings Nav Onto Screen
    OpenNav() {
        console.log("Navigation Menu Opened");
        const navElement = document.querySelector(".nav");
        navElement.style.left = "0%";
        this.setState({
            navigationOpen: true
        })
       
        // when the nav opens event listener is added so the menu 
        // can be closed when clicking a nav or outside of nav menu
        this.HandleNavAction(navElement)
     
    }


    // move the navigation off screen
    CloseNav() {
        console.log("Navigation Menu Closed");
        const navElement = document.querySelector(".nav");
        const navWidth = this.NavWidth(); 

        // this if statement makes sure that only the nav on mobile closes and does not do the same on desktop.
        if (window.innerWidth < 768) {
            // grabs the width of the nav from the dom in Pixels
            navElement.style.left = `-${navWidth}`
            this.setState({
                navigationOpen: false
            })

        }

    }

    // Handles the Clicks
    HandleNavAction(event) {

        const navElement = document.querySelector(".nav");
        const navLink = document.querySelectorAll(".nav__nav-item-link");
    
        const outsideClickListener = (event) => {
            if(!navElement.contains(event.target) || event.target === navLink ) {
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
                <li className="nav__nav-item" key={link.label} onClick={() => { }}>
                    <NavLink className="nav__nav-item-link" to={link.link} exact={true} activeClassName="nav__currentNavPage">
                        {link.label}
                    </NavLink>
                </li>
            );
        });


        return (

            <div>
                <div className="nav__hamburger" onClick={() => { this.ShowOrHideNav() }}>
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