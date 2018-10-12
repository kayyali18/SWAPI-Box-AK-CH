import React, { Component } from "react"
import PropTypes from "prop-types"

import NavBar from "../NavBar/NavBar"
import CardContainer from "../CardContainer/CardContainer"

class Main extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <main className="l-main">
        <NavBar />
        <CardContainer
          planets={this.props.planets}
          people={this.props.people}
          vehicles={this.props.vehicles}
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
