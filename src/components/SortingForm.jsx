import React from 'react';
import Form from 'react-bootstrap/Form';

class SortingForm extends React.Component {

  constructor(props) {

    super(props); // Activates React.Component
    
    this.state = {
      selectedSortValue: '',  // Initialize value of dropdown
    };
  }


  // Function to retrieve value of drop down and pass value back to App.
  handleSortValueChange = (event) => {

    // Retrieve value from dropdown
    let sortValue = event.target.value;

    // Pass value back to App via function passed in as prop from App
    this.props.onSortValueChange(sortValue);

  };


  render() {

    return (
      <>
      <Form.Group className="mb-3">
        <Form.Label>Filter Beast Images by Number of Horns Below!</Form.Label>
        <Form.Select onChange={this.handleSortValueChange}>

          <option>Choose number of horns</option>
          <option>1 horn</option>
          <option>2 horns</option>
          <option>3 horns</option>
          <option>100 horns</option>

        </Form.Select>
      </Form.Group>
    </>
      
    );
  }
}

export default SortingForm;