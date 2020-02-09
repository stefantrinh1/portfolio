import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Blog from "./Blog";
import BlogTemplate from "./BlogTemplate";
import Error from "../Error/Error";
import * as contentful from "contentful";
import LoadingPage from "../LoadingPage/LoadingPage";

const BlogRouter = props => {
  // Hook States
  const [isBlogsLoading, FinishLoading] = useState(true);
  const [blogsJSON, SetBlogContent] = useState(null);
  const [loadingError, errorOccured] = useState(false);

  // Contentful's Client
  const client = contentful.createClient({
    space: "6uk9nhmjdkre",
    accessToken: "vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA"
  });

  // ====  Queries  ====
  const BlogsQuery = { content_type: "blogPosts" };
  // ===================

  // This is a Generic Fetch By ContentType Function for Contentful. It takes a query
  const FetchByContentType = query => client.getEntries(query);

  const HandleContentfulFetch = response => {
    SetBlogContent(response.items);
    FinishLoading(false);
  };

  useEffect(() => {
    if (isBlogsLoading) {
      // Functions to Fetch Data from Contentful
      FetchByContentType(BlogsQuery)
        .then(HandleContentfulFetch)
        .catch(error => {
          console.log(error.message ? error.message : "unknown error");
          FinishLoading(false);
          errorOccured(true);
        }, []); //Empty array at the end means the use effect only runs once
    }
  });

  // conditional rendering
  if (!isBlogsLoading && blogsJSON && !loadingError ) {
    return (
      <div>
        <Route exact path={`${props.match.path}`} component={Blog} />
        {/* creates all the blog route from the dyanmic data from contentful */}
        {blogsJSON.map(element => {
          const {
            blogTitle,
            blogDescription,
            author,
            publishedDate,
            categories,
            blogMainImage,
            blogContent
          } = element.fields;

          return (
            <Route
              path={`${props.match.path}/${element.fields.url}`}
              key={element.sys.id}
              render={props => (
                <BlogTemplate
                  {...props}
                  id={element.sys.id}
                  blogTitle={blogTitle}
                  blogDescription={blogDescription}
                  authorImage={author.fields.authorImage.fields.file.url}
                  authorName={author.fields.authorName}
                  authorebsite={author.fields.website}
                  publishedDate={publishedDate}
                  categories={categories}
                  blogMainImage={blogMainImage.fields.file.url}
                  blogMainImageDescription={
                    blogMainImage.fields.file.description
                  }
                  blogContent={blogContent}
                />
              )}
            />
          );
        })}
      </div>
    );
  } else if (loadingError) {
    return <Error />;
  } else {
    return <LoadingPage />;
  }

};

export default BlogRouter;
