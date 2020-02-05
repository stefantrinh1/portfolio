import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Navigation from "../components/Navigation/Navigation";
import NotFound from "../components/NotFound/NotFound";
import AboutRouter from "../components/About/AboutRouter";
import BlogRouter from "../components/Blog/BlogRouter";
import ScrollToTop from "../components/ScrollToTop";
import OnRouteChange from "../components/OnRouteChange";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <OnRouteChange>
            <Route
              style={{ maxHeight: "-webkit-fill-available" }}
              exact={true}
              path="/"
              component={Homepage}
            />

            <Route path="/about" component={AboutRouter} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={BlogRouter} />
            <Route path="/contact" component={Contact} />
          </OnRouteChange>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
