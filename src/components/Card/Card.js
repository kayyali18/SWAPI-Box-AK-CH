import React, { Component } from 'react'
import PropType from 'prop-types'

class Card extends Component {
  constructor() {
    super() 

    this.state = {

    }
  }

  render() {
    const {data} = this.props
    return (
      <article className='display-card' aria-label='Individual display of results'>
        <div className="card-content">
          <h3>{data.name}</h3>
          <p>Weight: {data.mass}KG</p>
        </div>
        <div className="card-image">
          
        </div>

      </article>
      )
  }
}

export default Card;

Card.propType = {
  data: PropType.object
}