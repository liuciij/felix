import React, { useState } from 'react';
import '../index.scss';
import logo from "../images/F.png";
import Button from "../components/Button";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
// import img from "./images/movie.png";
import Title from "../components/Title";
import Header from "../components/Header";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // button: "Favorite",
      favorites: [],
    };
  }

  changeButton = id => {
    let { favorites } = this.state;
    console.log(id);
    if (favorites.includes(id)) {
      console.log(id);
      this.setState({ favorites: favorites.filter(item => item != id) }) //pasalina
    } else {
      this.setState({ favorites: favorites.concat(id) }) //prideda 
      console.log(id);
    }
  }



  async componentDidMount() {

    try {
      let items = await fetch(`https://academy-video-api.herokuapp.com/content/free-items`)
      items = await items.json();
      console.log(items);
      //console.log(await items.json());
      //displayItems(items);
      this.setState(
        {
          items: items,
        },
      );
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const { items } = this.state;

    return (
      <div className="App" >
        {/* <div class="container"> */}
        {/* <Header text="Log in"></Header> */}
        <div className="background__img">
          <Title>Wanna more Content?</Title>
          <Button size="Large">Get Access</Button>
          {/* </div> */}
        </div>
        <Separator />
        <main>
          <div class="main__container">
            <div class="movies__container">
              {items.map(item =>
                <Movie
                  className="margin"
                  img={item.image}
                  title={item.title}
                  description={item.description}
                  button={this.state.favorites.includes(item.id) ? "Remove💔" : "Favorite"}
                  onclick={() => this.changeButton(item.id)}
                  // id={item.id}
                  isFavorite={this.state.favorites.includes(item.id)}
                />
              )}

            </div>

            <Button className="content__button" size="Large" style="230">Get More Content</Button>
          </div>
        </main>
        {/* <Footer></Footer> */}
      </div >
    );
  }
}


export default Home;
