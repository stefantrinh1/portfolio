import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import About from "./About";
import AboutMe from "./AboutMe";
import AboutCareer from "./AboutCareer";
import AboutSocial from "./AboutSocial";
import LoadingPage from "../LoadingPage/LoadingPage"
import * as contentful from "contentful";

const AboutRouter = (props) => {

    const [isAboutLoading, finishAboutLoading] = useState(true);
    const [aboutJSON, SetAboutContent] = useState([]);
    const [isCareerLoading, finishCareerLoading] = useState(true);
    const [careerJSON, SetCareerContent] = useState([]);

    useEffect(() => {

        // Contentful's Client 
        const client = contentful.createClient({
            space: '6uk9nhmjdkre',
            accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
        })

        // ====  Queries  ====
        const CareerQuery = {
            content_type: "careerHistory",
            order: "fields.dateFinished"
        }
        const AboutQuery = {
            content_type: "about",
        }
        // ===================

        // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
        const FetchByContentType = (query) => client.getEntries(query)

        // Functions to Fetch Data from Contentful
        FetchByContentType(AboutQuery).then(handleContentfulAboutFetch).catch(console.error)
        FetchByContentType(CareerQuery).then(handleContentfulCareerFetch).catch(console.error)
        
    }, [])

    // Sets the response once it has come back into state for About Intro
    const handleContentfulAboutFetch = response => {
        SetAboutContent(response.items[0].fields)
        finishAboutLoading(false)
    }

    // Sets the response once it has come back into state for career history
    const handleContentfulCareerFetch = response => {
        SetCareerContent(response.items.reverse())
        finishCareerLoading(false)
    }

    if(!isAboutLoading && !isCareerLoading){
    return (
        <div>
            <Route exact path={`${props.match.path}`} component={About} />
            <Route path={`${props.match.path}/aboutme`} render={(props) => (<AboutMe {...props} AboutJSON={aboutJSON} />)} />
            <Route path={`${props.match.path}/career`} render={(props) => (<AboutCareer {...props} CareerJSON={careerJSON} />)} />
            <Route path={`${props.match.path}/social`} render={(props) => (<AboutSocial {...props}  />)} />
        </div>
    )}
    else{
        return <LoadingPage />
    }
}

export default AboutRouter;