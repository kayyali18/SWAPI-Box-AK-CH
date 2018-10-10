import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }

  displayRandomText = () => {
    let random = this.getRandom(0, 6)
    return <p className='title'>{this.props.films.results[random].opening_crawl}</p>
  }

  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min 
  }

  render() { 
    if (!this.props.films) return null
    return ( 
      <header className='l-landing m-landing'>
        <div className='fade'><img className='starwars-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png' alt='Star Wars Logo' /></div>
        <div className='star-wars'>
          <div className='crawl'>
            {this.displayRandomText()}
            <p>Did you really expect a button? Just use the force to scroll down</p>
          </div>  
        </div>
      </header>
    )
  }
}
 
export default Landing

Landing.propTypes = {
  films: PropTypes.object
}