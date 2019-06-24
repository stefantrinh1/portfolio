import React from "react";
import * as contentful from "contentful";
import LoadingPage from "../LoadingPage/LoadingPage"
import Project from "./Project"

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
            // console.log(response)
        }

        componentDidMount() {
            // Functions to Fetch Data from Contentful
            this.FetchByContentType(this.PortfolioQuery).then(this.SetPortfolioContent).catch(console.error)

            // console.log(this.state.portfolioJSON[0])
        }




    render() {
        // this.state.portfolioJSON[0].fields

        
    
        if(!this.state.isPortfolioLoading) {
            const projectList = this.state.portfolioJSON.map(element => {
                console.log(element)
                return(
                <Project portfolioJSON={element}/>
                )
            });
            return(
            <div className="portfolio">


                {projectList}


                <div className="portfolio__block3">
                        <div className="portfolio__banners">

                            <div className="portfolio__banner">
                                <img src="" alt="Banner" />
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