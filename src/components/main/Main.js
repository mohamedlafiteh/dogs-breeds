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
      favourite: [],
      err:"",
      show:true
    };
  }
  savedPiture = (picture )=> {
    const newPictures = [];
          newPictures.push(picture);

    this.setState(prevState => {
        if(prevState.favourite.includes(picture)){
              return {
                  err: "The dog is already added.",
                  show: setTimeout(() => {
                  this.setState({ show:false})
                  }, 2000)
                    };
 
            }else {
                return {
                      favourite: newPictures.concat(prevState.favourite),
                    };
            }
          });
        };
  render() {
    return (
      <div className='App'>
        <DifferentDogsBreeds savedPiture={this.savedPiture} err={this.state.err}  show={this.state.show}/>
        <FavouriteDogBreed pictures={this.state.favourite} />
        <BreedsSelection />
        <DogsVote />
      </div>
    );
  }
}

export default Main;
