import React from "react";
import CareerEntry from "./CareerEntry";

const CareerList = (props) => {

    console.log(props.careerJSON)

    // loops over the list of Objects from the JSON 
    let CareerList = props.careerJSON.map((entry) => {
        console.log(entry)
        return (
            <div key={entry.sys.id}>
                <CareerEntry entry={entry} />
            </div>
        )
    })


    return (
        <div>
            <h2 className="about__careerHistoryTitle">Career History</h2>

            {CareerList}

        </div>

    )
}
export default CareerList;
