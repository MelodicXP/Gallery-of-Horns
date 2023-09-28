import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Gallery extends React.Component {

  constructor(props) {

    super(props); // Activates React.Component

  }


  render() {

    // Write props passed in from parent in one line, instead of 'this.props' everytime used
    let { hornedBeastImageData, handleImageClick, selectedSortValue } = this.props;

    return (

      <Container>

          <Row xs={1} sm={2} md={3} lg={4} className="g-4">

            {hornedBeastImageData.map( (imageData, index) => ( // Use hornedBeastImagemageData prop from App to map through image data
 
              // Create a new Column component for each imageData in the row
              <Col key={index}>

                <HornedBeast
                  title={imageData.title}
                  imageUrl={imageData.image_url}
                  description={imageData.description}

                  // Pass in imageData of current image as argument into handImageClick function, then pass function with imageData info to Horned Beast
                  handleImageClick={ () => handleImageClick(imageData) }
                />

              </Col>
            ))}

          </Row>

      </Container>
    );
  }
}

export default Gallery;