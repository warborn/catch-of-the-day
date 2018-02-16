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
    this.ref = Base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    Base.removeBinding(this.ref);
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
        <Order fishes={fishes} order={order} />
        <Inventory 
          addFish={this.addFish} 
          loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;