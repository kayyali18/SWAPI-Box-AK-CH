import React, { Component } from "react"
import PropType from "prop-types"

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFavourited: false
    }
  }

  render() {
    let card
    const { data, category } = this.props

    if (category === "planets") {
      return (
        // Name
        // Terrain
        // Population
        // Climate
        // Residents
        // A button to “Favorite” the planet
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
    } else if (category === "people") {
      return (
        // Name
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
