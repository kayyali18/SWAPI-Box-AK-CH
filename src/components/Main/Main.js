import React, { Component } from "react"
import PropTypes from "prop-types"
import { Route, NavLink } from 'react-router-dom'

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

  render() {
    const {generateCards, cards, currCategory} = this.props
    return (
      <main className="l-main">
        <Route path='/main' render={() => 
          (
            <NavBar generateCards={generateCards} />
            )
        } />
        
        <Route path={`/main/${currCategory}`} render={() => {
          return (<CardContainer
            cards={cards}
            category={currCategory}
          />)
        }} />
      </main>
    )
  }
}

export default Main

Main.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  generateCards: PropTypes.func,
  cards: PropTypes.array,
  currCategory: PropTypes.string
}
