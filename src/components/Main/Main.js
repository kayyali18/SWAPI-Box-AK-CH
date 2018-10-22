import React, { Component } from "react"
import PropTypes from "prop-types"
import { Route, NavLink } from 'react-router-dom'

import NavBar from "../NavBar/NavBar"
import CardContainer from "../CardContainer/CardContainer"
import Card from "../Card/Card"
import * as API from './../../api'


class Main extends Component {
  
  render() { 
    const {generateCards, cards, currCategory, favCard, unFavCard} = this.props
    return (
      <main className="l-main main-loader">
        <Route path='/' render={() => 
          (
            <NavBar generateCards={generateCards} />
          )
        } />
        <NavLink to="/">
          <img
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png"
            alt="Star Wars Logo" />
        </NavLink>
        <Route path={`/${currCategory}`} render={() => {
          return (<CardContainer
            cards={cards}
            category={currCategory}
            favCard={favCard}
            unFavCard={unFavCard}
          />)
        }} />
      </main>
    )
  }
}

export default Main

Main.propTypes = {
  favCard: PropTypes.func,
  unFavCard: PropTypes.func,
  generateCards: PropTypes.func,
  cards: PropTypes.array,
  currCategory: PropTypes.string
}
