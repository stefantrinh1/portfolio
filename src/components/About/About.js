import React from "react";
import * as contentful from "contentful";
import TechStack from "../StackLogos/TechStack";
import AboutIntro from "./AboutIntro";
import CareerList from "./CareerList";
import LoadingPage from "../LoadingPage/LoadingPage";


class About extends React.Component {

    state = {
        isAboutLoading: true,
        isCareerLoading: true,
        "aboutJSON": [],
        "careerJSON": []
    }

    // Contentful's Client 
    client = contentful.createClient({
        space: '6uk9nhmjdkre',
        accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
    })

    // ====  Queries  ====
    CareerQuery = {
        content_type: "careerHistory",
        order: "fields.dateFinished"
    }
    AboutQuery = {
        content_type: "about",
    }
    // ===================


    componentDidMount() {
        // Functions to Fetch Data from Contentful
        this.FetchByContentType(this.AboutQuery).then(this.SetAboutContent).catch(console.error)
        this.FetchByContentType(this.CareerQuery).then(this.SetCareerHistory).catch(console.error)
    }


    // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
    FetchByContentType = (query) => this.client.getEntries(query)

    // Sets the response once it has come back into state for About Intro
    SetAboutContent = response => {
        this.setState({
            isAboutLoading: false,
            "aboutJSON": response.items[0].fields
        })
    }
    // Sets the response once it has come back into state for career history
    SetCareerHistory = response => {
        this.setState({
            isCareerLoading: false,
            // the array is brought in ascending order
            "careerJSON": response.items.reverse()
        })
        console.log(response)
    }

    componentDidUpdate() {
        console.log("updated component");
    }

    render() {
        if (!this.state.isAboutLoading && !this.state.isCareerLoading) {
            return (

                <div className="about">
                    <div className="about__container">

                        <div className="about__block1">
                            <div className="about__intro-container">
                                <AboutIntro aboutTitle={this.state.aboutJSON.aboutTitle} aboutCopy={this.state.aboutJSON.aboutCopy} />
                                <div className="about__techstack-container">
                                    <h3>Tech Stack</h3>
                                    <TechStack />
                                </div>
                            </div>
                        </div>

                        <div className="about__block2">
                            <div className="about__careerHistory">
                                <CareerList careerJSON={this.state.careerJSON} />
                            </div>
                        </div>

                    </div>
                </div>

            )
        }
    // if page is loading return loading page
        else { return (<LoadingPage />) }
    }

}


export default About;