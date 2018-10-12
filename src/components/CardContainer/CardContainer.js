import React, { Component } from "react"
import PropTypes from 'prop-types'

import Card from "../Card/Card"

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: null,
      people: null,
      vehicles: null,
      category: 'people'
    }
  }

  componentDidMount() {
    const { people, planets, vehicles } = this.props
    this.setState({
      planets,
      people,
      vehicles
    })
  }

  generateCards = (query) => {
    const category = this.state[query]
    let cards = category.results.map((result, index) => {
      return (
        <Card data={category.results[index]} key={category.results[index].created} />
      )
    })
    return cards
  }

  render() {
    if (!this.state.planets) return null
    return (
      <section className="l-card-container card-container">
        {this.generateCards(this.state.category)}
      </section>
    )
  }
}

export default CardContainer
CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object
}