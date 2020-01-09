import React, { Component } from "react";
import "./BreedVote.css";

export class BreedVote extends Component {
  constructor() {
    super();
    this.state = {
      img: null,
      vote: 0,
      pictureVote: null
    };
  }
  getPicture() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        this.setState({
          img: data.message
        });
      });
  }
  componentDidMount() {
    this.getPicture();
  }
  increment = () => {
    this.setState(current => {
      return {
        vote: current.vote + 1
      };
    });
  };

  differentBreeds = () => {
    this.getPicture();
    this.setState({
      vote: 0
    });
  };
  render() {
    return (
      <div className='Dog'>
        <img alt='' className='image' src={this.state.img} />
        <p className='vote'>
          Votes: {this.state.vote}
          <button className='btn' onClick={this.increment}>
            Best Dog
          </button>
          <button className='btn' onClick={this.differentBreeds}>
            Vote For Next Dog
          </button>
        </p>
      </div>
    );
  }
}

export default BreedVote;
