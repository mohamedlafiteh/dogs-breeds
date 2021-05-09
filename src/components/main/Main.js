import React from "react";
import DifferentDogsBreeds from "../differentDogsBreeds/DifferentDogsBreeds";
import FavouriteDogBreed from "../favouriteDogBreed/FavouriteDogBreed";
import BreedsSelection from "../breedsSelection/BreedsSelection";
import DogsVote from "../dogsVote/DogsVote";

import "./Main.css";

class Main extends React.Component {
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
        <DogsVote />
      </div>
    );
  }
}

export default Main;
