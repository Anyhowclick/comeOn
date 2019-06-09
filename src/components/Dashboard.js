import React, { Component } from 'react'
import { Button, Container, Jumbotron } from 'reactstrap'
import EventViewer from './EventViewer'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.location.state.profile,
      web3: this.props.web3
    }

    this.routeToCreateEvent = this.routeToCreateEvent.bind(this);
  }

  routeToCreateEvent() {
    this.props.router.push({
      pathname: '/createEvent',
      state: {profile:this.state.profile}
    })
  }

  render() {
    return (
        <Container>
        <Jumbotron>
          <h1>
            Welcome, {this.state.profile.name}
          </h1>
          <h2>
            Your account is {this.props.account}
          </h2>
          <br />
          <Button color="primary" onClick={this.routeToCreateEvent}>Create An Event</Button>
        </Jumbotron>
        <EventViewer
        profile={this.state.profile}
        account={this.props.account}
        web3={this.props.web3}
        />
        </Container>
    )
  }
}
