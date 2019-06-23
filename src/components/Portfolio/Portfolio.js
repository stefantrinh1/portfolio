import React from "react";
import * as contentful from "contentful";

class Portfolio extends React.Component {


        state = {
            isPortfolioLoading: true
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
                "careerJSON": response.items
            })
            console.log(response)
        }

        componentDidMount() {
            // Functions to Fetch Data from Contentful
            this.FetchByContentType(this.PortfolioQuery).then(this.SetPortfolioContent).catch(console.error)
        }




    render() {
        return (
            <div>
                <p>
                    Portfolio
                </p>
            </div>
        )
    }
}

export default Portfolio;