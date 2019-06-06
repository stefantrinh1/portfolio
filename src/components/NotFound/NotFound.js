import React from "react";
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            404 Error. Page Not Found.
            <Link to="/">Back To Home Page</Link>
        </div>
    )
}

export default NotFound;