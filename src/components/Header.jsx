import React from 'react';

class Header extends React.Component {

  constructor(props) {

    super(props); // Activates React.Component

    // State is added here inside constructor
    this.state = {
      // Initialize state of component variables here
      color: document.body.style.background,
    };
  }

  componentDidMount() {
    // Store initial background color on component mount
    this.initialBackgroundColor = document.body.style.background;
  }

  handleImageClick = () => {

    // Check if this.state.color is equal to intialBackgroundColor, evaluates to true or false
    // '?' is conditional operator with three parts: condition, value to return if condition 'true', and value to return if condition 'false'. 
    // Returns #ed1be if this.state.color === this.initialBackground evaluates to true, else returns this.initialBackgroundColor if evaluates to false.
    let newColor = this.state.color === this.initialBackgroundColor ? "#ede1be" : this.initialBackgroundColor;

    this.setState( { color: newColor });

    document.body.style.background = newColor; // Change background of webpage
  };

  render() {

    return (
      <header>
        <h1 onClick={this.handleImageClick}>Horned Beasts Photos</h1>
      </header>
    )
  }

}

export default Header;
