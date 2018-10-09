import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      isSelected: false
    }
  }

  render() {
    return (
      <button>{this.props.buttonText}</button>
      )
  }
}

export default Button;