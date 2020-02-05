import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import BrandLogo from "../SocialLogos/BrandLogo";
import Styles from "./Navigation.module.scss";
import NavItem from "./NavItem";
import disableScroll from "disable-scroll";

const Navigation = () => {
  let navLinks = [
    { label: "HOME", link: "/" },
    { label: "ABOUT", link: "/about" },
    { label: "PORTFOLIO", link: "/portfolio" },
    { label: "BLOG", link: "/blog" },
    { label: "CONTACT", link: "/contact" }
  ];
  const [navigationOpenMobile, toggleNav] = useState(() => false);

  useEffect(() => {
    var resizeTimer;
    clearTimeout(resizeTimer);
    window.addEventListener("resize", () => {
      resizeTimer = setTimeout(disableScrollFunction(), 1000);
    });

    const disableScrollFunction = () => {
      if (window.innerWidth < 767 && navigationOpenMobile) {
        disableScroll.on();
      } else {
        disableScroll.off();
      }
    };
    disableScrollFunction();
  });

  return (
    <div className={Styles.nav}>
      <div className={Styles.navheader}>
        <div
          className={`${Styles.hamburger} ${
            navigationOpenMobile ? Styles.hamburgeractive : null
          }`}
          onClick={() => {
            toggleNav(!navigationOpenMobile);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div
        style={{ left: navigationOpenMobile ? "0%" : "-100%" }}
        id="navmenucontainer"
        className={Styles.navmenucontainer}
      >
        <div className={Styles.navmenu}>
          <ul>
            <div className={Styles.navIcon}>
              <NavLink to="/">
                <BrandLogo />
              </NavLink>
            </div>
            {navLinks.map(navlink => (
              <NavLink
                className={Styles.navItemLink}
                key={navlink.label}
                to={navlink.link}
                exact={true}
                activeClassName={Styles.currentNavPage}
                onClick={()=>{
                  if(window.innerWidth < 767) {
                    toggleNav(false)
                  }
                }}
              >
                <li className={Styles.navItem}>{navlink.label}</li>
              </NavLink>
            ))}
          </ul>
        </div>

        <div
          className={Styles.opaqueBlock}
          style={{ right: navigationOpenMobile ? "0%" : "100%" }}
          onClick={() => {
            toggleNav(false);
          }}
        />
      </div>
    </div>
  );
};

export default Navigation;
