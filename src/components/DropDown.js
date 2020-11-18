import React from 'react';
import Select from 'react-select';
 
const options = [
    { value: 'chocolate', label: 'Choconnnnnnnnlate' },
    { value: 'strawberry', label: 'Strannnnnnnnnnnnwberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
class DropDown extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption,  } = this.state;
    
 
    return (
      <Select value={selectedOption} onChange={this.handleChange} options={options} />
    );
  }
}

export default DropDown;