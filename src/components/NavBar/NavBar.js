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
      <nav className={"nav-container l-nav"} id='nav'>
        <div className='nav-logo'><img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png' alt='Star Wars Logo' /></div>
        <div className={"nav-btns"}>
          {buttons}
          <button>Favorites</button>
        </div>
      </nav>
    )
  }
}

export default NavBar
