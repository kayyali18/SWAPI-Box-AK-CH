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

  componentDidMount () {
    const { residents, homeworld, species } = this.props.data
    if (residents) this.getPlanets (residents)
    else if (homeworld) this.getPeople (homeworld, species)
  }
  
  getPlanets = async (residents) => {
    const response = await API.fetchSupp(residents)
    this.setState({residents: response.map(x => x.name)})
  }

  getPeople = async (homeworld, species) => {
    const params = [homeworld, species]
    const data = await API.fetchSupp(params)
    await this.setState({
      person: {planet: data[0], species: data[1]}
    })
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


  render() {
    const { data, category } = this.props
    if (this.names.length < 1 && !data) return null
    if (category === "planets") {
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
    } else if (category === "people") {
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
            <h3>{data.name}</h3>
          </div>
          <div className="card-image" />
        </article>
      )
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
    }
  }
}

export default Card

Card.propType = {
  data: PropType.object
}
