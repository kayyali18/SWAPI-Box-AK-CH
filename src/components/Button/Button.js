import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      isSelected: false
    }
  }

  handleClick = () => {
    this.setState({
      isSelected: !this.state.isSelected
    })
  }

  render() {
    return (
      <button onClick={() => {this.handleClick()}}>{this.props.buttonText}</button>
      )
  }
}

export default Button;