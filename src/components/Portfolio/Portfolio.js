import React, { useEffect, useState } from "react";
import Styles from "./Portfolio.module.scss";
import LoadingPage from "../LoadingPage/LoadingPage";
import Project from "./Project";
import { connect } from "react-redux";
import filterProjects from '../../selectors/PortfolioFilter'
import { startSetProjects } from '../../actions/PortfolioProjects'

const Portfolio = (props) => {

  const { projects } = props.portfolioProjects

  // if the projects exists load if not return null
  const [displayedProject, displayedProjectUpdater] = useState(projects[0] ? projects[0] : null)

  useEffect(() => {
    props.dispatch(startSetProjects()) // this starts the redux fetch action to set projects
  }, []) // the array at the end makes the use effect only runs once. 

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
    return projects.filter((project) => {
      if (project.sys.id === id) {
        return project
      }
    })[0] // filter returns an array of one item. hence the index of 0
  }

  // ======  rendering ======

  if (props.error) {
    return <div> Could not Load page at this time, please try again later.</div>
  }

  if (props.loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <div className={Styles.portfolio}>
        <div className={Styles.portfolioHeader}>
          <div className={Styles.headerCopy}>
            <h1>Portfolio</h1>
            <h4>A Collection of Client and Personal Digital Web Projects</h4>
          </div>
        </div>

        <div className={Styles.projectBanners} id={Styles.projectBanners}>
          {/* gets list of Clickable Project Banners */}

          {props.portfolioProjects.projects.map((project) => {
            const { id } = project.sys
            const { title, file: { url } } = project.fields.projectBanner.fields
            return (
              <img
                src={url}
                className={Styles.projectBanner}
                key={id}
                alt={title}
                onClick={() => {
                  // runs get project function to get project clicked by  passing id in.
                  const clickedProject = getProject(projects, id)
                  displayedProjectUpdater(clickedProject)
                }}
              />
            )
          })}

        </div>

        {projects ?
          <Project portfolioJSON={displayedProject ? displayedProject : projects[0]} />
          // if displayProjects has been set then display it. if not display default
          :
          null
        }

      </div>
    </div>
  )
}

// map state to props functions
const mapStateToProps = state => {
  console.log(state)
  return {
    portfolioProjects: filterProjects(state.portfolioProjects, state.filters),
    loading: state.portfolioProjects.loading,
    error: state.portfolioProjects.error,
  };
};

// calls to connect
export default connect(mapStateToProps)(Portfolio);
