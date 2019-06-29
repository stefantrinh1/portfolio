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
                <div className="portfolio__block1">
                    <header>
                        <h2>
                            {this.props.portfolioJSON.fields.projectName}
                        </h2>
                        <h3>
                            {this.props.portfolioJSON.fields.projectUrl}
                        </h3>
                    </header>

                    <div className="portfolio__projectImg">
                        <img className="portfolio__project-desktop" src={this.props.portfolioJSON.fields.projectImage.fields.file.url} alt="project image" />
                    </div>

                </div>

                <div className="portfolio__block2">
                    
                    <div className="portfolio__project-buttons">
                        <button className="main-btn">Visit Project</button>
                        <button className="main-btn">Github Repo</button>
                    </div>

                    <div className="portfolio__projectDescription">
                        <ReactMarkdown className="" escapeHtml={false}>
                            {this.props.portfolioJSON.fields.projectDescription}
                        </ReactMarkdown>
                        <h5>
                            Tech Stack
                        </h5>
                        <div className="portfolio__stacklogo-container">
                            {/* runs the method that grabs all the logos from contentful and returns a list of JSX */}
                            <div className="portfolio__stacklogo-scroll">
                            {this.stackLogoImgs()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Project;