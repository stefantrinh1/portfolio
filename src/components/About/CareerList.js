import React from "react";
import CareerEntry from "./CareerEntry";
import Styles from "./About.module.scss";
import { Link } from "react-router-dom";
import BackArrow from "../../icons-logos/icons/backarrow.png";

const CareerList = (props) => {

    // loops over the list of Objects from the JSON 
    let CareerList = props.careerJSON.map((entry) => {
        return (
            <div key={entry.sys.id}>
                <CareerEntry entry={entry} />
            </div>
        )
    })
    console.log(props)


    return (
        <div className={Styles.careerHistory}>
            <Link to="/about">
                <img className={Styles.backArrow} src={BackArrow} alt="BackArrow" />
            </Link>
            <h1 className={Styles.careerHistoryTitle}>Career History</h1>
            {CareerList}
        </div>

    )
}
export default CareerList;
