import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import About from "../components/About/About"
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact"
import Navigation from "../components/Navigation/Navigation"
import SocialLogos from "../components/SocialLogos/SocialLogos"
import BlogTemplate from "../components/Blog/BlogTemplate";
import Blog from "../components/Blog/Blog"
import NotFound from "../components/NotFound/NotFound"
import * as contentful from "contentful";

class AppRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBlogsLoading: true,
            "blogsJSON": null
        }
    }

    // Contentful's Client 
    client = contentful.createClient({
        space: '6uk9nhmjdkre',
        accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
    })

    // ====  Queries  ====
    BlogsQuery = {
        content_type: "blogPosts",
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
            "blogsJSON": response.items
        })
    }

    componentDidUpdate() {
        // console.log(this.state.blogsJSON)
    }

    render() {
        if (!this.state.isBlogsLoading) {
            return (
                <div>
                    <Router>
                        <Navigation />
                        <Switch>
                            <Route exact={true} path="/" component={Homepage} />
                            <Route path="/about" component={About} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route exact path="/blog" component={Blog} />
                            <Route path="/contact" component={Contact} />

                            {
                                this.state.blogsJSON.map(element => {
                                    return (
                                        <Route
                                            path={`/blog/${element.fields.url}`}
                                            key={element.sys.id}
                                            render={(props) => (
                                                <BlogTemplate {...props} blogJson={element} />
                                            )}
                                        />)
                                })
                            }
                            <Route component={NotFound} />
                        </Switch>
                        <SocialLogos />
                    </Router>
                </div>
            )
        }
        else {
            return "loading.."
        }

    }
}

export default AppRouter;