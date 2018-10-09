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
      <div>
        <button onClick={() => {this.handleClick()}}>{this.props.buttonText}</button>
      }
      </div>
      )
  }
}

export default Button;