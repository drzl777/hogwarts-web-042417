import React, { Component } from 'react';

import './App.css';

import Nav from './components/Nav'
import Hogs from './porkers_data'
import Tile from './components/Tile'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: Hogs,
      //shownHogs: Hogs
    }
  }

  // hideHog(hiddenHog) {
  //   this.setState({
  //     shownHogs: this.state.shownHogs.filter(hog => hog !== hiddenHog)
  //   })
  // }

  render() {
    return (
      <div className="App">
          < Nav />
        {this.state.hogs.map(hog => <Tile hog={hog} />)}
      </div>
    )
  }
}



export default App;
