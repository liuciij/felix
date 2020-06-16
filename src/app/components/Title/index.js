import React from "react";
import "./index.css";

function Title({ children, level = "1", className, onclick }) {
    const classes = `Title ${className}`;
    const Tag = level > 6 || level < 1 ? "h1" : `h${level}`;

    return <Tag class="Title" className={classes}>{children}</Tag>;
}

export default Title;