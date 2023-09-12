import React from 'react';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

  constructor(props) {

    super(props); // Activates React.Component

    // State is added here inside constructor
    this.state = {
      // Initialize states of component variables here
      totalFavorites: 0, // counter
    };

  }

  // Handles when user clicks on button (adds 1 to favorite counter)
  handleFavoriteClick = () => {
    this.setState( { totalFavorites: this.state.totalFavorites + 1}); // Adds 1 to counter
  };

  render() {

    return (
      <>
          <p className='heart-number'><img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4NS0zMS1wLnBuZw.png?s=3mXWtJo-6hWc_PTad35orL_SHH2ZEzvu_MQjLYv_mMs" alt="picture of heart" className='heart-img'/>{` ${this.state.totalFavorites}`}</p>
          <h2>{this.props.title}</h2>
          <img className='horned-beast-img'src={this.props.imageUrl} alt={this.props.description} title ={this.props.title} />
          <p>{this.props.description}</p>
          <Button variant="info" onClick={this.handleFavoriteClick}>Click to Favorite!</Button>{' '}
      </>  
    )
  }

}

export default HornedBeast; 