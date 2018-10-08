import React, { Component } from 'react';
// import LandingPage from './LandingPage.LandingPage';
import Main from '../Main/Main';
import Landing from '../Landing/Landing';

class App extends Component {
  constructor() {
    super() 

    this.state = {

    }
  }

  render() {
    return (
      <div className='l-app'>
        <Landing />
        <Main />
      </div>
      )
  }
}

export default App;