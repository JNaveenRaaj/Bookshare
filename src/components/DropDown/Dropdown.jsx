import React, { Component } from 'react';
import "./Dropdown.css"
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Option 1', // Default selected option
    };
  }

  handleSelectChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <div className='drop'>
        <select id="dropdown" value={this.state.selectedOption} onChange={this.handleSelectChange}>
          <option value="NGO">Smile Foundation</option>
          <option value="HelpAge India">HelpAge India</option>
          <option value="Goonj">Goonj</option>
          <option value="Child Rights and You">Child Rights and You</option>
          <option value="Akshaya Patra Foundation">Akshaya Patra Foundation</option>
          <option value="Pratham">Pratham</option>
          <option value="Bharti Foundation">Bharti Foundation</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
