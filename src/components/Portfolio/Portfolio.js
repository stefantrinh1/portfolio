import React from "react";
import * as contentful from "contentful";
import LoadingPage from "../LoadingPage/LoadingPage"

class Portfolio extends React.Component {


        state = {
            isPortfolioLoading: true,
            portfolioJSON: null
        }

        // Contentful's Client 
        client = contentful.createClient({
            space: '6uk9nhmjdkre',
            accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
        })

        // ====  Queries  ====
        PortfolioQuery = {
            content_type: "portfolio",
        }

        // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
        FetchByContentType = (query) => this.client.getEntries(query)

        SetPortfolioContent = response => {
            this.setState({
                isPortfolioLoading: false,
                // the array is brought in ascending order
                "portfolioJSON": response.items
            })
            console.log(response)
        }

        componentDidMount() {
            // Functions to Fetch Data from Contentful
            this.FetchByContentType(this.PortfolioQuery).then(this.SetPortfolioContent).catch(console.error)

            // console.log(this.state.portfolioJSON[0])
        }




    render() {
        
        
    
        if(!this.state.isPortfolioLoading) {
            return(
            <div className="portfolio">
                <div className="portfolio__block1">
                    <header>
                        <h2>
                            {this.state.portfolioJSON[0].fields.projectName}
                        </h2>
                        <h3>
                            {this.state.portfolioJSON[0].fields.projectUrl}
                        </h3>
                    </header>

                    <div className="portfolio__projectImg">
                        <img src={this.state.portfolioJSON[0].fields.projectImage.fields.file.url} alt="project image" />
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

                <div className="portfolio__block3">
                        <div className="portfolio__banners">

                            <div className="portfolio__banner">
                                <img src="" alt="" />
                            </div>
                            
                        </div>
                </div>
            </div>
        )}
        else {
            return <LoadingPage/>
        }
    }
}

export default Portfolio;