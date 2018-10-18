import React, { Component } from "react"
import PropTypes from "prop-types"
import { Route, NavLink } from 'react-router-dom'

import NavBar from "../NavBar/NavBar"
import CardContainer from "../CardContainer/CardContainer"
import Card from "../Card/Card"
import * as API from './../../api'


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

  // async getPlanets (residents) {
  //   const response = await API.fetchSupp(residents)
  //   await this.setState({residents: response.map(x => x.name), stateSet: true}, console.log(response))
  // }

  // async getPeople (homeworld, species) => {
  //   const params = [homeworld, species]
  //   const data = await API.fetchSupp(params)
  //   await this.setState({
  //     person: {planet: data[0], species: data[1]},
  //     stateSet: true
  //   })
  // }

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
