import React, { useState } from 'react';
import '../index.scss';
import Button from "../components/Button";
import Movie from "../components/Movie";



class Private extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            button: "Favorite",
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
            let response = await fetch(`https://academy-video-api.herokuapp.com/content/items`, {
                method: "GET",
                headers: { authorization: localStorage.getItem("token") }
            })
            console.log(response);
            response = await response.json();
            this.setState(
                {
                    items: response,
                },
            );

        } catch (e) {
            console.log(e);
        }
    }


    render() {
        const { items } = this.state;

        return (
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

                    {/* <Button className="content__button" size="Large" style="230">Get More Content</Button> */}
                </div>
            </main>
        );
    }
}


export default Private;

