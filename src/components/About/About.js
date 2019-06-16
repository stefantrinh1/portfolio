import React from "react";
import * as contentful from "contentful";
import TechStack from "../StackLogos/TechStack"
import AboutIntro from "./AboutIntro"

class About extends React.Component {

    state = {
        isLoading: true,
        "aboutJson": []
    }
    client = contentful.createClient({
        space: '6uk9nhmjdkre',
        accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
    })

    componentDidMount() {

        // client.getEntries().then(entries => {
        //     entries.items.forEach(entry => {
        //       if(entry.fields) {
        //         console.log(entry.fields)
        //       }
        //     })
        this.FetchAbout().then(this.setAboutContent)

    }

    componentDidUpdate() {
        console.log("updated");


        console.log(this.state.aboutJson)
    }


    FetchAbout = () => this.client.getEntries()

    setAboutContent = response => {
        // console.log(response)
        this.setState({
            isLoading: false,
            "aboutJson": response.items[37]
        })
        // console.log(this.state.aboutJson)
    }




    render() {
        if (!this.state.isLoading) {
            return (

                <div>
                    <AboutIntro aboutTitle={this.state.aboutJson.fields.aboutTitle} aboutCopy={this.state.aboutJson.fields.aboutCopy} />
                </div>
            )
        }

        else { return ("loading....") }
    }

}


export default About;