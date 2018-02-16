import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import Base from '../base';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fishes: {},
      order: {},
    }
  }

  componentWillMount() {
    const storeId = this.props.params.storeId;
    this.ref = Base.syncState(`${storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    // check if there is any order in local storage
    const localStorageRef = localStorage.getItem(`order-${storeId}`);
    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    Base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order));
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    this.setState({ fishes });
  }

  loadSamples = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  render() {
    const { fishes, order } = this.state; 
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header 
            tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object
                .keys(fishes)
                .map(key => <Fish 
                  key={key} 
                  index={key} 
                  details={fishes[key]} 
                  addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order 
          fishes={fishes} 
          order={order} 
          params={this.props.params} />
        <Inventory 
          addFish={this.addFish} 
          loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;