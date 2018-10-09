import React, { Component } from 'react';
import Button from '../Button/Button';
import '../../styles/3-modules/__nav-bar.sass'

class NavBar extends Component {
  constructor(props) {
    super(props)

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
                  className={'category-button'}
                  buttonText={buttonText[category]} 
                  key={buttonText[category]}/>
      })

      return (
        <div className={'nav-container'}>
          <h1 className={'title'}>SWAPIbox</h1>
          <div className={'buttons-container'}>
            { buttons }
            <button>Favorites</button>
          </div>
        </div>
      )
    }

}

export default NavBar;