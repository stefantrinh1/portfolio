import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo"



class Navigation extends React.Component {


    render() {
        // List of the Nav items and their paths
        // this will be loaded dynamically in the future
        let links = [
            {label:'Home', link:"/"},
            {label:'About', link:"/about"},
            {label:'Portfolio', link:"/portfolio"},
            {label:'Blog', link:"/blog"},
            {label:'Contact', link:"/contact"}
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
        )
    }

}

export default Navigation;