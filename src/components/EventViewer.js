import React, { Component } from 'react'
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle, CardText, Col, Container, Row } from 'reactstrap'
import EventCard from './EventCard'
import axios from 'axios'

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

export default class EventViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.getAllEvents = this.getAllEvents.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/events");
    let data = response.data;
    this.setState({data: data});
  }

  async joinEvent(event) {
    if(this.props.web3) {
      let web3 = this.props.web3.web3;
      let contract = new web3.eth.Contract(ABI,event.contractAddress);
      await contract.methods.enter().send({
        from: this.props.account,
        value: 0,
        gas: 400000,
        gasPrice: '15000000000',
      });
    }
  }

    getAllEvents() {
      if (this.state.data === null) {return}
      var eventCards = this.state.data.map((event,key) => {
        return (
          <Col xs="12" lg="6">
						<EventCard
						event={event}
						web3={this.props.web3}
						account={this.props.account}
						{... this.props}
						/>
          </Col>
        )
      }
		);

		return eventCards;
  }

  render() {
    return (
      <Container>
        <Col xs="6">
          <Row>
          {this.getAllEvents()}
          </Row>
        </Col>
      </Container>
    )
  }
}
