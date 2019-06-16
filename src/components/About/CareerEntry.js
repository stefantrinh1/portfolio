import React from "react";


class CareerEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "descriptionShowing" : false,
        }
    }


    ShowHideDescription = () => this.state.descriptionShowing ? this.setState({ "descriptionShowing": false}) : this.setState({ "descriptionShowing": true}) 

    render() {
    return (
        <div className="about__careerEntry">
            <img className="about__company-logo"src={this.props.entry.fields.logo.fields.file.url} alt="" />
            <h4 className="about__company">{this.props.entry.fields.company}</h4>
            <h6 className="about__jobTitle">{this.props.entry.fields.jobTitle}</h6>
            <h6 className="about__location">{this.props.entry.fields.location}</h6>
            <h6 className="about__dates">{this.props.entry.fields.dateStarted} - {this.props.entry.fields.dateFinished}</h6>
            <button onClick={this.ShowHideDescription} className="about__careerEntry-btn main-btn">{this.state.descriptionShowing ? 'Read Less' : 'Read More' }</button>
            {this.state.descriptionShowing ? <p className="about__description">{this.props.entry.fields.description}</p> : null }
            <hr />
        </div>

    )
}
}
export default CareerEntry;
