import React from "react";
import "./index.css";

import Button from "../Button";
import logo from "../../images/F.png";
import { Switch, Route } from "react-router-dom";




function Header({ }) {
    return (
        <header>
            <img class="Header__img" src={logo} alt="logo"></img>
            <Switch>
                <Route exact path="/home">
                    <Button to="/login" size="Large">Sign In</Button>
                </Route>
                <Route exact path="/login">
                    <Button to="/login" size="Large">Sign In</Button>
                </Route>
                <Route exact path="/private">
                    <Button to="/home" size="Large">Log Out</Button>
                </Route>
            </Switch>
        </header >
    )
}

export default Header;

