import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Button({ children, size, className, id, onclick, state, to, href }) {
    let buttonState = state === "favorite" ? "checked" : "removed";
    const classes = `Button ${size} ${className} ${buttonState}`;

    const Tag = to ? Link : href ? "a" : "button";

    return <Tag className={classes} id={id} onClick={onclick} to={to}> {children}</Tag >
}

export default Button;