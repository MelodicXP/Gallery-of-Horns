import React from 'react';
import HornedBeast from './HornedBeast';
import imageData from './imageData';

class Gallery extends React.Component {

  render() {

    let images = [];

    imageData.forEach ( (image, index) => {
      images.push (
        <HornedBeast
          key = {index}
          title = {image.title}
          imageUrl = {image.image_url}
          description = {image.description}
        />
      );
    });

    return <div>{images}</div>
  }

}

export default Gallery;