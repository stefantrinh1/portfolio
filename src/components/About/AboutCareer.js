import React from "react";
import CareerList from "./CareerList";


const AboutCareer = (props) => {
    console.log(props)
    return (
        <div>
            <CareerList careerJSON={props.CareerJSON} />
        </div>
    )
}

export default AboutCareer;