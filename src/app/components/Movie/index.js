import React from "react";
import "./index.css";
import Button from "../Button";
import Title from "../Title";



function Movie({ img, title, name, className, description, button, onclick, isFavorite, id, goToMovie }) {

    // const makeSlug = (title) => {
    //     title
    //         .toLowerCase()
    //         .split(' ');
    //     const slugTitle = title.forEach(word => word + "-")
    // }




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
            <img class="Movie__img" src={`${img}`} />
            <div class="Movie__content">

                <div>
                    <Title level="3">{title}</Title>
                    <p>{shortDescription}</p>
                </div>
                <div>
                    <Button size="Small" id={id} onclick={onclick} state={isFavorite ? "favorite" : "regular"}>{button}</Button>
                </div>
            </div>
        </div >
    );
};

export default Movie;