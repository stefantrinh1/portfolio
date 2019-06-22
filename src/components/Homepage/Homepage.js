import React from "react";
import BackgroundDesktop from "../../media-files/hpbg-desktop.jpg";
import BackgroundTablet from "../../media-files/hpbg-tablet.jpg";
import BackgroundMobile from "../../media-files/hpbg-mobile.jpg";
import { NavLink } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

class Homepage extends React.Component {

    state = {
        isLoading: true
    }

    componentWillMount() {
        this.load()
    }

    load() {
        setTimeout(this.testtimeout(), 3000)
    }

    componentDidMount() {
        console.log("component mounted");
        
    }

    testtimeout() {
        console.log("timeout inciated")
        this.setState({ isLoading: false })
    }

    render() {

        let Homepage = (
            <div className="homepage">
                <img
                    className="homepage__background-img"
                    alt="background"
                    srcSet={`
                            ${BackgroundDesktop} 1200w,
                            ${BackgroundTablet} 768w,
                            ${BackgroundMobile} 480w
                
        `} />
                <header className="homepage__header">
                    <div className="homepage__headercontainer">
                        <h1 className="homepage__headertitle homepage__headertitle1">STEFAN</h1>
                        <h1 className="homepage__headertitle homepage__headertitle2">TRINH</h1>
                        <h2 className="homepage__headersubtitle">NOT JUST A WEB DEVELOPER</h2>
                        <button className="homepage__main-btn main-btn"><NavLink to="/portfolio">Explore Projects</NavLink></button>
                    </div>
                </header>
            </div>
        )


        { return (this.state.isLoading ? <LoadingPage /> : Homepage) }


    }
}

export default Homepage;
