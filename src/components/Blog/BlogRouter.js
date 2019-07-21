import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import Blog from "./Blog";
import BlogTemplate from "./BlogTemplate";
import * as contentful from "contentful";
import LoadingPage from '../LoadingPage/LoadingPage';

const BlogRouter = (props) => {

    // Hook States
    const [isBlogsLoading, FinishLoading] = useState(true);
    const [blogsJSON, SetBlogContent] = useState(null);




    useEffect(() => {
        // Contentful's Client 
        const client = contentful.createClient({
            space: '6uk9nhmjdkre',
            accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
        })

        // ====  Queries  ====
        const BlogsQuery = { content_type: "blogPosts", }
        // ===================

        // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
        const FetchByContentType = (query) => client.getEntries(query)

        // Functions to Fetch Data from Contentful
        FetchByContentType(BlogsQuery).then(HandleContentfulFetch).catch(console.error)
        
    }, []) //Empty array at the end means the use effect only runs once


    const HandleContentfulFetch = response => {
        SetBlogContent(response.items)
        FinishLoading(false)
    }



    if (!isBlogsLoading) {
        return (

            <div>
                <Route exact path={`${props.match.path}`} component={Blog} />
                {
                    blogsJSON.map(element => {
                        return (
                            <Route
                                path={`${props.match.path}/${element.fields.url}`}
                                key={element.sys.id}
                                render={(props) => (
                                    <BlogTemplate {...props} blogJson={element} />
                                )}

                            />)
                    })
                }
            </div>
        )
    }
    else {
        return <LoadingPage />
    }
}

export default BlogRouter;