import React, { Component } from "react"
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      burger: "",
      navClass: ""
    }
  }

  handleToggle = () => {
    if (this.state.burger !== "active") {
      this.setState({
        burger: "active",
        navClass: "show"
      })
    } else {
      this.setState({
        burger: "",
        navClass: ""
      })
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    const query = event.currentTarget.children[0].text.toLowerCase()
    
    this.props.generateCards(query)
  }

  render() {
    return (
      <div className="l-nav">
        <div id="burger-container" onClick={this.handleToggle}>
          <div id="burger" className={this.state.burger}>
            <div className="bun top" />
            <div className="filling" />
            <div className="bun bottom" />
          </div>
        </div>
        <nav
          ref={`toggle`}
          className={`nav-container ${this.state.navClass}`}
          id="nav"
        >
          <ul className="l-menu menu">
            <li className='menu-btn'>
            <NavLink to="/">Home</ NavLink>
            </li>
            <li id='logo-parent'>
              <a href="#">
                <img
                  className="nav-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png"
                  alt="Star Wars Logo"
                />
              </a>
            </li>
            <li className="menu-btn green" onClick={this.handleClick}>
              <NavLink to="/people">People</ NavLink>
            </li>
            <li className="menu-btn red" onClick={this.handleClick}>
              <NavLink to="/planets">Planets</ NavLink>
            </li>
            <li className="menu-btn yellow" onClick={this.handleClick}>
              <NavLink to="/vehicles">Vehicles</ NavLink>
            </li>
            <li className="menu-btn purple" onClick={this.handleClick}>
              <NavLink to="/favourites">Favourites</ NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar


NavBar.propTypes = {
  generateCards: PropTypes.func
}