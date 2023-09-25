import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // Write props passed in from parent in one line, instead of 'this.props' everytime used
    let { selectedImage, handleModalClose } = this.props;

    return (
      <Modal show={true} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>{selectedImage.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className='modal-elements'>
          <img
            src={selectedImage.image_url}
            alt={selectedImage.description}
            className='modal-image'
          />
          <p>{selectedImage.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
