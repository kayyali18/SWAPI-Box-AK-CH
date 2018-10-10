import React, { Component } from "react"

import Button from "../Button/Button"

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonText: {
        planets: "Planets",
        people: "People",
        vehicles: "Vehicles"
      }
    }
  }

  handleToggle = () => {
    if (this.state.burger !== 'active'){
      this.setState({
        burger: 'active',
        navClass: 'show'
      })
    } else {
      this.setState({
        burger: '',
        navClass: ''
      })
    }
  }

  render() {
    const { buttonText } = this.state
    const buttons = Object.keys(buttonText).map(category => {
      return (
        <Button
          className={"category-button"}
          buttonText={buttonText[category]}
          key={buttonText[category]}
        />
      )
    })

    return (
      <div className="l-nav side-section">
        <div className="nav-logo">
          <img
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png"
            alt="Star Wars Logo"
          />
        </div>
        <div id="burger-container" onClick={this.handleToggle}>
          <div id="burger" className={this.state.burger}>
            <div className="bun top" />
            <div className="filling" />
            <div className="bun bottom" />
          </div>
        </div>
        <nav ref={`toggle`} className={`nav-container ${this.state.navClass}`} id="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li className="green">
              <a href="#">Jedi</a>
            </li>
            <li className="red">
              <a href="#">Sith</a>
            </li>
            <li className="yellow">
              <a href="#">Sentinel</a>
            </li>
            <li className="purple">
              <a href="#">Samuel L. Jackson</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
