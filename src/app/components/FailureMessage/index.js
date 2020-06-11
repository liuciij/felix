
import React from "react";
import "./index.css";


function FailureMessage({ message, className }) {
    const classes = `${message} Failure__message`;

    return (
        <React.Fragment>
            <p className={classes}>Failure: please check the login details.</p>
        </React.Fragment>
    )
}

export default FailureMessage;