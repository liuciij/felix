import React, { useState, useCallback } from 'react';
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
//withRouter leidzia pasiektti uselocattion, use history, buvo naudojama pries huksus, wrappina turima componenta ir delto gali kilti ivairiu problemu bei uzkrauna nereikalingais propsais, kas nera labai gerai
import Button from "../components/Button";
import FailureMessage from '../components/FailureMessage';
import eye from "../images/eye.png";


function Login({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [failureMessage, setfailureMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    //username: tester, password: netflix

    const getUsername = (event) => {
        setUsername(event.target.value)
        console.log(event.target.value);
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
        console.log(event.target.value);
    }


    //nereikia useeffect, nes viskas priklauso nuo vartotojo interakcijos siuo atveju kai paspaudzia mygtuka
    const login = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(`https://academy-video-api.herokuapp.com/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res.json(),
                setfailureMessage(true);
            })
            .then(response => {
                localStorage.setItem("token", response.token);
                console.log(response);
                history.replace("/private");
            })
            .catch(console.log("catch error"));
    }, [username, password, failureMessage, loading]);


    const failure = failureMessage === true ? "show" : "hide";
    return (
        <main>
            <div className="login__container">
                <form onSubmit={login} className="login">
                    <label for="username">Username</label>
                    <input className="input" onChange={getUsername} id="username" type="text" /><br />
                    <label for="password">Username</label>
                    <input className="input" onChange={getPassword} id="password" type="password" />

                    <input className="submit" type="submit" value="Sign in" />
                </form>
                {/* <span className="failure__Message">Failure: please check the login details.</span> */}
                {/* {message = this.state.failureMessage === true ? "show" : "hide"} */}
                <FailureMessage message={failure} />
            </div>
        </main >
    )
}



// export default Login;
export default withRouter(Login);