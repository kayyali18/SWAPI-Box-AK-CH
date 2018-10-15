import React, { Component } from "react"
import "../../styles/App.css"

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
        { category: "planets", page: 1 },
        { category: "people", page: 1 },
        { category: "vehicles", page: 1 },
        { category: "films", page: 1 }
      ],
      cards: [],
      currCategory: ''
    }
  }

  async componentDidMount() {
    const { categories } = this.state
    const result = await API.fetchAllData(categories)
    this.setState({
      planets: result[0],
      people: result[1],
      vehicles: result[2],
      films: result[3]
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
        <Landing films={this.state.films} />
        <Main
          planets={this.state.planets}
          people={this.state.people}
          vehicles={this.state.vehicles}
          generateCards={this.generateCards}
          cards={this.state.cards}
          currCategory={this.state.currCategory}
        />
      </div>
    )
  }
}

export default App
