import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact"
import Navigation from "../components/Navigation/Navigation"
import NotFound from "../components/NotFound/NotFound"
import AboutRouter from "../components/About/AboutRouter";
import BlogRouter from "../components/Blog/BlogRouter";

class AppRouter extends React.Component {



    render() {
       
            return (
                <div>
                    <Router>
                        <Navigation />
                        <Switch>
                            <Route exact={true} path="/" component={Homepage} />
                            <Route path="/about" component={AboutRouter} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/blog" component={BlogRouter} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </div>
            )
        }

    }


export default AppRouter;