import React from 'react';
import HornedBeast from './HornedBeast';
// import imageData from './imageData';
import hornedBeastImageData from '../assets/data.json';

class Gallery extends React.Component {

  render() {

  //   let images = [];

  //   hornedBeastImageData.forEach ( (image, index) => {
  //     images.push (
  //       <HornedBeast
  //         key = {index}
  //         title = {image.title}
  //         imageUrl = {image.image_url}
  //         description = {image.description}
  //       />
  //     );
  //   });

  //   return <div>{images}</div>
  // }

    return (

      <div>

        {hornedBeastImageData.map ( (image, index) => 
          <HornedBeast 
            key = {index}
            title = {image.title}
            imageUrl = {image.image_url}
            description = {image.description}
          />
        
        )};

      </div>

    );

  }
}

export default Gallery;