import React from "react";
import { Link } from "react-router-dom";
import * as contentful from "contentful";
import LoadingPage from "../LoadingPage/LoadingPage"
import Styles from "./Blog.module.scss";
import DateFormat from "dateformat";

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

    componentDidUpdate() {
        console.log(this.state.blogsJSON)
    }



    render() {
        // removes the need for declaring this.state before every JSON call
        // const blogsJSON = this.state.blogsJSON

        const BlogMenu = () => {
            return (
                <div className={Styles.blogMenu}>
                    <h1 className={Styles.pageTitle}>The Blog</h1>
                    {
                        this.state.blogsJSON.map(element => {
                            return (
                                
                                    <div className={Styles.blogCard} key={element.sys.id}>
                                        <div className={Styles.cardImage}>
                                            <Link to={`/blog/${element.fields.url}`}>
                                                <img src={element.fields.blogMainImage.fields.file.url} alt="" />
                                            </Link>
                                        </div>
                                        <div className={Styles.cardCopy}>
                                            <span className={Styles.dateAuthor}>{DateFormat(element.fields.publishedDate, "dd mmmm yyyy")} | {element.fields.author.fields.authorName}</span>
                                            <h2 className={Styles.blogTitle}>{element.fields.blogTitle}</h2>
                                            <div className={Styles.underline}></div>
                                            <p className={Styles.blogDescription}>{element.fields.blogDescription}</p>
                                            <Link to={`/blog/${element.fields.url}`}><button className={Styles.readBtn}>READ THE POST</button></Link>
                                        </div>
                                    </div>
                               
                            )
                        })
                    }

                </div>
            )

        }


        return !this.state.blogsJSON ? <LoadingPage /> : (BlogMenu())
    }
}

export default Blog;