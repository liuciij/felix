import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import content from "../../../content";



function Button({ children, className, id, onclick, state, to, isFavorite, toggleFavorites }) {
    let buttonState = state === "favorite" ? "checked" : "removed";
    const classes = `Button ${className} ${buttonState}`;

    // const Tag = to ? Link : href ? "a" : "button";

    const changeButton = () => toggleFavorites(id);
    return <button className={classes} id={id} onClick={() => changeButton(id)} to={to}>{isFavorite ? "Remove💔" : "Favorite"}</button >
}

// function mapStateToProps({ content: { favorites } }) {
//     console.log(favorites);
//     return {
//         favorites: favorites,
//     }
// }
function mapStateToProps(state, { id }) {
    return {
        isFavorite: content.selectors.isFavoriteById(state, id),
    }
}

function mapDispatchToProps(dispatch) {
    //console.log(favorites);
    return {
        // toggleFavorites: id => dispatch({ type: content.types.TOGGLE_FAVORITE, id })
        toggleFavorites: bindActionCreators(content.actions.toggleFavorites, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);