import React, {Component} from 'react';
import getWeb3 from './js/getWeb3';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        web3: null,
        account: null
      }
      this.obtainWeb3 = this.obtainWeb3.bind(this);
  }

  async componentDidMount() {
      await this.obtainWeb3();
  }

  async obtainWeb3() {
      let web3 = await getWeb3;
      try {
        const accounts = await window.ethereum.enable();
        this.setState({account: window.ethereum.selectedAddress, web3: web3});
      } catch(e) {
        console.log("User rejected access")
      }
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        web3: this.state.web3,
        account: this.state.account
      })
    });

    return (
      <div className="App">
      {children}
      </div>
    );
  }
}

export default App;
