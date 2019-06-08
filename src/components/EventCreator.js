  import React, { Component } from 'react'
  import { Button, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
  import '../css/eventCreator.css'
  import Logo from '../img/logo.png'

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
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
      console.log(this.state)
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
