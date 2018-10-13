import React, { Component } from "react"
import PropTypes from "prop-types"

import Card from "../Card/Card"

const CardContainer = (props) => {
console.log(props.cards)
  if (props.cards) {

  const cards = props.cards.map((card, index) => {
      return (
        <Card
          data={card}
          key={index}
          category={props.category}
        />
        )
      })

    return (
      <section className="l-card-container card-container">
        { cards }
      </section>
    )
  } else {
    return null
  }
}

CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object
}

export default CardContainer;