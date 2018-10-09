import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  displayRandomText = () => {
    let random = this.getRandom(0, 6)
    return <h2 className='title'>{this.props.films[random].opening_crawl}</h2>
  }

  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min 
  }

  render() { 
    if (!this.props.films) return null
    return ( 
      <header className='l-landing m-landing'>
        {this.displayRandomText()}
      </header>
     );
  }
}
 
export default Landing;

Landing.propTypes = {
  films: PropTypes.array
}