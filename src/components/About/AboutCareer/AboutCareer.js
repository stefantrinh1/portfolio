import React from "react";
import CareerList from "./CareerList";
import ScrollToTop from '../../ScrollToTop'

const AboutCareer = props => {
  return (
    <>
    <ScrollToTop />
      <CareerList careerJSON={props.CareerJSON} />
    </>
  );
};

export default AboutCareer;
