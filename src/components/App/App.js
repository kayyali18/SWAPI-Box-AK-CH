import React, { Component } from 'react';
// import LandingPage from './LandingPage.LandingPage';
import "../../styles/App.css"
import fetch from 'node-fetch'

import Main from '../Main/Main';
import Landing from '../Landing/Landing';

class App extends Component {
  constructor() {
    super() 
    this.baseURL = `https://swapi.co/api/`
    this.state = {
      films: []
    }
  }

  componentDidMount () {
    // this.getSWAPI(this.baseURL)
  }

  getSWAPI = async baseURL => {
    try {
      const response = await fetch(`${baseURL}films/`)
      const filmData = await response.json()
      console.log (filmData)
    }
    catch (error) {
      console.log (error)
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