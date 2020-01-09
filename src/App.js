import React from "react";
import DifferentDogsBreeds from "./components/differentDogsBreeds/DifferentDogsBreeds";
import FavouriteDogBreed from "./components/favouriteDogBreed/FavouriteDogBreed";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favourite: []
    };
  }
  savedPiture = picture => {
    const newPictures = [];
    newPictures.push(picture);
    this.setState(prevState => {
      return {
        favourite: newPictures.concat(prevState.favourite)
      };
    });
  };
  render() {
    return (
      <div className='App'>
        <DifferentDogsBreeds savedPiture={this.savedPiture} />
        <FavouriteDogBreed pictures={this.state.favourite} />
      </div>
    );
  }
}

export default App;
