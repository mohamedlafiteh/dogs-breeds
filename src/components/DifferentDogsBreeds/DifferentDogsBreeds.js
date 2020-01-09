import React, { Component } from "react";
import "./DifferentDogsBreeds.css";

export class DifferentDogsBreeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: null
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
          pictures: data.message
        });
      });
  };
  render() {
    return (
      <div className='allDogs'>
        <h1 className='title'>Different Dogs Breeds</h1>
        <img className='picture' src={this.state.pictures} alt='' />
      </div>
    );
  }
}

export default DifferentDogsBreeds;
