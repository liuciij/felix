import React from "react";

import "./index.css";
import { Link } from "react-router-dom";




function SimpleButton({ children, id, onclick, to }) {
    return (
        <Link to={to}>
            <button class="Simple__btn" onClick={onclick} to={to}> {children}</button >
        </Link>
    )
}

export default SimpleButton;