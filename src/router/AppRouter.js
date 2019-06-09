import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import About from "../components/About/About"
import Portfolio from "../components/Portfolio/Portfolio";
import Blog from "../components/Blog/Blog"
import Contact from "../components/Contact/Contact"
import Navigation from "../components/Navigation/Navigation"
import SocialLogos from "../components/SocialLogos/SocialLogos"
import NotFound from "../components/NotFound/NotFound"

const AppRouter = () => {
    return (
        <div>
        <Router>
                <Navigation />
                <Switch>
                    <Route exact={true} path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                <SocialLogos />
               
        </Router>
        </div>
    )
}

export default AppRouter;