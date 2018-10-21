import React, { Component } from "react"
import PropType from "prop-types"

import * as API from "../../api"

class Card extends Component {
  constructor(props) {
    super(props)
    this.names = []
    this.state = {
      isFavourited: false,
      stateSet: false,
      residents: []
    }
  }
  
  whoLivesHere = () => {
    const { residents } = this.state
    if (residents.length == 0) return (<li>No known residents </li>)
    const names = residents.map(res => <li key={`${res}`}>{res}</li>)
    return (
      <ul>
        {names}
      </ul>
    )
  }

  planetsDisplay = () => {
    const { data, category } = this.props
    const joinedName = (data.main.name).split(' ').join('')

    return (
      <article
        className={`display-card ${joinedName}`}
        aria-label="Individual display of results">
        <div className='card-text hide'>
          <h3>{data.name}</h3>
            <p>Terrain: {data.terrain}</p>
            <p>Population: {data.population}</p>
            <p>Climate: {data.climate}</p>
          {this.whoLivesHere()}
        </div>
      </article> 
    )
  }

  peopleDisplay = () => {
    const { data, category } = this.props
    const joinedName = (data.main.name).split(' ').join('')

    return (
      <article
        className={`display-card ${joinedName}`}
        aria-label="Individual display of results">
        <div className='card-text hide'>
          <h2>{data.main.name}</h2>
          <p>Homeworld: {data.supp.homeworld}</p>
          <p>Species: {data.supp.species}</p>
          <p>Population: {data.supp.population}</p>
        </div>
      </article>
    )
  }

  render() {
    const { data, category } = this.props
    const joinedName = (data.main.name).split(' ').join('')

    if (category === "planets") {
      return this.planetsDisplay()

    } else if (category === "people") {
      return this.peopleDisplay();

    } else if (category === "vehicles") {
      return (
        <article
        className={`display-card ${joinedName}`}
          aria-label="Individual display of results"
        >
          <div className='card-text hide'>
            <h3>{data.name}</h3>
            <p>Model: {data.model}</p>
            <p>Class: {data.vehicle_class}</p>
            <p>Number of Passengers: {data.passengers}</p>
          </div>
        </article>
      )
    } else return <h1>Loading </h1>
  }
}

export default Card

Card.propType = {
  data: PropType.object
}
