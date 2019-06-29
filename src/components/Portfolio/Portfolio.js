import React from "react";
import * as contentful from "contentful";
import LoadingPage from "../LoadingPage/LoadingPage"
import Project from "./Project"

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// event listener for when screen changes size
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

class Portfolio extends React.Component {

    state = {
        isPortfolioLoading: true,
        portfolioJSON: null,
        displayedProject: null
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
            "portfolioJSON": response.items,
            // sets the first project in the array as the first displayed project
            "displayedProject": response.items[0]
        })
    }

    componentDidMount() {
        // Functions to Fetch Data from Contentful
        this.FetchByContentType(this.PortfolioQuery).then(this.SetPortfolioContent).catch(console.error)
    }

    componentDidUpdate() {
        console.log("component updated");

    }

    // all the banners once json has loaded
    getProjectBanners() {
        // loops through the PrtfolioJSON to generate all the banners.
        const projectList = this.state.portfolioJSON.map(element => {
            return (
                <div
                    className="portfolio__banner"
                    key={element.sys.id}
                    onClick={() => {
                        // runs get project function to get project clicked by  passing id in.
                        this.getProject(element.sys.id)
                    }}>
                    <img src={element.fields.projectBanner.fields.file.url} alt="Banner" />
                </div>
            )
        });
        return projectList
    }


    // gets the project by key
    getProject(key) {

        // loops through the JSON checking the key and if the key matches and returns the one object
        const element = this.state.portfolioJSON.filter(element => element.sys.id === key)

        // then sets the only object in the array which is the project to the displayProject State
        // ready to render new clicked once component is updated
        this.setState({
            "displayedProject": element[0]
        })
    }


    render() {

        if (!this.state.isPortfolioLoading) {

            return (
                <div className="portfolio">
                    
                    {/* Project Component taking in project to display prop */}
                    <Project portfolioJSON={this.state.displayedProject} />

                    {/* <div className="portfolio__projects"> */}
                        <div className="portfolio__banners">

                            {/* gets list of Clickable Project Banners */}
                            {this.getProjectBanners()}

                        </div>
                    
                </div>
            )
        }

        else {
            return <LoadingPage />
        }
    }
}

export default Portfolio;