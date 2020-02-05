import React from "react";
import Styles from "./Project.module.scss";
import LinkIcon from '../../icons-logos/icons/link.png'
import GithubIcon from '../../icons-logos/logos/githublogo.png'
import TechStack from "../TechStack/TechStack";
const ReactMarkdown = require('react-markdown/with-html');


class Project extends React.Component {

    projectContainer = React.createRef()
  
    render() {

        return (

            // id is there to allow portfolio component to access this element.
            <div className={Styles.project} id="project">

                <h2 className={Styles.projectHeading}>Project</h2>
              
                <header>

                    <div className={Styles.headerContent}>
                        <div className={Styles.headerCopyInner} >

                            <div className={Styles.headerCopy}>

                                <h2 className={Styles.projectTitle}>
                                    {this.props.portfolioJSON.fields.projectName}
                                </h2>
                                <p className={Styles.projectSubtitle}>
                                    {this.props.portfolioJSON.fields.projectSubtitle ? this.props.portfolioJSON.fields.projectSubtitle : null}
                                </p>

                            </div>

                            <div className={Styles.projectBtns}>
                                <a href={this.props.portfolioJSON.fields.projectUrl}>
                                    <button className={Styles.projectBtn}><img style={{height: "12px"}} src={LinkIcon} alt="projectlinkicon"/> Visit Project</button>
                                </a>

                                <a href={this.props.portfolioJSON.fields.githubRepoUrl}>
                                    <button className={Styles.projectBtn}><img style={{height: "14px", width: "16px" }} src={GithubIcon} alt="githubicon"/> Github Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.projectImg}>
                        <img className=""
                            src={`
                                ${this.props.portfolioJSON.fields.projectImageSmall.fields.file.url}
                                `}
                            alt="projectscreenshot" />
                    </div>

                </header>


                <div className={Styles.projectDetails}>

                    <h3>
                        Tech Stack
                    </h3>

                    <TechStack LogosJSON={this.props.portfolioJSON.fields.techStackLogos}/>

                    <ReactMarkdown className={Styles.projectDescription} escapeHtml={false}>
                        {this.props.portfolioJSON.fields.projectDescription}
                    </ReactMarkdown>

                </div>

            </div>

        )
    }
}

export default Project;