import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNav } from "../redux/actions/Navigation";
import disableScroll from 'disable-scroll'

const OnRouteChange = props => {
  useEffect(() => {
    const unlisten = props.history.listen((location, action) => {
      const navMenu = document.getElementById("navmenucontainer");
      navMenu.style.left = "-100%";
      disableScroll.off()
    });
  });

  return <div>{props.children}</div>;
};

export default withRouter(props => <OnRouteChange {...props} />);
