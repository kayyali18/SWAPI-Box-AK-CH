import React, { Component } from "react"
import PropType from "prop-types"

import * as API from "../../api"

class Card extends Component {
  constructor(props) {
    super(props)
    this.names = []
    this.setNames = this.fetchCall()
    this.state = {
      isFavourited: false,
      stateSet: false
    }
  }

  componentDidMount () {
   
    this.setState({stateSet: true})
  }

  fetchCall = () => {
    const { residents } = this.props.data
    residents.forEach(resident => {
      API.fetchByURL(resident)
        .then(response => this.names.push(response.name))
    })
  }
  
  whoLivesHere = () => {
    // const { residents } = this.state
    if (this.names.length == 0) return (<li>No known residents </li>)
    console.log (this.names.length)
    return (
      <ul>
        {/* {list} */}
        hi
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
