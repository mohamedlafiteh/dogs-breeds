import React from "react";
import DifferentDogsBreeds from "./components/differentDogsBreeds/DifferentDogsBreeds";
import FavouriteDogBreed from "./components/favouriteDogBreed/FavouriteDogBreed";
import BreedsSelection from "./components/breedsSelection/BreedsSelection";

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
        <BreedsSelection />
      </div>
    );
  }
}

export default App;
