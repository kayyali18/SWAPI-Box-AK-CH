import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Button extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      isSelected: false
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    const lowerButtonText = this.props.buttonText.toLowerCase();
    
    this.props.generateCards(lowerButtonText)
    this.setState({
      isSelected: !this.state.isSelected
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.buttonText}</button>
      </div>
    )
  }
}

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string
}