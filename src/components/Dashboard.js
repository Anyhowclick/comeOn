import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.log(this.props.web3)
    this.state = {
      profile: this.props.location.state.profile,
    }
  }

  render() {
    return (
      <div>
        <h1>
          Welcome, {this.state.profile.name }
        </h1>
        <h2>
        Your account is {this.props.account}
        </h2>
      </div>
    )
  }
}
