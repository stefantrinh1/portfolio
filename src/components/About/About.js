import React from "react";
// import LoadingPage from "../LoadingPage/LoadingPage";
import Styles from "./About.module.scss";
import { Link } from "react-router-dom";
const ReactMarkdown = require('react-markdown/with-html');

const About = (props) => {

    return (

        <div className={Styles.about}>

            <p>
                I am a Web developer based in the West London and specialise in creating clean and simple user interfaces and use modern web technologies that produce fast, reliable and easily maintainable websites. 
                Taking pride in the work I do, I will not stop until a client is fully satified with their platform. I believe in pixel perfection and will not be satified until this is achieved. 
                Minimising running costs for clients is very important to me. Web hosting and Content Management is generally painful monthly expense for new businesses and most worry about paying out money for their small business that may not work out. 
                Most of my websites and applictions are built with a FREE! content management system(CMS) and FREE! web hosting. None of that monthly charges you get with companies like Go Daddy and Wordpress. Your main cost is the yearly Domain fee. Usually between £9 to £14 per year. 
                IMAGINE THAT. YOU CAN HAVE A WEBSITE THAT ONLY COSTS YOU FROM £9 A YEAR!!! 
                if you have any questions or would like to chat about more about what you need. please contact me on stefantrinh1.work@gmail.com
            </p>

            <div className={Styles.aboutCards}>

                <div className={Styles.aboutCard}>

                    <svg width="159px" height="159px" viewBox="0 0 159 159" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Artboard" transform="translate(-176.000000, -211.000000)">
                                <g id="Information-Icon" transform="translate(176.000000, 211.000000)">
                                    <circle id="Oval" fill="#4175DC" cx="79.5" cy="79.5" r="79.5"></circle>
                                    <text id="i" fontFamily="Roboto-Bold, Roboto" fontSize="100" fontWeight="bold" letterSpacing="3.57142857" fill="#FFFFFF">
                                        <tspan x="66" y="114">i</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <h2>Tech Stack</h2>

                    <p>Find out more about my technology stack and what I use to create beautiful and innovative projects.</p>
                    <div className={Styles.aboutCardBtn} >
                        <Link to={`${props.match.url}/aboutme`}>
                            Read More >
                </ Link>
                    </div>

                </div>

                <div className={Styles.aboutCard}>


                    <svg width="145px" height="144px" viewBox="0 0 145 144" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Artboard" transform="translate(-29.000000, -211.000000)" fill="#AA23AB">
                                <g id="Work-Icon" transform="translate(29.000000, 211.000000)">
                                    <rect id="Rectangle" x="40" y="1" width="13" height="55" rx="6.5"></rect>
                                    <rect id="Rectangle" x="91" y="1" width="13" height="55" rx="6.5"></rect>
                                    <path d="M70.5,-24 L72.5,-24 C76.0898509,-24 79,-21.0898509 79,-17.5 L79,33.5 C79,37.0898509 76.0898509,40 72.5,40 L70.5,40 C66.9101491,40 64,37.0898509 64,33.5 L64,-17.5 C64,-21.0898509 66.9101491,-24 70.5,-24 Z" id="Rectangle" transform="translate(71.500000, 8.000000) rotate(90.000000) translate(-71.500000, -8.000000) "></path>
                                    <rect id="Rectangle" x="0" y="38" width="145" height="106" rx="8"></rect>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <h2>Career History</h2>
                    <p>Are you an employer or recruiter? Find out more about my past career history and work experience</p>
                    <div className={Styles.aboutCardBtn}>
                        <Link to={`${props.match.url}/career`}>
                            See History >
                    </ Link>
                    </div>
                </div>

                <div className={Styles.aboutCard}>

                    <svg width="162px" height="120px" viewBox="0 0 162 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Artboard" transform="translate(-344.000000, -129.000000)">
                                <g id="Camera-Icon" transform="translate(344.000000, 126.000000)">
                                    <rect id="Rectangle" fill="#A8D52F" x="0" y="20" width="162" height="103" rx="8"></rect>
                                    <g id="Camera-Head" transform="translate(32.000000, 0.000000)" fill="#A8D52F">
                                        <rect id="Rectangle" transform="translate(18.500000, 17.552106) rotate(140.000000) translate(-18.500000, -17.552106) " x="1" y="10.5521064" width="35" height="14" rx="7"></rect>
                                        <rect id="Rectangle" x="21.5269902" y="3" width="52" height="18" rx="8"></rect>
                                        <rect id="Rectangle" transform="translate(76.913949, 19.457020) rotate(40.000000) translate(-76.913949, -19.457020) " x="57.913949" y="10.9570201" width="38" height="17" rx="8"></rect>
                                    </g>
                                    <circle id="Oval" fill="#E8E8E8" cx="80.5" cy="69.5" r="32.5"></circle>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <h2>Social</h2>
                    <p>Want to know the personal side of me. well here you can see the traveller, foodie and coder side of me</p>
                    <div className={Styles.aboutCardBtn}>
                        <Link to={`${props.match.url}/social`} >
                            See Social >
                </ Link>
                    </div>
                </div >

            </div>


        </div>
    )
}


export default About;
