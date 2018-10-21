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
      cards: [],
      currCategory: 'films'
    }
  }

  async componentDidMount() {
    const result = await API.fetchData('films')
    this.setState({
      films: result
    })
  }

  async componentDidUpdate () {
    const { currCategory } = this.state
    const result = await API.fetchData(currCategory)
    this.setState({
      [currCategory]: result,
      cards: result
    })
  }

  generateCards = query => {
    const cards = this.state[query]
    this.setState({ cards, currCategory:query })
  };

  render() {
    if (!this.state.films) return null
    return (
      <div className="l-app">
        <Route exact path='/' render={() => <Landing films={this.state.films}/> } />
        
        <Route path='/main' render={() => (
          <Main
          peopleSupp={this.state.peopleSupp}
          planetSupp={this.state.planetSupp}
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
