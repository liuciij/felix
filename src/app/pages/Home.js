import React, { useState, useEffect, useCallback } from 'react';
import '../index.scss';
import logo from "../images/F.png";
import loadingImg from "../images/loading.gif";
import Button from "../components/Button";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
// import img from "./images/movie.png";
import Title from "../components/Title";
import Header from "../components/Header";



function Home({ favorites, changeButton }) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);





  const fetchMovies = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://academy-video-api.herokuapp.com/content/free-items`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
      if (response.ok) {
        setItems(await response.json());
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [setItems, setLoading]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);


  return (
    < div className="App" >
      {/* <Header text="Log in"></Header> */}
      < div className="background__img" >
        <Title>Wanna more Content?</Title>
        <Button size="Large">Get Access</Button>
      </div >
      <Separator />
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
                  // id={item.id}
                  isFavorite={favorites.includes(item.id)}
                />
              )}

            </div>

            <Button className="content__button" size="Large" style="230">Get More Content</Button>
          </div>
        }
      </main>
      {/* <Footer></Footer> */}
    </div >
  );
};


export default Home;
