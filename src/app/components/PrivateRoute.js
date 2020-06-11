import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {

    const token = window.localStorage.getItem("token"); //veiktu ir be window bet senesnese narsyklese ne, todel reik jo

    if (token) {
        console.log("yra tokenas");
        return <Route {...props} />;
    }

    console.log("redirektas");
    return <Redirect to="/login" />;
}

export default PrivateRoute;