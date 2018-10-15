import React, { Component } from "react"
import PropTypes from 'prop-types'

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
              <a href="#">Home</a>
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
              <a href="#">People</a>
            </li>
            <li className="menu-btn red" onClick={this.handleClick}>
              <a href="#">Planets</a>
            </li>
            <li className="menu-btn yellow" onClick={this.handleClick}>
              <a href="#">Vehicles</a>
            </li>
            <li className="menu-btn purple" onClick={this.handleClick}>
              <a href="#">Favourites</a>
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