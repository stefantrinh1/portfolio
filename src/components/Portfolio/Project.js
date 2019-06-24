import React from "react";

class Project extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            project:this.props.portfolioJSON.fields
        }

    }

    render() {

        return (

            <div>
                <div className="portfolio__block1">
                    <header>
                        <h2>
                            {this.state.project.projectName}
                        </h2>
                        <h3>
                            {this.state.project.projectUrl}
                        </h3>
                    </header>

                    <div className="portfolio__projectImg">
                        <img src={this.state.project.projectImage.fields.file.url} alt="project image" />
                    </div>

                    <div>
                        <h5>
                            Tech Stack
                        </h5>
                        <div className="portfolio__stacklogo">
                            <img src="" alt />
                        </div>
                    </div>
                </div>

                <div className="portfolio__block2">
                    <div className="portfolio__projectDescription">

                    </div>
                </div>

            </div>

        )
    }
}

export default Project;