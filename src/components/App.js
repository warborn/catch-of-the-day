import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fishes: {},
      order: {},
    }
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header 
            tagline="Fresh Seafood Market"
          />
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish} 
          loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;