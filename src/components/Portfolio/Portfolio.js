import React, { useEffect, useState } from "react";
import Styles from "./Portfolio.module.scss";
import LoadingPage from "../LoadingPage/LoadingPage";
import Project from "./Project";
import { connect } from "react-redux";
import filterProjects from "../../selectors/PortfolioFilter";
import { startSetProjects } from "../../actions/PortfolioProjects";
import PortfolioFilters from "./PortfolioFilters";
import InvalidCriteria from "../Error/InvalidCriteria";
const Portfolio = props => {
  // if the projects exists load if not return null
  const [displayedProject, displayedProjectUpdater] = useState(null);

  useEffect(() => {
    if (!props.loading && displayedProject === null) {
      displayedProjectUpdater(props.portfolioProjects[0]);
    }
  });

  useEffect(() => {
    props.dispatch(startSetProjects());
    // this starts the redux fetch action to set projects
  }, []); // the array at the end makes the use effect only runs once.

  const getProject = (projects, id) => {
    // takes an array or projects and the id of the clicked button

    // Because projects is in another componenet it accesses the other components elemenet through id and non css module.
    const projectContainer = document.getElementById("project");
    projectContainer.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });

    // filters through the projects and returns the project with a correct id.
    return props.portfolioProjects.filter(project =>
      project.sys.id === id ? project : null
    )[0]; // filter returns an array of one item. hence the index of 0
  };
  
  // ==========================
  // ======  Rendering  =======
  // ==========================

  if (props.error) {
    return (
      <div> Could not Load page at this time, please try again later.</div>
    );
  }

  if (!props.loading && displayedProject) {
    return (
      <div>
        <div className={Styles.portfolio}>
          <div className={Styles.portfolioHeader}>
            <div className={Styles.headerCopy}>
              <h1>Portfolio</h1>
              <h4>A Collection of Client and Personal Digital Web Projects</h4>
            </div>
          </div>
          <PortfolioFilters />

          <div className={Styles.projectBanners} id={Styles.projectBanners}>
            {/* gets list of Clickable Project Banners */}

            {props.portfolioProjects.length !== 0 ? (
              props.portfolioProjects.map(project => {
                const { id } = project.sys;
                const {
                  title,
                  file: { url }
                } = project.fields.projectBanner.fields;
                return (
                  <img
                    src={url}
                    className={Styles.projectBanner}
                    key={id}
                    alt={title}
                    onClick={() => {
                      // runs get project function to get project clicked by  passing id in.
                      const clickedProject = getProject(
                        props.portfolioProjects,
                        id
                      );
                      displayedProjectUpdater(clickedProject);
                    }}
                  />
                );
              })
            ) : (
              <InvalidCriteria />
            )}
          </div>

          <Project portfolioJSON={displayedProject} />
        </div>
      </div>
    );
  }

  return <LoadingPage />;
};

// map state to props functions
const mapStateToProps = state => {
  const { portfolioProjects, portfolioFilter } = state;
  return {
    loading: portfolioProjects.loading,
    error: portfolioProjects.error,
    portfolioProjects: filterProjects(portfolioProjects, portfolioFilter)
  };
};

// calls to connect
export default connect(mapStateToProps)(Portfolio);
