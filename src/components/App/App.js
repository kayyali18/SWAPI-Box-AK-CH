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
      films: null
    }
  }

  componentDidMount () {
    this.getSWAPI(this.baseURL)
  }

  getSWAPI = async baseURL => {
    try {
      const response = await fetch(`${baseURL}films/`)
      const filmData = await response.json()
      console.log (filmData)
      this.setState({
        films: filmData.results
      })
    }
    catch (error) {
      console.log (error)
    }
  }

  render() {
    if (!this.state.films) return null
    return (
      <div className='l-app'>
        <Landing films={this.state.films}/>
        <Main />
      </div>
      )
  }
}

export default App;