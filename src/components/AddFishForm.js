import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends Component {
  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }

    this.props.onSubmit(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={this.createFish}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
        <select ref={(input) => this.status = input}>
          <option value="avalilable">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Fish Desc"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddFishForm;