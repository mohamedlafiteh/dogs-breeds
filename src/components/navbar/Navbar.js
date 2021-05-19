import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <header className='header'>
        <h1>Dogs Breeds</h1>
        <Link className='link' to='/'>
          Home
        </Link>{" "}
        |{" "}
        <Link className='link' to='/about'>
          About
        </Link>
      </header>
    );
  }
}

export default Navbar;
