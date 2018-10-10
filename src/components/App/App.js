import React, { Component } from 'react';
import "../../styles/App.css"
import fetch from 'node-fetch'

import Main from '../Main/Main';
import Landing from '../Landing/Landing';
import * as API from '../../api';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      films: null,
      categories: [
        {category: 'planets', page: 1}, 
        {category: 'people', page: 1}, 
        {category: 'vehicles', page: 1}, 
        {category: 'films', page: 1} 
      ]
    }
  }

  async componentDidMount () {
    const { categories } = this.state;
    const result = await API.fetchAllData(categories)
    this.setState({
      planets: result[0],
      people: result[1],
      vehicles: result[2],
      films: result[3]
    })
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