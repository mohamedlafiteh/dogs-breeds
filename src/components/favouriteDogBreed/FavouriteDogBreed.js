import React, { Component } from "react";
import "./FavouriteDogBreed.css";

export class FavouriteDogBreed extends Component {
  render() {
    return (
      <div className='favourite'>
        <div className='saved'>
          <h2 className='title'>Favourite Dog Breed</h2>
          <div className='photos'>
            {this.props.pictures.map(pic => {
              return <img alt='' src={pic} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FavouriteDogBreed;
