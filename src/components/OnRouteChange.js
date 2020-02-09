import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

import disableScroll from 'disable-scroll'

// routes are wrapped in this HOC

const OnRouteChange = props => {
  useEffect(() => {
    // listener for when route changes
    const unlisten = props.history.listen((location, action) => {
      const navMenu = document.getElementById("navmenucontainer");
      navMenu.style.left = "-100%"; // closes the nav when the route changes
      disableScroll.off() // turn off scroll when route changes
    });
  });

  return <div>{props.children}</div>;
};

export default withRouter(props => <OnRouteChange {...props} />);
