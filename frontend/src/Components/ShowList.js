import React, { Component } from 'react';
import Cost from './Cost';
import AddCost from './AddCost';

class CarPartsList extends Component {
  state = {
    parts: [
      { id: 1, Part: 'Hengerfej', Cost: '150000', Mileage:'42587' },
    ]
  };

  renderparts() {
    return this.state.parts.map(part => (
      <Cost key={part.id} id={part.id} part={part.part} onDeletepart={this.handleDeletepart} />
    ));
  }

  handleAddpart = part => {
    const parts = [...this.state.parts];
    parts.push({ id: parts.length + 1, part });
    this.setState({ parts });
  };

  handleDeletepart = id => {
    const parts = [...this.state.parts];
    const index = parts.findIndex(part => part.id === id);
    parts.splice(index, 1);
    this.setState({ parts });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <Addpart onAddpart={this.handleAddpart} />
        <ul>{this.renderparts()}</ul>
      </div>
    );
  }
}

export default CarPartsList;