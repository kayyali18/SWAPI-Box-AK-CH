import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <header className='l-landing m-landing'>
        {this.displayRandomText}
      </header>
     );
  }
}
 
export default Landing;

Landing.propTypes = {
  films: PropTypes.array
}