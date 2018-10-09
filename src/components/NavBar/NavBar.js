import React, { Component } from 'react';
import Button from '../Button/Button';

class NavBar extends Component {
  constructor() {
    super()

    this.state = {
      buttonText: {
        planets: 'Planets',
        people: 'People',
        vehicles: 'Vehicles'
      }
    }
  }

    render() {
      const { buttonText } = this.state;
      const buttons = Object.keys(buttonText).map(category => {
        return <Button 
                  buttonText={buttonText[category]} 
                  key={buttonText[category]}/>
      })

      return (
        <div>
          { buttons }
          <button>Favorites</button>
        </div>
      )
    }

}

export default NavBar;