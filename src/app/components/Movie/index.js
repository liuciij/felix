import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Button from "../Button";
import Title from "../Title";




function Movie({ img, title, name, className, description, button, onclick, isFavorite, id }) {






    const classes = `Movie ${className}`;

    let fullDescription = description.split(' ');
    let shortDescription = "";

    for (let i = 0; i < fullDescription.length; i++) {
        shortDescription += fullDescription[i] + " ";
        if (i === 10) {
            shortDescription += "..."
            break;
        }
    }


    return (
        <div className={classes}>
            <Link class="Link" to={`/${id}`}>
                <img class="Movie__img" src={`${img}`} />
            </Link>
            <div class="Movie__content">

                <Link class="Link" to={`/${id}`}>
                    <Title level="3">{title}</Title>
                    <p>{shortDescription}</p>
                </Link>
                <div>
                    <Button size="Small" id={id} onclick={onclick} state={isFavorite ? "favorite" : "regular"}>{button}</Button>
                </div>
            </div>
        </div >
    );
};



export default Movie;