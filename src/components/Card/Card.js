import React, { Component } from "react"
import PropType from "prop-types"

import * as API from "../../api"

class Card extends Component {
  constructor(props) {
    super(props)
    this.names = []
    // this.setNames = this.fetchCall()
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

    return (
        // Residents
        // A button to “Favorite” the planet
      <article
        className="display-card"
        aria-label="Individual display of results"
      >
        <div className="card-content">
          <h3>{data.name}</h3>
          <p>Terrain: {data.terrain}</p>
          <p>Population: {data.population}</p>
          <p>Climate: {data.climate}</p>
          {this.whoLivesHere()}
        </div>
        <div className="card-image" />
      </article> 
    )
  }

  peopleDisplay = () => {
    const { data, category } = this.props

    return (
  // Homeworld
  // Species
  // Population of Homeworld
  // A button to “Favorite” the person
      <article
        className="display-card"
        aria-label="Individual display of results"
      >
        <div className="card-content">
          <h3>{data.main.name}</h3>
          <ul>
            <li>Homeworld: {data.supp.homeworld}</li>
            <li>Species: {data.supp.species}</li>
            <li>Population: {data.supp.population}</li>
          </ul>
        </div>
        <div className="card-image" />
      </article>
    )
  }


  render() {
    const { data, category } = this.props
    if (category === "planets") {
      return this.planetsDisplay()

    } else if (category === "people") {
      return this.peopleDisplay();

    } else if (category === "vehicles") {
      return (
        // Name
        // Model
        // Class
        // Number of Passengers
        // A button to “Favorite” the vehicle
        <article
          className="display-card"
          aria-label="Individual display of results"
        >
          <div className="card-content">
            <h3>{data.name}</h3>
            <p>Model: {data.model}</p>
            <p>Class: {data.vehicle_class}</p>
            <p>Number of Passengers: {data.passengers}</p>
          </div>
          <div className="card-image" />
        </article>
      )
    } else return <h1>Loading </h1>
  }
}

export default Card

Card.propType = {
  data: PropType.object
}
