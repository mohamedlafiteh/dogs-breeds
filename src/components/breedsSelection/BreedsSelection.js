import React, { Component } from "react";
import "./BreedsSelection.css";

export class BreedsSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBreeds: [],
      img: [],
      breedName: ""
    };
  }
  fetchData = breedName => {
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          img: data.message,
          breedName: breedName
        });
      });
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        this.setState({
          allBreeds: Object.keys(data.message)
        });
      });
  }
  changeHandler = event => {
    this.fetchData(event.target.value);
  };
  render() {
    return (
      <div className='Breeds'>
        <h2 className='title'>Select Breed</h2>
        <p>
          <select onChange={this.changeHandler}>
            {this.state.allBreeds.map((dog, index) => (
              <option key={index}>{dog}</option>
            ))}
          </select>
        </p>

        <img
          className='image'
          onChange={this.changeHandler}
          alt=''
          src={this.state.img}
        />
      </div>
    );
  }
}

export default BreedsSelection;
