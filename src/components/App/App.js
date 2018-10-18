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
      films: null,
      categories: [
        { category: "planets" },
        { category: "people" },
        { category: "vehicles" },
        { category: "films" }
      ],
      cards: [],
      currCategory: ''
    }
  }

  async componentDidMount() {
    const { categories } = this.state
    const result = await API.fetchData('films')
    this.setState({
      // planets: result[0],
      // people: result,
      // vehicles: result[2],
      films: result
    })
  }

  generateCards = query => {
    const cards = this.state[query].results
    this.setState({ cards, currCategory:query })
  };

  render() {
    if (!this.state.films) return null
    return (
      <div className="l-app">
        <Route exact path='/' render={() => <Landing films={this.state.films}/> } />
        
        <Route path='/main' render={() => (
          <Main
          planets={this.state.planets}
          people={this.state.people}
          vehicles={this.state.vehicles}
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
