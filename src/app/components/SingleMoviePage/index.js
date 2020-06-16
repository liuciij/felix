import React from "react";
import "./index.css";
import Button from "../Button";
import Title from "../Title";

function SingleMoviePage({ img, title, description, watchBtn, favoriteBtn, button, id, isFavorite }) {


    // const classes = `Movie ${className}`;




    return (

        <div class="Single__holder">
            <img class="Single__movie" src={`${img}`} />
            <div>
                <div class="Single__content">
                    <Title level="2">{title}</Title>
                    <p class="Single__p">{description}</p>
                    <div>
                        <Button className="Button__img" size="Large" id={id} onclick={watchBtn}>Watch</Button>
                        <Button size="Large" id={id} onclick={favoriteBtn} state={isFavorite ? "favorite" : "regular"}>{button}</Button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SingleMoviePage;