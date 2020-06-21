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

import store from "./state";
import provider, { Provider } from "react-redux"; //provider yra komponentas kuriam paduodam store, tokiu budu store pasidaro prieinama visoj aplikacijoj. Tie komponentai kurie bus aprepti provider bus prieinama(ziureti zemiau)


function App() {


    // const [favorites, setFavorites] = useState([]);
    // const changeButton = id => {
    //     console.log(id);
    //     if (favorites.includes(id)) {
    //         console.log(id);
    //         setFavorites(favorites.filter(item => item != id)) //pasalina
    //     } else {
    //         setFavorites(favorites.concat(id)) //prideda 
    //         console.log(id);
    //     }
    // }


    return (
        //paduodam store propsa provaideriui
        <Provider store={store}>
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
                        {/* <Private favorites={favorites} changeButton={changeButton} /> */}
                        <Private />
                    </PrivateRoute>
                    <Route exact path="/:id">
                        <SingleMovie />
                    </Route>
                    {/*  su redirect'u jei vartotojas nueina ant betkokio neegzistuojancio psl, bus nukreiptas i home arba jei prisijunges i filmus visus  */}
                    {/* <Redirect exact to={localStorage.getItem("token") ? "/private" : "/home"} /> */}


                </Switch>
                <Footer />
            </Router>
        </Provider >
    );
}

export default App;