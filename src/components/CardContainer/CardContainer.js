import React, { Component } from "react"
import PropTypes from "prop-types"

import Card from "../Card/Card"

const CardContainer = (props) => {
  if (props.cards.length) {

    const cards = props.cards.map((card, index) => {
      return (
        <Card
          data={card}
          key={index}
          category={props.category}
          favCard={props.favCard}
          unFavCard={props.unFavCard}
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
  favCard: PropTypes.func,
  unFavCard: PropTypes.func,
  category: PropTypes.string
}

export default CardContainer