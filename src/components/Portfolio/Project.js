import React from "react";
import Styles from "./Project.module.scss";
const ReactMarkdown = require('react-markdown/with-html');


class Project extends React.Component {

    // props should pass through a single object project

    stackLogoImgs() {
        const stackLogos = this.props.portfolioJSON.fields.techStackLogos.map(logo => {
            return (
                <img src={logo.fields.file.url} alt="stackLogo" key={logo.sys.id} />
            )
        });
        return stackLogos
    }

    render() {

        return (

            <div className="portfolio_block-container">

                <header>
                    <div className="portfolio__Headercopy">
                        <h2>
                            {this.props.portfolioJSON.fields.projectName}
                        </h2>
                        <h3>
                            {this.props.portfolioJSON.fields.projectSubtitle ? this.props.portfolioJSON.fields.projectSubtitle : null}
                        </h3>
                    </div>
                    <div className="portfolio__project-buttons">
                        <a href={this.props.portfolioJSON.fields.projectUrl}>
                            <button className="main-btn">Visit Project</button>
                        </a>
                        <a href={this.props.portfolioJSON.fields.githubRepoUrl}>
                            <button className="main-btn">Github Repo</button>
                        </a>
                    </div>

                </header>

                <div className="portfolio__projectImg">
                    <img className=""
                        srcSet={`
                                ${this.props.portfolioJSON.fields.projectImageSmall.fields.file.url} 767w,
                                ${this.props.portfolioJSON.fields.projectImageLarge.fields.file.url} 2560w,
                                `}
                        alt="projectscreenshot" />
                </div>

                <div className="portfolio__projectCopy">

                    <h3>
                        Tech Stack
                    </h3>

                    {/* runs the method that grabs all the logos from contentful and returns a list of JSX */}
                    <div className="portfolio__stacklogo-container">

                        <div className="portfolio__stacklogo-scroll">
                            {this.stackLogoImgs()}
                        </div>
                    </div>

                    <ReactMarkdown className="" escapeHtml={false}>
                        {this.props.portfolioJSON.fields.projectDescription}
                    </ReactMarkdown>

                </div>

            </div>

        )
    }
}

export default Project;