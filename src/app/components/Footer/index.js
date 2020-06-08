import React from "react";
import "./index.css";

import group from "../../images/Group.png";


function Footer() {
    return (
        <div class="Footer">
            <p class="Footer__text">We care about your entertainment. Copyright © 2019–2020 felix.com</p>
            <img src={group} alt="img" />
        </div >
    )
}

export default Footer;