import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../css/eventCreator.css'
import Logo from '../img/logo.png'
import axios from 'axios'
var RLP = require('rlp')

const bytecode = '60806040526040516040806110ec8339810180604052604081101561002357600080fd5b810190808051906020019092919080519060200190929190505050808210151561004c57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428201600381905550428101600481905550426005819055505050611036806100b66000396000f3fe6080604052600436106100ca576000357c0100000000000000000000000000000000000000000000000000000000900480630b97bc86146100cf57806344fbc893146100fa578063557ed1ba1461012557806360654e4714610150578063612032651461017b5780638b5b9ccc146101d2578063940b3b4b1461023e5780639a89819714610255578063a2fb1175146102ac578063c24a0f8b14610327578063df15c37e14610352578063e97dcb62146103be578063f71d96cb146103c8578063fc38bdf114610443575b600080fd5b3480156100db57600080fd5b506100e461047e565b6040518082815260200191505060405180910390f35b34801561010657600080fd5b5061010f610484565b6040518082815260200191505060405180910390f35b34801561013157600080fd5b5061013a61048a565b6040518082815260200191505060405180910390f35b34801561015c57600080fd5b50610165610492565b6040518082815260200191505060405180910390f35b34801561018757600080fd5b506101906104b1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101de57600080fd5b506101e76104d6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561022a57808201518184015260208101905061020f565b505050509050019250505060405180910390f35b34801561024a57600080fd5b50610253610564565b005b34801561026157600080fd5b5061026a610775565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102b857600080fd5b506102e5600480360360208110156102cf57600080fd5b810190808035906020019092919050505061079e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033357600080fd5b5061033c6107dc565b6040518082815260200191505060405180910390f35b34801561035e57600080fd5b506103676107e2565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103aa57808201518184015260208101905061038f565b505050509050019250505060405180910390f35b6103c6610870565b005b3480156103d457600080fd5b50610401600480360360208110156103eb57600080fd5b810190808035906020019092919050505061098e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561044f57600080fd5b5061047c6004803603602081101561046657600080fd5b81019080803590602001909291905050506109cc565b005b60035481565b60055481565b600042905090565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600180548060200260200160405190810160405280929190818152602001828054801561055a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610510575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105bf57600080fd5b60006001805490503073ffffffffffffffffffffffffffffffffffffffff16318115156105e857fe5b04905060008090505b60018054905081101561072a57600260018281548110151561060f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506001818154811015156106ac57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561071c573d6000803e3d6000fd5b5080806001019150506105f1565b50600060405190808252806020026020018201604052801561075b5781602001602082028038833980820191505090505b5060019080519060200190610771929190610eec565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6002818154811015156107ad57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b6060600280548060200260200160405190810160405280929190818152602001828054801561086657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161081c575b5050505050905090565b6003544211151561088057600080fd5b426004541015151561089157600080fd5b60008090505b600180549050811015610925576001818154811015156108b357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561091857600080fd5b8080600101915050610897565b5060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60018181548110151561099d57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a2757600080fd5b60045442111515610a3757600080fd5b6000813073ffffffffffffffffffffffffffffffffffffffff1631811515610a5b57fe5b04905081600180549050101515610bd35760008090505b82811015610bcd576000600180549050610a8a610c98565b811515610a9357fe5b0690506002600182815481101515610aa757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600181815481101515610b4457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050158015610bb4573d6000803e3d6000fd5b50610bbe81610d3b565b50508080600101915050610a72565b50610c94565b60008090505b600180549050811015610c92576002600182815481101515610bf757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508080600101915050610bd9565b505b5050565b600044426001604051602001808481526020018381526020018280548015610d1557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ccb575b505093505050506040516020818303038152906040528051906020012060019004905090565b606060018054905082101515610d5057600080fd5b60008290505b6001808054905003811015610e05576001808201815481101515610d7657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600182815481101515610db057fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080600101915050610d56565b50600180808054905003815481101515610e1b57fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001805480919060019003610e5d9190610f76565b506001805480602002602001604051908101604052809291908181526020018280548015610ee057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610e96575b50505050509050919050565b828054828255906000526020600020908101928215610f65579160200282015b82811115610f645782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610f0c565b5b509050610f729190610fa2565b5090565b815481835581811115610f9d57818360005260206000209182019101610f9c9190610fe5565b5b505050565b610fe291905b80821115610fde57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101610fa8565b5090565b90565b61100791905b80821115611003576000816000905550600101610feb565b5090565b9056fea165627a7a72305820873e4e7ffbe214172d95ff7097bcba03a63b0e1a2e777c337e9d3ce8e369461d0029'

const ABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "startDate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "createdDate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTime",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLotteryBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "organizer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pickWinnerAll",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOrganaizer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winners",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "endDate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getWinners",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "enter",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numberOfWinners",
				"type": "uint256"
			}
		],
		"name": "pickWinnerRandom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "startInSeconds",
				"type": "uint256"
			},
			{
				"name": "endInSecond",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]

export default class EventCreator extends Component {
  constructor(props) {
      super(props);
      this.state = {
				profile: this.props.location.state.profile,
        eventName: '',
        eventDescription: '',
        eventType: '',
        prizeType: '',
        prizeAmount: 0,
        numWinners: 0,
        startDate: new Date(),
        endDate: new Date(),
				contractAddress: ''
      }

      // this.submitForm = this.submitForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deployContract = this.deployContract.bind(this);
			this.pushNewEventDataToServer = this.pushNewEventDataToServer.bind(this);
			this.redirectToDashboard = this.redirectToDashboard.bind(this);
  }

  async deployContract() {
      let web3 = this.props.web3.web3;
			let nonce = await web3.eth.getTransactionCount(this.props.account);
			let address = "0x" + web3.utils.sha3(RLP.encode([this.props.account,nonce])).slice(12).substring(14);
			this.setState({contractAddress: address});
			await this.pushNewEventDataToServer();
			let startInSeconds = 10;
			let endInSeconds = 3600;
      const myContract = new web3.eth.Contract(ABI);
      await myContract.deploy({
        data:"0x" + bytecode,
				arguments: [startInSeconds,endInSeconds]
      })
      .send({
        from: this.props.account,
        gas: 4000000,
        gasPrice: '15000000000',
        value: 0
      })
			.on('transactionHash', (transactionHash) => {
				console.log(transactionHash);
				this.redirectToDashboard();
			 });
  }

	async pushNewEventDataToServer() {
			let data = {
				userId: this.state.profile.googleId,
				contractAddress: this.state.contractAddress,
				eventName: this.state.eventName,
				eventDescription: this.state.eventDescription,
				eventType: this.state.eventType,
				prizeType: this.state.prizeType,
				totalPrizeAmount: this.state.prizeAmount,
				numberOfWinners: this.state.numWinners,
				startDate: this.state.startDate,
				endDate: this.state.endDate
			}

			await axios.post('http://localhost:5000/events', data, function(err,res) {
				if(err) {
					console.log(err);
				} else {
					console.log(res);
				}
			})
	}

	redirectToDashboard() {
		this.props.router.push({
			pathname: '/dashboard',
			state: {profile:this.state.profile}
		})
	}

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    await this.deployContract();
  }

  render() {
    return (
      <Container>
      <Form>
        <FormGroup>
          <Label for="eventName">Event Name</Label>
          <Input type="text" name="eventName" id="eventName" value={this.state.eventName} onChange={this.handleChange} placeholder="Giveaway Example!" />
          </FormGroup>

          <FormGroup>
          <Label for="eventDescription">Event Description</Label>
          <Input type="textarea" name="eventDescription" id="eventDescription" value={this.state.eventDescription} onChange={this.handleChange} placeholder="100 ETH to 10 lucky winners!" />
          </FormGroup>

          <FormGroup tag="fieldset">
          <legend>Event Type</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="eventType" onChange={this.handleChange} value='random' />Random
              </Label>
          </FormGroup>

            <FormGroup check>
                <Label check>
                  <Input type="radio" name="eventType" onChange={this.handleChange} value='everyone' />Everyone
                </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Prize Type</legend>
            <FormGroup check>
                <Label check>
                  <Input type="radio" name="prizeType" onChange={this.handleChange} value='physical' />Physical
                </Label>
            </FormGroup>

            <FormGroup check>
                <Label check>
                  <Input type="radio" name="prizeType" onChange={this.handleChange} value='digital' />Digital
                </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup>
          <Label for="prizeAmount">ETH Prize Amount</Label>
            <Input type="number" name="prizeAmount" id="prizeAmount" value={this.state.prizeAmount} onChange={this.handleChange} placeholder="Input 0 if not ETH" />
          </FormGroup>

          <FormGroup>
            <Label for="numWinners">Number of winners</Label>
              <Input type="number" name="numWinners" id="numWinners" value={this.state.numWinners} onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for="startDate">Start Date</Label>
              <Input type="date" name="startDate" id="startDate" value={this.state.startDate} onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for="endDate">End Date</Label>
              <Input type="date" name="endDate" id="endDate" value={this.state.endDate} onChange={this.handleChange} />
          </FormGroup>

          <Button color="danger" onClick={this.handleSubmit}>Submit Event!</Button>
        </Form>
      </Container>
    )
  }
}
