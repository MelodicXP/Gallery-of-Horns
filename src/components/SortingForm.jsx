import React from 'react';
import Form from 'react-bootstrap/Form';


class SortingForm extends React.Component {

  constructor(props) {

    super(props); // Activates React.Component
    
    this.state = {
      selectedSortValue: '',  // Initialize value of dropdown
    };
  }

  // Create mapping object to assign a number value to each drop down option.
  sortValues = {
    '1 horn': 1,
    '2 horns': 2,
    '3 horns': 3,
    '100 horns': 100,
  };

  // Function to retrieve value of drop down and pass value back to App.
  handleSortValueChange = (event) => {

    // Retrieve value from dropdown
    let selectedSortValue = event.target.value;

    // Map selected value to numeric value in sortValues ('convert' to number)
    let sortValue = this.sortValues[selectedSortValue];

    // Pass value back to App.jsx via function from App.jsx
    this.props.onSortValueChange(sortValue);

  };


  render() {

    return (
      <>
      <Form.Group className="mb-3">
        <Form.Label>Filter Beast Images by Number of Horns Below!</Form.Label>
        <Form.Select onChange={this.handleSortValueChange} className='form-dropdown'>

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