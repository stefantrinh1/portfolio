import React from "react";
import DateFormat from "dateformat";
import Styles from "./AboutCareer.module.scss";
const ReactMarkdown = require("react-markdown/with-html");

class CareerEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionShowing: false
    };
  }

  ShowHideDescription = () =>
    this.state.descriptionShowing
      ? this.setState({ descriptionShowing: false })
      : this.setState({ descriptionShowing: true });

  render() {
    return (
      <div className={Styles.careerEntry}>
        <div
          className={[Styles.careerEntryNode, Styles.nodeTop].join(" ")}
        ></div>

        <img
          className={Styles.companyLogo}
          src={this.props.entry.fields.logo.fields.file.url}
          alt=""
        />

        <h3 className={Styles.careerCompany}>
          {this.props.entry.fields.company}
        </h3>

        <div className={Styles.boxSeparator}></div>

        <h4 className={Styles.jobTitle}>{this.props.entry.fields.jobTitle}</h4>

        <h4 className={Styles.careerLocation}>
          {this.props.entry.fields.location}
        </h4>

        <h4 className={Styles.careerDates}>
          {DateFormat(this.props.entry.fields.dateStarted, "mmm yyyy")} -{" "}
          {this.props.entry.fields.presentlyEmployed
            ? "Present"
            : DateFormat(this.props.entry.fields.dateFinished, "mmm yyyy")}
        </h4>

        <button
          onClick={this.ShowHideDescription}
          className={[Styles.careerEntryBtn, Styles.mainBtn].join(" ")}
        >
          {this.state.descriptionShowing ? "Read Less" : "Read More"}
        </button>

        {this.state.descriptionShowing ? (
          <ReactMarkdown
            className={Styles.careerDescription}
            escapeHtml={false}
          >
            {this.props.entry.fields.description}
          </ReactMarkdown>
        ) : null}

        <hr />
      </div>
    );
  }
}
export default CareerEntry;
