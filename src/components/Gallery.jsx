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

    // Establish emmpty array to hold images to be rendered based on option chosen from drop down (or no option chosen)
    let galleryImages = [];

    if (selectedSortValue) { // If selectedSortValue is 'truthy' execute

      // Modify array so only contains images that have numberOfHorns equal to selectedSortValue
      galleryImages = hornedBeastImageData.filter( (filteredImage) => {
        return filteredImage.horns === selectedSortValue; // Returned filtered images matching selectedSortValue
      });

      // Use map to render images from the above filtered array (galleryImages)
      galleryImages = galleryImages.map( (filteredImage, index) => {

        return (

          <Col key={index}>
            
            <HornedBeast
              title={filteredImage.title}
              imageUrl={filteredImage.image_url}
              description={filteredImage.description}

              // Pass in image data of current image (filteredImage) as argument into handImageClick function, then pass function with filteredImage info to Horned Beast
              handleImageClick={() => handleImageClick(filteredImage)}

            />
          </Col>

        );
    });

    } else { // else if selectedSortValue 'falsy' (no value chosen) render all images

      galleryImages = hornedBeastImageData.map( (notFilteredImage, index) => {

        return (

          <Col key={index}>

            <HornedBeast
              title={notFilteredImage.title}
              imageUrl={notFilteredImage.image_url}
              description={notFilteredImage.description}

              // Pass in image data of current image (notFilteredImage) as argument into handImageClick function, then pass function with notFilteredImage info to Horned Beast
              handleImageClick={ () => handleImageClick(notFilteredImage) }
            />

          </Col>

        );
      });
    }

    return (

      <Container>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">

          {galleryImages}

        </Row>

      </Container>
    );
  }
}

export default Gallery;