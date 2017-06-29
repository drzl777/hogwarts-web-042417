import React from 'react'
import Details from './Details'

export default class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false,
      hidden: false
    }
  }

  // componentShouldUpdate(nextProps, nextState) {
  //   return this.state.showDetails !== nextState.showDetails
  // }

  flipDetails(event) {
    event.stopPropagation()
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  // clickHandler(event) {
  //   event.stopPropagation()
  //   this.props.hideHog(this.props.hog)
  // }
  hideHog() {
    this.setState({
      hidden: true,
    })
  }

  unhideHog() {
    this.setState({
      hidden: false,
      showDetails: false
    })
  }

  render() {
    let pigName = this.props.hog.name.toLowerCase().replace(/\s/g, '_')
    if (this.state.hidden) {
      return (
        <div className="pigTile">
          <button onClick={this.unhideHog.bind(this)}> Unhide {this.props.hog.name} </button>
        </div>
        )
    }else {
      return (
        <div className="pigTile" onClick={this.flipDetails.bind(this)}>
          {this.state.showDetails ? (
            <Details hog={this.props.hog} />
          ) : (
            <div>
              <a>
                <img alt="pig" src={require(`../hog-imgs/${pigName}.jpg`)} />
              </a>
              <h3 align="center">{this.props.hog.name}</h3>
            </div>
          )
          }
          <button onClick={this.hideHog.bind(this)}>Hide Hog</button>
        </div>
      )
    }
  }
}
