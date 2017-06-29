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

  sortName() {
    let sortedHogs = this.state.hogs.sort(function (a,b) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({
      hogs: sortedHogs
    })
  }

  sortWeight() {
    console.log('sort Name')
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let sortedHogs = this.state.hogs.sort(function (a,b) {
      if (a[weight] < b[weight]) {
        return -1
      } else if (a[weight] > b[weight]) {
        return 1
      } else {
        return 0
      }
    })
    console.log(sortedHogs)
    this.setState({
      hogs: sortedHogs
    })
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
        <button onClick={this.sortName.bind(this)}>Sort By Name</button>
        <button onClick={this.sortWeight.bind(this)}>Sort By Weight</button>
        {this.state.hogs.map(hog => <Tile hog={hog} />)}
      </div>
    )
  }
}



export default App;
