import React, { useState, useEffect } from 'react'
// import BackgroundDesktop from "../../media-files/hpbg-desktop.jpg";
// import BackgroundTablet from "../../media-files/hpbg-tablet.jpg";
// import BackgroundMobile from "../../media-files/hpbg-mobile.jpg";
import { NavLink } from "react-router-dom";
import SocialLogos from "../SocialLogos/SocialLogos";
import Styles from "./Homepage.module.scss";
import anime from 'animejs/lib/anime.es.js';

const Homepage = () => {

        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        // Then we set the value in the --vh custom property to the root of the document
         // event listener for when screen changes size
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        useEffect(() => {
         
            // animation for Header
            anime({
                targets: `.${Styles.headerTitle}`,
                rotate: '2turn',
                duration:1000,
                keyframes: [
                    {translateX: -1000},
                    {translateX: 1000},
                    {translateX: 0},
                  ],
              });

              // animation for subheader
              anime({
                targets: `.${Styles.headerSubtitle}`,
                rotate: '3turn',
                
                duration:2000,
                keyframes: [
                    {translateX: 1000},
                    {translateX: -1000},
                    {translateX: 0},
                  ],
              });

            
              const backgroundBlocks = anime.timeline({
                duration:1000,
                easing: 'easeInOutExpo',
              });

              //   animation targeting indivdual background columns
              backgroundBlocks.add(
                  {
                    targets: `.${Styles.animationBlocks} div`,
                    delay: anime.stagger(100),
                    keyframes: [
                        {translateX: -1000}, 
                        {translateX: 0},
                      ],
                  }, 500
              )
            //   animation targeting overall background block
              backgroundBlocks.add(
                {
                  targets: `.${Styles.animationBlocks}`,
                  delay: anime.stagger(100),
                  keyframes: [
                    {rotate: '338deg'},
                    {bottom: "-75%"},
                    {right: "-35%"},      
                    ],
                }, 2000
            )

              
    

        }, [])


        let Homepage = (
            <div className={Styles.homepage}>
                {/* <img
                    className={Styles.backgroundImg}
                    alt="background"
                    srcSet={`
                            ${BackgroundDesktop} 1200w,
                            ${BackgroundTablet} 768w,
                            ${BackgroundMobile} 480w
                `} /> */}

                <header className={Styles.header} >
                    <div className={Styles.headerCopy} >
                        <h1 className={Styles.headerTitle}>STEFAN TRINH</h1>
                        <h2 className={Styles.headerSubtitle}>WEB DEVELOPER</h2>
                        <NavLink to="/portfolio"><button className={Styles.mainBtn}>Explore Projects</button></NavLink>
                    </div>
                </header>

                <section className={Styles.animationBlocks}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>

                <SocialLogos />
            </div>
        )


        return (Homepage)

    }

export default Homepage;
