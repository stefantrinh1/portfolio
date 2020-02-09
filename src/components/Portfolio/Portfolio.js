import React from "react";
import Styles from "./Portfolio.module.scss";
import * as contentful from "contentful";
import LoadingPage from "../LoadingPage/LoadingPage";
import Project from "./Project";
import { connect } from "react-redux";
import filterProjects from '../../selectors/PortfolioFilter'

class Portfolio extends React.Component {
  state = {
    isPortfolioLoading: true,
    portfolioJSON: null,
    displayedProject: null
  };

  // Contentful's Client
  client = contentful.createClient({
    space: "6uk9nhmjdkre",
    accessToken: "vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA"
  });

  // ====  Queries  ====
  PortfolioQuery = {
    content_type: "portfolio"
  };

  // This is a Generic Fetch By ContentType Function for Contentful. It takes a query
  FetchByContentType = query => this.client.getEntries(query);

  SetPortfolioContent = response => {
    this.setState({
      isPortfolioLoading: false,
      portfolioJSON: response.items,
      // sets the first project in the array as the first displayed project
      displayedProject: response.items[0]
    });
  };

  componentDidMount() {
    // Functions to Fetch Data from Contentful
    this.FetchByContentType(this.PortfolioQuery)
      .then(this.SetPortfolioContent)
      .catch(console.error);
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  // all the banners once json has loaded
  getProjectBanners() {
    // loops through the PrtfolioJSON to generate all the banners.
    const projectList = this.state.portfolioJSON.map(element => {
      return (
        <img
          src={element.fields.projectBanner.fields.file.url}
          className={Styles.projectBanner}
          key={element.sys.id}
          onClick={() => {
            // runs get project function to get project clicked by  passing id in.
            this.getProject(element.sys.id);
          }}
        >
        </img>
      );
    });
    return projectList;
  }

  // gets the project by key
  getProject(key) {
    const projectContainer = document.getElementById("project");
    // Because projects is in another componenet it accesses the other components elemenet through id and non css module.
    projectContainer.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });

    // loops through the JSON checking the key and if the key matches and returns the one object
    const element = this.state.portfolioJSON.filter(
      element => element.sys.id === key
    );
    // then sets the only object in the array which is the project to the displayProject State
    // ready to render new clicked once component is updated
    this.setState({
      displayedProject: element[0]
    });
  }

  render() {
    if (!this.state.isPortfolioLoading) {
      return (
        <div className={Styles.portfolio}>
          <div className={Styles.portfolioHeader}>
            <div className={Styles.headerCopy}>
              <h1>Portfolio</h1>
              <h4>A Collection of Client and Personal Digital Web Projects</h4>
            </div>
          </div>

          <div className={Styles.projectBanners} id={Styles.projectBanners}>
            {/* gets list of Clickable Project Banners */}
            {this.getProjectBanners()}
          </div>

          {/* Project Component taking in project to display prop */}
          <Project portfolioJSON={this.state.displayedProject} />
        </div>
      );
    } else {
      return <LoadingPage />;
    }
  }
}

// map state to props functions
const mapStateToProps = state => {

  let projects = null
  console.log(state)

  const client = contentful.createClient({
    space: "6uk9nhmjdkre",
    accessToken: "vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA"
  });

  // ====  Queries  ====
  const PortfolioQuery = {
    content_type: "portfolio"
  };

  // This is a Generic Fetch By ContentType Function for Contentful. It takes a query
  const FetchByContentType = query => client.getEntries(query);

  const SetPortfolioContent = response => {
    console.log(response.items)
    projects = response.items
  };

  FetchByContentType(PortfolioQuery)
  .then(SetPortfolioContent)
  .catch(console.error);

  return {
    projects: filterProjects(projects, {text:"",projectType:"",stackList:[] })
  };
};

// calls to connect
export default connect(mapStateToProps)(Portfolio);