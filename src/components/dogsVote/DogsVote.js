import React, { Component } from "react";
import BreedVote from "../breedVote/BreedVote";
import "./DogsVote.css";

export class DogsVote extends Component {
  render() {
    return (
      <div className='dog'>
        <h2 className='title'>Choose the best dog</h2>
        <div className='images'>
          <BreedVote image='http://via.placeholder.com/300x300' />
          <BreedVote image='http://via.placeholder.com/300x300' />
        </div>
      </div>
    );
  }
}

export default DogsVote;
