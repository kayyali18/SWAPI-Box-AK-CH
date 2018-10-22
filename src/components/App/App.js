import React, { Component } from "react"
import "../../styles/App.css"
import { Route } from 'react-router-dom'

import Main from "../Main/Main"
import Landing from "../Landing/Landing"
import * as API from "../../api"

class App extends Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      people: [],
      vehicles: [],
      favourites: [],
      films: null,
      cards: [],
      currCategory: 'films',
      mounted: false
    }
    // let categories = ['planets', 'people', 'vehicles', favourites]
  }

  async componentDidMount() {
    const { currCategory } = this.state
    
    if (!this.state.mounted) {
      const favourites = API.getFavs()//although not async, method put here cuz if process is slow await below will allow time for it
      const films = await API.fetchData(currCategory)
      await this.setState({
        films,
        favourites,
        mounted: true
      })
    }
  }


  generateCards = async query => {
    const favourites = API.getFavs()//this is placed here for same reason
    const result = await API.fetchData(query)
    this.setState({ cards: result, currCategory:query, favourites })
  };

  favCard = (card) => {
    const { favourites, currCategory } = this.state
    let newCard = {...card, currCategory}
    API.updateFav([...favourites, newCard])
    this.setState({favourites: [...favourites, newCard]})
    
  }

  unFavCard = (card) => {
    const { favourites } = this.state
    let newFav = favourites.filter(entry => entry.key !== card.key) //possible error
    API.updateFav(newFav)
    this.setState({favourites: newFav})

  }

  render() {
    if (!this.state.films) return null
    return (
      <div className="l-app">
        <Route exact path='/' render={() => <Landing films={this.state.films}/> } />
        
        <Route path='/main' render={() => (
          <Main
            favCard={this.favCard}
            unFavCard={this.unFavCard}
            generateCards={this.generateCards}
            cards={this.state.cards}
            currCategory={this.state.currCategory}
          />

        )} />
      </div>
    )
  }
}

export default App
