import React, { useState, useCallback, useEffect } from 'react';
import '../index.scss';
import loadingImg from "../images/loading.gif";
import Button from "../components/Button";
import Movie from "../components/Movie";



function Private({ favorites, changeButton }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchMovies = useCallback(async () => {
        setLoading(true);

        try {
            let response = await fetch(`https://academy-video-api.herokuapp.com/content/items`, {
                method: "GET",
                headers: { authorization: localStorage.getItem("token") }
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
                        {items.map(item =>
                            <Movie
                                className="margin"
                                img={item.image}
                                title={item.title}
                                description={item.description}
                                button={favorites.includes(item.id) ? "Remove💔" : "Favorite"}
                                onclick={() => changeButton(item.id)}
                                id={item.id}
                                isFavorite={favorites.includes(item.id)}
                            />
                        )}
                    </div>
                </div>
            }
        </main>
    );
    // }
}


export default Private;

