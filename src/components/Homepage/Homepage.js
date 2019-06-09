import React from "react";
import Background from "../../media-files/hpbg1.jpg";

class Homepage extends React.Component {

    render() {

        return (
            <div className="homepage">
                <img className="homepage__background-img" alt="background" src={Background} />
                <header>
                    
                    <h4>Template By:</h4>
                    <h1>Stefan <br /> Trinh </h1>
                    <h4> <a href="http://www.stefantrinh.co.uk"> www.stefantrinh.co.uk</a></h4>
                </header>
            </div>
        )
    }
}

export default Homepage;
