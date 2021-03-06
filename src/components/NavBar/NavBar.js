import React, { Component } from "react"
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    const query = event.currentTarget.children[0].text.toLowerCase()
    
    this.props.generateCards(query)
  }

  render() { 
    return (
      <div className='nav-container l-nav'>
        <nav>
          <ul className="l-menu menu">
            <li className='menu-btn'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu-btn green" onClick={this.handleClick}>
              <NavLink to="/people">People</NavLink>
            </li>
            <li className="menu-btn red" onClick={this.handleClick}>
              <NavLink to="/planets">Planets</NavLink>
            </li>
            <li className="menu-btn yellow" onClick={this.handleClick}>
              <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
            <li className="menu-btn purple" onClick={this.handleClick}>
              <NavLink to="/favourites">Favourites</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;


NavBar.propTypes = {
  generateCards: PropTypes.func
}