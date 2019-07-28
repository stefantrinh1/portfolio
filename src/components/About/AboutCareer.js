import React from "react";
import CareerList from "./CareerList";


const AboutCareer = (props) => {
    return (<CareerList careerJSON={props.CareerJSON} />)
}

export default AboutCareer;