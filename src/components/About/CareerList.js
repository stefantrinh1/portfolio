import React from "react";
import CareerEntry from "./CareerEntry";
import Styles from "./About.module.scss";

const CareerList = (props) => {

    // loops over the list of Objects from the JSON 
    let CareerList = props.careerJSON.map((entry) => {
        return (
            <div key={entry.sys.id}>
                <CareerEntry entry={entry} />
            </div>
        )
    })


    return (
        <div>
            <h2 className={Styles.careerHistoryTitle}>Career History</h2>
    
            {CareerList}

        </div>

    )
}
export default CareerList;
