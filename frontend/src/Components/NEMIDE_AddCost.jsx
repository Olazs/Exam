import React, { Component } from 'react';

class AddCost extends Component {
  state = {
    Cost: '',
    Part: '',
    Mileage: ''
  };

  handleInputChange = e => {
    this.setState({ Cost: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddCost(this.state.Cost,this.state.Part,this.state.Mileage);
    this.setState({ Cost: '',Part: '',Mileage: '' });
  };

  render() {
    return (
        
      <><form onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder="Car Part"
                value={this.state.Part}
                onChange={this.handleInputChange}>
                </input></form>
                <form onSubmit={this.handleSubmit}>
                <input
                    type='Number'
                    placeholder='Price'
                    value={this.state.Cost}
                    onChange={this.handleInputChange}
                ></input></form>
                <form onSubmit={this.handleSubmit}>
                <input
                    type='Number'
                    placeholder='Mileage'
                    value={this.state.Mileage}
                    onChange={this.handleInputChange}
                ></input></form>
                <button>Add</button>
        
        </>
    );
  }
}

export default AddCost;