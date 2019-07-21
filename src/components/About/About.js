import React from "react";
// import LoadingPage from "../LoadingPage/LoadingPage";
import Styles from "./About.module.scss";
import { Link } from "react-router-dom";


const About = (props) => {

    return (

        <div className={Styles.about}>


            <div className={Styles.aboutCard}>
                <Link to={`${props.match.url}/aboutme`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="10.442cm" height="10.442cm">
                        <image x="0px" y="0px" width="296px" height="296px" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAEoAgMAAACWaYSKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUhlvMhlvP///+sS3lqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfjBxQTNSnPvJinAAADG0lEQVR42u3cS3biMBCFYTzQErQfL6EG1v630k0GnGDrUY/fHZGWxpwvqgucJCDdx2O0tvK19uEDRyuV15KYVN5WANrKabmnvEhuqyJ5rVJdHinXqcMupdJYggTliyu3KeOIqXSWbcTSXdimbNsqhdpWGlH6bY0k/baGm9Jvayxpt6XYlHZbGkm3rU1H7Qoq6yjNO1EnaSZUha4LXjmfYkJl6Jrg1fONJ9RLo+AN840mNMw3mtAi9Sc0zdef0DRff8Jso3qvUpvUC8s4X29C43y9Ca1Se0LjS+G5Wi8Hc1TtsMxRtcOyS62wHFG1wnJE1QrLEVUrLI9UD8sVVT0sV1T1sFxR1cPySdWwOMqZei335KWuuWcvdWBRXcNyR3UNC6SSnzrnnv3UOXe/dMmdowKpn3NPEUruonKEOrDUT7lzVOgJfH8KU4ySe6gcow4s9bfcOSr4BH5/CruUKJ6ZXfcEaii5g8pR6riDKlGq3EBtcWrnqRSnhKdynDp4qsSpglMbQe0TU4mghKYyQR0TU4WgyrzU6Le8ktr/LaVcu+LHKZdMS2WGOv4HipG+3jm/nYLegs834aL0VKIoWdTPUJmijkUtykAp/776Sw1/mpYqi1rUoha1qEUtiqEyRaF/MyxqUS9q+BAtpfjPa1F3UMOPLLSU4tOPRb2o4e8JLaX4rO/jqcxQms+QP54aPUZJybTUZ35RZaDm/H6QpDJBzfxlcSIooak5zzOA1JwnUiY9vZPilPDUnKfC5jxBN+lpwxSl5A4KPHoKHoid88QveaQ5xSi5hwIPpc956p68VpAilNxFgRdD5rz5Ql7tSX5KTtScN6rAK2PkRbbkpeRCgZf+5rzVSF7bTD5KKhR4xRW8eEteB3aFJVUKvDoNXugmr5k7wpIGBV7JB4sCyPoCc1jSpMCqB7KAwjhhZz6yrAOsECGLTcC6FbAEhqymAQtzwBofslwIrDwii5jAeiiwtIqs0gILvsjaMbAMjaxoA4vjyDo7sGSPrP4DCwnJmkSwvJGslCSLLsn6TbAUlKwqveQVgB5krevDUDb7B6qxUv3ovP5jAAAAAElFTkSuQmCC" />
                    </svg>
                    <h2>About Me</h2>
                    <p>More about my services and technology background</p>
                </ Link>
            </div>

            <div className={Styles.aboutCard}>
                <Link to={`${props.match.url}/career`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="10.442cm" height="9.913cm">
                        <image x="0px" y="0px" width="296px" height="281px" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAEZAgMAAABZT1CCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEWcJ7CcJ7D///94jTGhAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfjBxQTMwzS4utmAAABS0lEQVR42u3cMW7DMBBEUbngEfY+PgIL8f5XSRCBUeKIAkj+gkn+9n7YHbNxMd62m4nyMvs2OD+kYSuVi8lDVLkcbKmxteKaGkjrURrzpO4buTBaVP+FpTlYVP1hgVRqU725R5vqzR2kys1gqffmviaV7qj8B6i4o/oeltRvpwpOvXwoJg6UkpKSkpKSkvo2ZWo46auVZqmMLXX+7Jle6lxrXqppPeaheiFwX70wCGrHojrCQqI6wkoMlamojrBAipE+cqeoJ/UFwlSiqLwktVPP6h9QBXvsUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlLvVFDSmn0clEoUtWbPKy9aryOriMFIcNcyMVRmK65g8ZakEiFlujoNFrqJl1UL/8CFtfw+v9b5LwTTa30uNW0d0htdDadnS0ucRgAAAABJRU5ErkJggg==" />
                    </svg>
                    <h2>Career History</h2>
                    <p>Find out about my career history here</p>
                </ Link>
            </div>

            <div className={Styles.aboutCard}>
                <Link to={`${props.match.url}/social`} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="10.442cm" height="9.384cm">
                        <image x="0px" y="0px" width="296px" height="266px" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAEKAgMAAADcDSC3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMr1BMr1D///+qI+6kAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfjBxQTOxgA4bUTAAADF0lEQVR42u3cUXbjIAwFUPtDS2A/LEEf9v63MtPpaZ1OkNATLwmTgd/03APPTmMEZtustp/NVje8SZvSBFXa1JGgTqPh0m5ReFhiUXhYxaLwsE6z0aLCwyJSYlNo7sWm0NxPp9GiQsMSj8LCKh6FhXW6jRYVFpb4FBJW8SkkrLPTXkLtPSqeu/SoeO6lR8Vz70nxsLpRxcPqRhUPqxtVPKy+5IQVGFJwuIGco1chEE4wuuFOXd0a7tTVrXHp64oKg1LW+L5GyJA+R0i4fh+tcinhUMpK/TN3jvQndx5FSv0jdyIlLEonpQqLOt6fYkm/b/dFLWpRi1rU/0hp8Im8T4VnL/GSQtfqUTeT5J7VoX7MkcsQhcyE/Y//mrjLAAVN0N1P76oJkqawuoH3od5TkqTqPbXnqGaxpKQobVGSopollz1DGcWgkqC0TUmCqhs4QpMyi104pRZVYKpalMCUJdlhWZRTF0QptakCUtWmhEftILU5DaPcamyBKI2MKEbVficSVFSyKHh0JnUkOtWlgEJSm9JEpwyqJjrVo2SY6v5DwSmoetekjsz4OlQZpjQTlU9hhc4mVTNR+RQUVZtKRfVo6kil7lIyFaWpC/gsCpOaVKVT6FLDcyghULnbyqPKgyln0fSfo4xEEOqIUGVRj6H8TZ6LWtQ7UXN+B9+XIv5MzP07yKC8pjNTO4GqU1IbnZJx6piSUueb8Dqq8qjN+V/2Msqd62OU8qjq3FYgtdEov0QGUcqjqncvYNRGo77Htw9TlUZd5W4Zpb47Zcz141S3nB+nrk5Zj0tRSS9pH6Nu14jGqJvRmcWaxy9UEZfPmIt6yqOcsASknLAKStlhnShlhgWvO9thCUyZYRWcMsJKbEJgbo0gbtgwRnhmKMXG96QtN8SNQMztScRNU8ytXMQNZsxtb8TNeD/vLRmiiBsXb63eX/Z/6GtQeu7W03Bb1KIWtahFvSFVWNKsL/0RKWFRs75MOuc7vHO+78x8oVs4lAYefIOtciniQQHM4wuEQWnw4T46PuoBFMRjMYiHdTCPEOEcbPILnFDiNPpxaN8AAAAASUVORK5CYII=" />
                    </svg>
                    <h2>Social</h2>
                    <p>Find out more about travel, food and coding</p>
                </ Link>
            </div>

        </div >
    )
}


export default About;

// return (

//     <div className={Styles.about}>
//         <div className={Styles.aboutContainer}>

//             <div className={Styles.block1}>
//                 <div className={Styles.introContainer}>
//                     <AboutIntro aboutTitle={this.state.aboutJSON.aboutTitle} aboutCopy={this.state.aboutJSON.aboutCopy} />
//                     <div className={Styles.techStackContainer}>
//                         <h3>Tech Stack</h3>
//                         <div className={Styles.stackLogos}>
//                             {this.LogoList()}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className={Styles.block2}>
//                 <div className={Styles.careerHistory}>
//                     <CareerList careerJSON={this.state.careerJSON} />
//                 </div>
//             </div>

//         </div>
//     </div>

// )