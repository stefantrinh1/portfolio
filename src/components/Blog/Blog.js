import React from "react";
import * as contentful from "contentful";
import LoadingPage from "../LoadingPage/LoadingPage"

class Blog extends React.Component {

    state = {
        isBlogsLoading: true,
        "blogsJSON": null

    }

    // Contentful's Client 
    client = contentful.createClient({
        space: '6uk9nhmjdkre',
        accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
    })

    // ====  Queries  ====
    BlogsQuery = {
        content_type: "blogPosts",
        order: "fields.publishedDate"
    }
    // ===================


    componentDidMount() {
        // Functions to Fetch Data from Contentful
        this.FetchByContentType(this.BlogsQuery).then(this.SetBlogContent).catch(console.error)
    }

    // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
    FetchByContentType = (query) => this.client.getEntries(query)

    // Sets the response once it has come back from contentful into state management
    SetBlogContent = response => {
        this.setState({
            isBlogsLoading: false,
            "blogsJSON": response.items.reverse()
        })
    }

    componentDidUpdate(){
        console.log(this.state.blogsJSON)
    }

 

    render() {

        const BlogMenu = (
            <div>
                test
            </div>
        )

        return !this.state.blogsJSON ? <LoadingPage />: (BlogMenu)
    }
}

export default Blog;