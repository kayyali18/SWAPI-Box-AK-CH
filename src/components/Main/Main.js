import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer';

class Main extends Component {
  constructor() {
    super() 

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <CardContainer />
      </div>
      )
  }
}

export default Main;