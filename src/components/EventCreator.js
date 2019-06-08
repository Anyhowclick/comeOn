import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../css/eventCreator.css'
import Logo from '../img/logo.png'

const bytecode = '6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f13806100536000396000f3fe60806040526004361061009e576000357c01000000000000000000000000000000000000000000000000000000009004806360654e47146100a357806361203265146100ce5780638b5b9ccc14610125578063940b3b4b146101915780639a898197146101a8578063a2fb1175146101ff578063df15c37e1461027a578063e97dcb62146102e6578063f71d96cb146102f0578063fc38bdf11461036b575b600080fd5b3480156100af57600080fd5b506100b86103a6565b6040518082815260200191505060405180910390f35b3480156100da57600080fd5b506100e36103c5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013157600080fd5b5061013a6103ea565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561017d578082015181840152602081019050610162565b505050509050019250505060405180910390f35b34801561019d57600080fd5b506101a6610478565b005b3480156101b457600080fd5b506101bd610689565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020b57600080fd5b506102386004803603602081101561022257600080fd5b81019080803590602001909291905050506106b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028657600080fd5b5061028f6106f0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102d25780820151818401526020810190506102b7565b505050509050019250505060405180910390f35b6102ee61077e565b005b3480156102fc57600080fd5b506103296004803603602081101561031357600080fd5b810190808035906020019092919050505061087b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561037757600080fd5b506103a46004803603602081101561038e57600080fd5b81019080803590602001909291905050506108b9565b005b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600180548060200260200160405190810160405280929190818152602001828054801561046e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610424575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104d357600080fd5b60006001805490503073ffffffffffffffffffffffffffffffffffffffff16318115156104fc57fe5b04905060008090505b60018054905081101561063e57600260018281548110151561052357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506001818154811015156105c057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610630573d6000803e3d6000fd5b508080600101915050610505565b50600060405190808252806020026020018201604052801561066f5781602001602082028038833980820191505090505b5060019080519060200190610685929190610dc9565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6002818154811015156106c157fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600280548060200260200160405190810160405280929190818152602001828054801561077457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161072a575b5050505050905090565b60008090505b600180549050811015610812576001818154811015156107a057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561080557600080fd5b8080600101915050610784565b5060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60018181548110151561088a57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561091457600080fd5b6000813073ffffffffffffffffffffffffffffffffffffffff163181151561093857fe5b04905081600180549050101515610ab05760008090505b82811015610aaa576000600180549050610967610b75565b81151561097057fe5b069050600260018281548110151561098457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600181815481101515610a2157fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050158015610a91573d6000803e3d6000fd5b50610a9b81610c18565b5050808060010191505061094f565b50610b71565b60008090505b600180549050811015610b6f576002600182815481101515610ad457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508080600101915050610ab6565b505b5050565b600044426001604051602001808481526020018381526020018280548015610bf257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ba8575b505093505050506040516020818303038152906040528051906020012060019004905090565b606060018054905082101515610c2d57600080fd5b60008290505b6001808054905003811015610ce2576001808201815481101515610c5357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600182815481101515610c8d57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080600101915050610c33565b50600180808054905003815481101515610cf857fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001805480919060019003610d3a9190610e53565b506001805480602002602001604051908101604052809291908181526020018280548015610dbd57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610d73575b50505050509050919050565b828054828255906000526020600020908101928215610e42579160200282015b82811115610e415782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610de9565b5b509050610e4f9190610e7f565b5090565b815481835581811115610e7a57818360005260206000209182019101610e799190610ec2565b5b505050565b610ebf91905b80821115610ebb57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101610e85565b5090565b90565b610ee491905b80821115610ee0576000816000905550600101610ec8565b5090565b9056fea165627a7a723058201905d467cec5d2384a2a06d6213667b480b42d6580c02f252da1ef199dbb761e0029'

const ABI = [
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
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]

export default class EventCreator extends Component {
  constructor(props) {
      super(props);
      this.state = {
        eventName: '',
        eventDescription: '',
        eventType: '',
        prizeType: '',
        prizeAmount: 0,
        numWinners: 0,
        startDate: new Date(),
        endDate: new Date()
      }

      // this.submitForm = this.submitForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deployContract = this.deployContract.bind(this);
  }

  async deployContract() {
      let web3 = this.props.web3.web3;
      const myContract = new web3.eth.Contract(ABI);
      await myContract.deploy({
        data:"0x" + bytecode
      })
      .send({
        from: this.props.account,
        gas: 4000000,
        gasPrice: '8000000000',
        value: 0
      });
  }


  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    await this.deployContract();
  //submitLockTx(this.state.recipient, this.state.ethAmt, this.props.srcChain, this.props.destChain)
  event.preventDefault();
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
