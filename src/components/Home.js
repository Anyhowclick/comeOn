import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export default class Home extends Component {
  constructor(props) {
      super(props);

      this.proceedToDashboard = this.proceedToDashboard.bind(this);
      this.proceedToError = this.proceedToError.bind(this);
  }

  proceedToDashboard(response) {
    console.log(response)
    this.props.router.push({
      pathname: '/dashboard',
      state: {profile:response.profileObj}
    })
  }

  proceedToError(response) {
    this.props.router.push({
      pathname: '/error',
    })
  }

  render() {
    return (
      <GoogleLogin
        clientId="501676712779-tk2a5o3jssv8d7cpatsjht0si1ueu6e4.apps.googleusercontent.com"
        onSuccess={this.proceedToDashboard}
        onFailure={this.proceedToError}
      />
    )
  }
}
