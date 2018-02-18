import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  goToStore = (event) => {
    event.preventDefault();
    const storeId = this.storeInput.value;
    this.props.history.push(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" 
          defaultValue={getFunName()} 
          ref={(input) => { this.storeInput = input}}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;