import React, { useEffect, useCallback, useState } from "react";
import {useParams} from "react-router-dom";
 
import '../../app/index.scss';
import SingleMoviePage from "../components/SingleMoviePage";
import Movie from "../components/Movie";
import { connect } from "react-redux";

import content from "../../content";
import { bindActionCreators } from "redux";

function SingleMovie({ favorites, changeButton, movie, setItem, token }) {
    // const [item, setItem] = useState({});
    const { id } = useParams();

    const fetchMovie = useCallback(async () => {
        try {
            const response = await fetch(`https://academy-video-api.herokuapp.com/content/items/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // "authorization": localStorage.getItem("token")
                        authorization: token
                    }
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

    console.log(movie);
    return (
        <main className="black">
            <SingleMoviePage
                img={movie.image}
                title={movie.title}
                description={movie.description}
            // button={favorites.includes(movie.id) ? "Remove💔" : "Favorite"}
            // favoriteBtn={() => changeButton(movie.id)}
            // isFavorite={favorites.includes(movie.id)}
            />
        </main >
    )
}

function mapStateToProps({ content: { movie }, authentication: { token } }) {
    return {
        movie: movie,
        token: token

    }
}

function mapDispatchToProps(dispatch) {
    return {
        setItem: bindActionCreators(content.actions.getMovie, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie); //connect priima dvi funkcijas: pirma funkcija is store leis nuskaityt ir subscribint duomenis, antra skirta rasyti veiksmams kuriuos per peopsus pasieksim


// export default SingleMovie;