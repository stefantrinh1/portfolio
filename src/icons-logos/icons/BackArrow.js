import React from "react";
import Styles from "./BackArrow.module.scss"

const BackArrow = (props) => (
    <svg className={Styles.backArrow} width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id={Styles.artBoard} transform="translate(-209.000000, -179.000000)">
                <polygon id="Shape" points="259 200.875 220.875 200.875 238.375 183.375 234 179 209 204 234 229 238.375 224.625 220.875 207.125 259 207.125"></polygon>
            </g>
        </g>
    </svg>
)

export default BackArrow