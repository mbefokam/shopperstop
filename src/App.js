import React, { Component } from 'react';
import Grocery from './components/Grocery';
import ShoppoingBag from './components/ShoppoingBag';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
      <div>
        <Grocery />
        <ShoppoingBag />
        <Stats />
      </div>
    );
  }
}

export default App;
