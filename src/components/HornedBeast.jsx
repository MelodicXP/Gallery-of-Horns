import React from 'react';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title ={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    )
  }

}

export default HornedBeast;