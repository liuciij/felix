import React from "react";
import "./index.css";

function Button({ children, size, style, className, id, onclick, state }) {
    let buttonState = state === "favorite" ? "checked" : "removed";
    const classes = `Button ${size} ${className} ${buttonState}`;

    return <button className={classes} id={id} onClick={onclick}> {children}</button >
}

export default Button;