import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Button({ children, className, id, onclick, state, to, favorites, toggleFavorites }) {
    let buttonState = state === "favorite" ? "checked" : "removed";
    const classes = `Button ${className} ${buttonState}`;

    // const Tag = to ? Link : href ? "a" : "button";

    const changeButton = () => toggleFavorites(id);
    return <button className={classes} id={id} onClick={() => changeButton(id)} to={to}>{favorites.includes(id) ? "Remove💔" : "Favorite"}</button >
}

function mapStateToProps({ content: { favorites } }) {
    console.log(favorites);
    return {
        favorites: favorites,
    }
}

function mapDispatchToProps(dispatch) {
    //console.log(favorites);
    return {
        toggleFavorites: id => dispatch({ type: "TOGGLE_FAVORITE", id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);