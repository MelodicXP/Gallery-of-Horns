import React from 'react';
import HornedBeast from './HornedBeast';
// import imageData from './imageData';
import hornedBeastImageData from '../assets/data.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Gallery extends React.Component {

  render() {

    // Output - Render images as 3 images per row (3 columns per row)

    // Initialize an empty array to store HornedBeastImage data in groups of 3

    // Reduce() method has callback function has 3 arguments - reduce( (accumulator-represents accumulated result up to current iteration, elementBeingProcessed, index) )
    const rowsArray = hornedBeastImageData.reduce( (result, imageData, index) => {

      // Start a new row (empty array inside result), for every 3rd item from hornedBeastImageData
      if (index % 3 === 0) { // If index of hornedBeastImageData is divisible by 3 create a new empty array

        result.push([]); // Then push empty array (which will be a new index inside result array), each empty array will hold three items

      }

      // Add the current image to the last index (which is one of empty arrays created inside if statement) in the result array
      result[result.length - 1].push(imageData);

      return result; // Return array with data grouped into groups of three

    }, [] ); // [] initializes 'result variable as an empty array into which groups of three are pushed


    // Once HornedImageData is stored in groups of 3 inside 'rows' array, proceed to pass data props from 'rows' array into HornedBeast.jsx
    return (
      <Container>

        {rowsArray.map( (rowsArraySubArray, rowIndex) => ( // Now access data from rowsArray created above and access subArrays data grouped in 3's

          // Create a new Row component for each set of rowItems
          <Row key={rowIndex}>

            {rowsArraySubArray.map((imageData, colIndex) => ( // For each subArray located inside 'rowsArray' array execute the following 
 
              // Create a new Column component for each imageData in the row
              <Col key={colIndex}>

                <HornedBeast
                  title={imageData.title}
                  imageUrl={imageData.image_url}
                  description={imageData.description}
                />

              </Col>
            ))}

          </Row>
        ))}

      </Container>
    );
  }
}

export default Gallery;