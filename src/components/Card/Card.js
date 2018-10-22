import React, { Component } from "react"
import PropType from "prop-types"


class Card extends Component {
  constructor(props) {
    super(props)
    this.names = []
    this.state = {
      isFav: false,
      stateSet: false,
      residents: []
    }
  }


  handleFav = (data) => {
    const {isFav} = this.state
    const {favCard, unFavCard} = this.props
    if (isFav) unFavCard(data)
    else favCard(data)
    this.setState({isFav: !isFav})
  }
  
  whoLivesHere = () => {
    const { data } = this.props
    if (data.supp.length == 0) return (<li>No known residents </li>)
    const names = data.supp.map(res => <li className='resident' key={`${res}`}>{res}</li>)
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
        aria-label="Individual display of results"
        value={this.state.isFav}
        onClick={() => this.handleFav(data)}>
        <div className='card-text hide'>
          <h3>{data.main.name}</h3>
          <p>Terrain: {data.main.terrain}</p>
          <p>Population: {data.main.population}</p>
          <p>Climate: {data.main.climate}</p>
          {this.whoLivesHere()}
        </div>
      </article> 
    )
  }

  peopleDisplay = () => {
    const { data } = this.props
    const joinedName = (data.main.name).split(' ').join('')

    return (
      <article
        className={`display-card ${joinedName}`}
        aria-label="Individual display of results"
        onClick={() => this.handleFav(data)}>
        <div className='card-text hide'>
          <h2>{data.main.name}</h2>
          <p>Homeworld: {data.supp.homeworld}</p>
          <p>Species: {data.supp.species}</p>
          <p>Population: {data.supp.population}</p>
        </div>
      </article>
    )
  }

  vehicleDisplay = () => {
    const {data} = this.props
    let joinedName = (data.key).split(' ').join('')
    joinedName = joinedName.replace(/\//g,'')


    return (
      <article
        className={`display-card ${joinedName}`}
        aria-label="Individual display of results"
        onClick={() => this.handleFav(data)}
      >
        <div className='card-text hide'>
          <h3>{data.main.name}</h3>
          <p>Model: {data.main.model}</p>
          <p>Class: {data.main.vehicle_class}</p>
          <p>Number of Passengers: {data.main.passengers}</p>
        </div>
      </article>
    )
  }

  render() {
    const { data, category } = this.props

    if (category === "planets") {
      return this.planetsDisplay()

    } else if (category === "people") {
      return this.peopleDisplay()

    } else if (category === "vehicles") {
      return this.vehicleDisplay()
    }
    return <h1 className='main-loader'>Loading </h1>
  }
}

Card.propType = {
  favCard: PropType.func,
  unFavCard: PropType.func,
  data: PropType.object,
  category: PropType.string,
  planetSupp: PropType.object,
  peopleSupp: PropType.object
}
export default Card
