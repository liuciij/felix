import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./index.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Private from "./pages/Private";
import SingleMovie from "./pages/SingleMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";


function App() {

    // logout = () => {
    //     fetch("https://academy-video-api.herokuapp.com/auth/logout", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ token: localStorage.getItem("token") })
    //     }).then(res => {
    //         if (!res.ok) {
    //             throw res;
    //         }
    //         console.log(res);
    //         localStorage.clear();
    // this.props.history.replace("/")
    //     });
    // };




    const [favorites, setFavorites] = useState([]);
    const changeButton = id => {
        console.log(id);
        if (favorites.includes(id)) {
            console.log(id);
            setFavorites(favorites.filter(item => item != id)) //pasalina
        } else {
            setFavorites(favorites.concat(id)) //prideda 
            console.log(id);
        }
    }

    console.log(favorites);
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/home">
                    <Home favorites={favorites} changeButton={changeButton} />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                {/* <Route exact path="/private">
                    <Private />
                </Route> */}
                {/* privateroute componentas yra kaip papildoma logika, kad jei vartotojas bando prieit prie token reikalaujanciu puslapiu, nukreipiamas i login */}
                <PrivateRoute exact path="/private">
                    <Private favorites={favorites} changeButton={changeButton} />
                </PrivateRoute>
                <Route exact path="/:id">
                    <SingleMovie favorites={favorites} changeButton={changeButton} />
                </Route>
                {/*  su redirect'u jei vartotojas nueina ant betkokio neegzistuojancio psl, bus nukreiptas i home arba jei prisijunges i filmus visus  */}
                {/* <Redirect exact to={localStorage.getItem("token") ? "/private" : "/home"} /> */}


            </Switch>
            <Footer />
        </Router>
    );
}

export default App;