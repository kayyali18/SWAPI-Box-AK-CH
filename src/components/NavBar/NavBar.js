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
      <div className='nav-container'>
        <nav>
          <ul className="l-menu menu">
            <li id='logo-parent'>
              <NavLink to="/">
                <img
                  className="nav-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png"
                  alt="Star Wars Logo" />
              </NavLink>
            </li>
            <li className='menu-btn'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu-btn green" onClick={this.handleClick}>
              <NavLink to="/main/people">People</NavLink>
            </li>
            <li className="menu-btn red" onClick={this.handleClick}>
              <NavLink to="/main/planets">Planets</NavLink>
            </li>
            <li className="menu-btn yellow" onClick={this.handleClick}>
              <NavLink to="/main/vehicles">Vehicles</NavLink>
            </li>
            <li className="menu-btn purple" onClick={this.handleClick}>
              <NavLink to="/main/favourites">Favourites</NavLink>
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