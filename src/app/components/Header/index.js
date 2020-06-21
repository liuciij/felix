import React from "react";
import "./index.css";

import Button from "../Button";
import logo from "../../images/F.png";
import { Switch, Route } from "react-router-dom";
import SimpleButton from "../SimpleButton";
import { Link, useHistory } from "react-router-dom";

import { connect } from "react-redux";




function Header({ }) {
    const history = useHistory();

    const logout = () => {

        fetch("https://academy-video-api.herokuapp.com/auth/logout", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: localStorage.getItem("token") })
            // body: JSON.stringify({ token: token })
        }).then(res => {
            if (!res.ok) {
                throw res;
            }
            console.log(res);
            localStorage.clear();
            history.replace("/home")
        });
    };
    return (
        <header>
            <img class="Header__img" src={logo} alt="logo"></img>
            <Switch>
                <Route exact path="/Home">
                    {/* <Button to="/login" size="Large">Sign In</Button> */}
                    <SimpleButton to="/login" >Log In</SimpleButton>
                </Route>
                <Route exact path="/login">
                    {/* <Button to="/login" size="Large">Sign In</Button> */}
                    <SimpleButton to="/login" >Log In</SimpleButton>
                </Route>
                <Route exact path="/private">
                    {/* <Button to="/home" size="Large">Log Out</Button> */}
                    <SimpleButton to="/home" onclick={logout}>Log Out</SimpleButton>
                </Route>
            </Switch>
        </header >
    )
}


// function mapStateToProps({ token }) {
//     return {
//         token: token
//     }
// }

export default (Header)
// export default connect(mapStateToProps)(Header);

