import React, { useState } from 'react';
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
//withRouter leidzia pasiektti uselocattion, use history, buvo naudojama pries huksus, wrappina turima componenta ir delto gali kilti ivairiu problemu bei uzkrauna nereikalingais propsais, kas nera labai gerai
import Button from "../components/Button";
import FailureMessage from '../components/FailureMessage';
import eye from "../images/eye.png";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            failureMessage: false,

            isLoading: false,
            items: []
        };

    }

    //username: tester, password: netflix

    getUsername = (event) => {
        this.setState({ username: event.target.value })
        console.log(event.target.value);
    }

    getPassword = (event) => {
        this.setState({ password: event.target.value })
        console.log(event.target.value);
    }
    //yra skirtumas ar tu cia apibrezi kaip metodus ( componentDidMount() ) ar kaip funkcijas. metodai atrodo turi savo atskira this,
    //todel ju atveju juos kazkaip reiktu bindint i konstruktoriu. arrow funkcija tuo tarpu neturi savo this, ji paveldi, todel
    //siuo atveju su ja paprasciau.
    login = async (e) => {
        e.preventDefault();
        console.log(this.props);
        // try {
        //     console.log(this.state);
        //     console.log(this.state.username, this.state.password);
        //     let response = await fetch(`https://academy-video-api.herokuapp.com/auth/login`, {
        //         method: "POST",
        //         body: JSON.stringify({ 
        // username: this.state.username, 
        // password: this.state.password }),
        //         headers: {'Content-Type': 'application/json'}
        //     })
        //     console.log(response);
        //     // const json = await response.json();

        //     if (!response.ok) {
        //         this.setState({ failureMessage: true })
        //         throw response.json;
        //     }
        //     const json = await response.json();

        //     console.log(json.token);
        //     //tokena isirasyti i localstoraga, ir nukreipti i kita url
        //     localStorage.setItem('token', json.token);
        //     this.props.history.replace('/private');

        // } catch (e) {
        //     console.log(e);
        // }

        //budas su then
        fetch(`https://academy-video-api.herokuapp.com/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res.json(),
                this.setState({ failureMessage: true });
            })
            .then(response => {
                localStorage.setItem("token", response.token);
                console.log(response);
                this.props.history.replace("/private");
            })
            .catch(console.log("catch error"));
    }




    render() {
        const failure = this.state.failureMessage === true ? "show" : "hide";
        return (
            <main>
                <div className="login__container">
                    <form onSubmit={this.login} className="login">
                        <label for="username">Username</label>
                        <input className="input" onChange={this.getUsername} id="username" type="text" /><br />
                        <label for="password">Username</label>
                        <input className="input" onChange={this.getPassword} id="password" type="password" />

                        <input className="submit" type="submit" value="Sign in" />
                    </form>
                    {/* <span className="failure__Message">Failure: please check the login details.</span> */}
                    {/* {message = this.state.failureMessage === true ? "show" : "hide"} */}
                    <FailureMessage message={failure} />
                </div>
            </main >
        )
    }
}



// export default Login;
export default withRouter(Login);