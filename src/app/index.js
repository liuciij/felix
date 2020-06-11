import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./index.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                {/* <Route exact path="/private">
                    <Private />
                </Route> */}
                {/* privateroute componentas yra kaip papildoma logika, kad jei vartotojas bando prieit prie token reikalaujanciu puslapiu, nukreipiamas i login */}
                <PrivateRoute exact path="/private">
                    <Private />
                </PrivateRoute>
                {/*  su redirect'u jei vartotojas nueina ant betkokio neegzistuojancio psl, bus nukreiptas i home arba jei prisijunges i filmus visus  */}
                <Redirect exact to={localStorage.getItem("token") ? "/private" : "/home"} />


            </Switch>
            <Footer />
        </Router>
    );
}

export default App;