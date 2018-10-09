import React, { Component } from 'react';
// import LandingPage from './LandingPage.LandingPage';
import "../../styles/App.css"
import fetch from 'node-fetch'

import Main from '../Main/Main';
import Landing from '../Landing/Landing';
import fetchData from '../../api';

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
    // const result = fetchData(this.baseURL)
    // console.log(result)
    const result = await this.fetchAllData()
    const data = await 
    this.setState({
      planets: result[0],
      people: result[1],
      vehicles: result[2],
      films: result[3]
    })
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

  fetchAllData = () => {
    const { categories } = this.state;
    const unresolvedPromises = categories.map(category => {
      return fetchData(category.category, category.page)
    })
    return Promise.all(unresolvedPromises)
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