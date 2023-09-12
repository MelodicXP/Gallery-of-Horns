import React from 'react';
import HornedBeast from './HornedBeast';
// import imageData from './imageData';
import hornedBeastImageData from '../assets/data.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Gallery extends React.Component {

  render() {

    return (

      <Container>

          <Row xs={1} sm={2} md={3} lg={4} className="g-4">

            {hornedBeastImageData.map( (imageData, index) => ( // For each subArray located inside 'rowsArray' array execute the following 
 
              // Create a new Column component for each imageData in the row
              <Col key={index}>

                <HornedBeast
                  title={imageData.title}
                  imageUrl={imageData.image_url}
                  description={imageData.description}
                />

              </Col>
            ))}
            
          </Row>

      </Container>
    );
  }
}

export default Gallery;