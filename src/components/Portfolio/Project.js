import React from "react";
const ReactMarkdown = require('react-markdown/with-html');

class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    // props should pass through a single object project

    stackLogoImgs() {
        const stackLogos = this.props.portfolioJSON.fields.techStackLogos.map(element => {
            return (
                <img src={element.fields.file.url} alt="stackLogo" />
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
                            <a href={this.props.portfolioJSON.fields.projectUrl}>
                                {this.props.portfolioJSON.fields.projectUrl}
                            </a>
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
                        alt="project image" />
                </div>

                <div className="portfolio__projectCopy">

                    <h4>
                        Tech Stack
                    </h4>

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