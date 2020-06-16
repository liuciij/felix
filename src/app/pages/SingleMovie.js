import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import '../../app/index.scss';
import SingleMoviePage from "../components/SingleMoviePage";
import Movie from "../components/Movie";

function SingleMovie({ favorites, changeButton }) {
    const [item, setItem] = useState({});
    const { id } = useParams();

    const fetchMovie = useCallback(async () => {
        try {
            const response = await fetch(`https://academy-video-api.herokuapp.com/content/items/${id}`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                })
            if (response.ok) {
                setItem(await response.json());
            }
        } catch (e) {
            console.log(e);
        }
    }, [setItem]);

    useEffect(() => {
        fetchMovie();
    }, [fetchMovie]);

    return (
        <main className="black">
            <SingleMoviePage
                img={item.image}
                title={item.title}
                description={item.description}
                button={favorites.includes(item.id) ? "Remove💔" : "Favorite"}
                favoriteBtn={() => changeButton(item.id)}
                isFavorite={favorites.includes(item.id)}
            />
        </main >
    )
}

export default SingleMovie;