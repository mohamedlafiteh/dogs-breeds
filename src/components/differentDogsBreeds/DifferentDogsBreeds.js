import React, { Component } from "react";
import "./DifferentDogsBreeds.css";

export class DifferentDogsBreeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null
    };
  }

  componentDidMount() {
    this.requestDifferentBreeds();
  }
  requestDifferentBreeds = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          picture: data.message
        });
      });
  };
  SaveFavouritePicture = () => {
    this.props.savedPiture(this.state.picture);
  };
  render() {
    return (
      <div className='allDogs'>
        <h1 className='title'>Different Dogs Breeds</h1>
        <img className='picture' src={this.state.picture} alt='' />

        <p>
          <button className='btn' onClick={this.SaveFavouritePicture}>
            Save To Favourite
          </button>
          <button className='btn' onClick={this.requestDifferentBreeds}>
            Next Breed
          </button>
        </p>
      </div>
    );
  }
}

export default DifferentDogsBreeds;
