import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available. {removeButton}</li>
    }

    return (
      <li key={key}>
        <span>{count}lbs {fish.name} {removeButton}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  calculateOrderTotal(fishes, order) {
    const orderIds = Object.keys(order);
    return orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal;
    }, 0);
  }

  render() {
    const { fishes, order } = this.props;
    const orderIds = Object.keys(order);
    const total = this.calculateOrderTotal(fishes, order);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    );
  }
}

export default Order;