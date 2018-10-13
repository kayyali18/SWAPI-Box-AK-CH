import React, { Component } from "react"
import PropTypes from "prop-types"

import NavBar from "../NavBar/NavBar"
import CardContainer from "../CardContainer/CardContainer"
import Card from "../Card/Card"


class Main extends Component {
  constructor() {
    super()

    this.state = {
      planets: null,
      people: null,
      vehicles: null,
      category: null,
      cards: null
    }
  }

  componentDidMount = () => {
    const { people, planets, vehicles } = this.props
    this.setState({
      planets,
      people,
      vehicles
    })
  }

  generateCards = query => {
    const cards = this.state[query].results
    const category = query;
    this.setState({ cards, category })
  };

  render() {
    return (
      <main className="l-main">
        <NavBar generateCards={this.generateCards}/>
        <CardContainer
          cards={this.state.cards}
          category={this.state.category}
        />
      </main>
    )
  }
}

export default Main

Main.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object
}
