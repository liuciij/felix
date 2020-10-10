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

import { connect } from "react-redux";
import SimpleButton from "../components/SimpleButton";
import { useHistory } from "react-router-dom";

import content from "../../content";
import { bindActionCreators } from "redux";




function Home({ favorites, changeButton, movies, setItems }) {

  //const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  let history = useHistory();




  const fetchMovies = useCallback(async () => {

    setLoading(true);

    try {
      const response = await fetch(`https://academy-video-api.herokuapp.com/content/free-items`
        // {
        //   method: "GET",
        //   headers: { "Content-Type": "application/json" }
        //}
      )
      if (response.ok) {
        setItems(await response.json());
      } else {
        console.log(response)
      }
    } catch (e) {
      console.log(e);
    }
    console.log('veikia')
    setLoading(false);
  }, [setItems, setLoading]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  console.log(movies, "movies");


  return (
    < div className="App" >
      {/* <Header text="Log in"></Header> */}
      < div className="background__img" >
        <Title>Wanna more Content?</Title>
        {/* <Button size="Large">Get Access</Button> */}
        <SimpleButton to={"/Login"}>Get access</SimpleButton>
      </div >
      <Separator />
      <main>
        {loading ? <img className="loading__img" src={loadingImg} alt="loading" /> :
          <div class="main__container">
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
                //jei id sito neparasai tai neranda id kai paspaudi ant filmo 
                // isFavorite={favorites.includes(item.id)}
                />
              )}

            </div>
            <SimpleButton to={"/Login"}>Get access</SimpleButton>
            {/* <Button className="content__button" size="Large" style="230">Get More Content</Button> */}
          </div>
        }
      </main>
      {/* <Footer></Footer> */}
    </div >
  );
};

//su detruction issitraukiam ka reikia is store ir grazinam butinai objketa, kuris yra ant home uzkraunamas kaip propsai
//pirmas movies yra tai ka mes rasom virsuj propsuose home funkcijoj, labai daznai tai sutampa su state kas yra, bet gali skirtis
function mapStateToProps({ content: { movies } }) {
  return {
    movies: movies,
  }
}

//visada dispatch
//kai isdispatchinam action, jis nukeliauja i reducerius, kur atliekam kazkokius veiksmus, sukuriam nauja state, tada tuose komponentuose kurie subscrinina ta state yra iskvieciama mapsstatetoprops funkcija kur propsai persimapina ir jei jie pakito, ivyksta rerenderis
function mapDispatchToProps(dispatch) {
  return {
    setItems: bindActionCreators(content.actions.fetchMovies, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home); //connect priima dvi funkcijas: pirma funkcija is store leis nuskaityt ir subscribint duomenis, antra skirta rasyti veiksmams kuriuos per peopsus pasieksim
