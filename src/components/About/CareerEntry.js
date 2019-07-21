import React from "react";
import DateFormat from "dateformat";
import Styles from "./About.module.scss";


class CareerEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "descriptionShowing": false,
            
        }
    }

    ShowHideDescription = () => this.state.descriptionShowing ? this.setState({ "descriptionShowing": false }) : this.setState({ "descriptionShowing": true })

    render() {
        return (

            <div className={Styles.careerEntry}>

                <div className={[Styles.careerEntryNode, Styles.nodeTop].join(" ")}></div>

                <img className={Styles.companyLogo} src={this.props.entry.fields.logo.fields.file.url} alt="" />

                <h4 className={Styles.careerCompany}>
                    {this.props.entry.fields.company}
                </h4>

                <div className={Styles.boxSeparator}></div>

                <h6 className={Styles.jobTitle}>
                    {this.props.entry.fields.jobTitle}
                </h6>

                <h6 className={Styles.careerLocation}>
                    {this.props.entry.fields.location}
                </h6>

                <h6 className={Styles.careerDates}>
                    {DateFormat(this.props.entry.fields.dateStarted,"mmm yyyy")} - {this.props.entry.fields.presentlyEmployed ? "Present" : DateFormat(this.props.entry.fields.dateFinished, "mmm yyyy")}
                </h6>

                <button onClick={this.ShowHideDescription} className={[Styles.careerEntryBtn, Styles.mainBtn].join(" ")}>
                    {this.state.descriptionShowing ? 'Read Less' : 'Read More'}
                </button>

                {this.state.descriptionShowing ?
                    <p className={Styles.careerDescription}>{this.props.entry.fields.description}</p>
                    :
                    null}

                <hr />
            </div>

        )
    }
}
export default CareerEntry;
