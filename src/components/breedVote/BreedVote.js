import React, { Component } from "react";
import "./BreedVote.css";

export class BreedVote extends Component {
  constructor() {
    super();
    this.state = {
      img: null,
      vote: 0,
      pictureVote: null,
      show:true,
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
      if(this.state.vote >=1) {
          return {
                  err: "You can only give one vote.",
                  show: setTimeout(() => {
                  this.setState({ show:false})
                  }, 2000)
                    };
           }else {
                return {
                vote: this.state.vote + 1
              };
      }
      
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
        <h3>{this.state.show ? this.state.err:""}</h3>
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
