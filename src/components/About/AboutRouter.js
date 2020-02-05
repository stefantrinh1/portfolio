import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import AboutMe from "./AboutStack/AboutMe";
import AboutCareer from "./AboutCareer/AboutCareer";
import AboutSocial from "./AboutSocial/AboutSocial";
import LoadingPage from "../LoadingPage/LoadingPage"
import * as contentful from "contentful";

const AboutRouter = (props) => {

    const [isAboutLoading, finishAboutLoading] = useState(true);
    const [aboutJSON, SetAboutContent] = useState([]);
    const [isCareerLoading, finishCareerLoading] = useState(true);
    const [careerJSON, SetCareerContent] = useState([]);
    const [isAboutMainLoading, finishAboutMainLoading] = useState(true);
    const [aboutMainJSON, SetAboutMainContent] = useState([]);

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
        const AboutMain = {
            content_type: "aboutMain",
        }
        // ===================

        // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
        const FetchByContentType = (query) => client.getEntries(query)

        // Functions to Fetch Data from Contentful
        FetchByContentType(AboutQuery).then(handleContentfulAboutFetch).catch(console.error)
        FetchByContentType(CareerQuery).then(handleContentfulCareerFetch).catch(console.error)
        FetchByContentType(AboutMain).then(handleContentfulAboutMainFetch).catch(console.error)
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

        // Sets the response once it has come back into state for About Intro
        const handleContentfulAboutMainFetch = response => {
            SetAboutMainContent(response.items[0].fields)
            finishAboutMainLoading(false)
        }

    // const ScrollToTop = () => {
    //     window.scrollTo(0, 0);
    //     return null;
    //   };

    if(!isAboutLoading && !isCareerLoading && !isAboutMainLoading){
    return (
        <Router >
            <Route exact path={`/about`} render={(props) => (<About {...props} aboutMainJSON={aboutMainJSON}/>)} />
            <Route path={`/about/aboutme`} render={(props) => (<AboutMe {...props} AboutJSON={aboutJSON} />)} />
            <Route path={`/about/career`} render={(props) => (<AboutCareer {...props} CareerJSON={careerJSON} />)} />
            <Route path={`/about/social`} render={(props) => (<AboutSocial {...props} />)} />
        </Router>
    )}
    else{
        return <LoadingPage />
    }
}

export default AboutRouter;