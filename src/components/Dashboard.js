import React, { Component } from 'react'
import { Button } from 'reactstrap'
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
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
        <br />
        <Button color="primary" href="/createEvent">Create An Event</Button>
        <Button color="success" href="/viewEvent">View events</Button>
      </div>
    )
  }
}
