import React from "react";
import Styles from "./Project.module.scss";
import LinkIcon from "../../icons-logos/icons/link.png";
import GithubIcon from "../../icons-logos/logos/githublogo.png";
import TechStack from "../TechStack/TechStack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReactSlickOveride.scss";
const ReactMarkdown = require("react-markdown/with-html");

class Project extends React.Component {
  projectContainer = React.createRef();
  

  render() {
    console.log(this.props)
    const {
      //   destructuring contentful props object
      projectName,
      projectSubtitle,
      projectUrl,
      githubRepoUrl,
      projectImages,
      techStack,
      projectDescription
    } = this.props.portfolioJSON.fields;

    var settings = {
      centerMode: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    };

    return (
      // id is there to allow portfolio component to access this element.
      <div className={Styles.project} id="project">
        <header className={Styles.header}>
          <div className={Styles.titlecontainer}>
            <h2 className={Styles.projectTitle}>{projectName}</h2>
            <div className={Styles.seperator} />
            <p className={Styles.projectSubtitle}>
              {projectSubtitle ? projectSubtitle : null}
            </p>
          </div>

          <div className={Styles.projectBtns}>
            <a href={projectUrl}>
              <button className={Styles.projectBtn}>
                <img
                  style={{ height: "10px", width: "16px" }}
                  src={LinkIcon}
                  alt="projectlinkicon"
                />{" "}
                Visit Project
              </button>
            </a>

            <a href={githubRepoUrl}>
              <button className={Styles.projectBtn}>
                <img
                  style={{ height: "14px", width: "16px" }}
                  src={GithubIcon}
                  alt="githubicon"
                />{" "}
                Github Repo
              </button>
            </a>
          </div>
        </header>

        <div className={Styles.projectImg}>
          <Slider {...settings}>
            {projectImages.map(image => (
              <div key={image.sys.id}>
                <img src={image.fields.file.url} />
              </div>
            ))}
          </Slider>
        </div>

        <div className={Styles.projectDetails}>
          <h3>Tech Stack</h3>

          <TechStack stackJSON={techStack} />

          <ReactMarkdown
            className={Styles.projectDescription}
            escapeHtml={false}
          >
            {projectDescription}
          </ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default Project;
