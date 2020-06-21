import React, { useState, useCallback, useEffect } from 'react';
import '../index.scss';
import loadingImg from "../images/loading.gif";
import Button from "../components/Button";
import Movie from "../components/Movie";
import { connect } from "react-redux";



function Private({ favorites, changeButton, movies, setItems, token }) {
    // const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);



    const fetchMovies = useCallback(async () => {
        setLoading(true);

        try {
            let response = await fetch(`https://academy-video-api.herokuapp.com/content/items`, {
                method: "GET",
                headers: {
                    // authorization: localStorage.getItem("token") 
                    authorisation: token
                }
            })
            console.log(response);
            setItems(await response.json());
            // setitems(response);

        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }, [setItems, setLoading]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    // render() {
    // const { items } = this.state;

    return (
        <main>
            {loading ? <img className="loading__img" src={loadingImg} alt="loading" />
                : <div class="main__container">
                    <div class="movies__container">
                        {movies.map(item =>
                            <Movie
                                className="margin"
                                img={item.image}
                                title={item.title}
                                description={item.description}
                                // button={favorites.includes(item.id) ? "Remove💔" : "Favorite"}
                                onclick={() => changeButton(item.id)}
                                id={item.id}
                            // isFavorite={favorites.includes(item.id)}
                            />
                        )}
                    </div>
                </div>
            }
        </main>
    );
    // }
}


function mapStateToProps({ content: { movies }, authentication: { token } }) {
    return {
        movies: movies,
        token: token

    }
}

function mapDispatchToProps(dispatch) {
    return {
        setItems: movies => dispatch({ type: "FETCH_MOVIES", movies })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Private); //connect priima dvi funkcijas: pirma funkcija is store leis nuskaityt ir subscribint duomenis, antra skirta rasyti veiksmams kuriuos per peopsus pasieksim



// export default Private;

