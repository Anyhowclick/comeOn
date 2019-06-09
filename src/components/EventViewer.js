import React, { Component } from 'react'
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle, CardText, Col, Container, Row } from 'reactstrap'
import axios from 'axios'

export default class EventViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.getAllEvents = this.getAllEvents.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/events");
    let data = response.data;
    this.setState({data: data});
  }

    getAllEvents() {
      if (this.state.data === null) {return}
      return this.state.data.map((event,key) => {
        return (
          <Col xs="12" lg="6">
            <Card>
              <CardHeader tag="h3">{event.eventName}</CardHeader>
              <CardBody>
                <CardTitle>{event.eventType}</CardTitle>
                <CardText>{event.eventDescription}</CardText>
              </CardBody>
              <CardFooter>
              Start date: {event.startDate}<br/>
              End date: {event.endDate}
              </CardFooter>
            </Card>
          </Col>
        )
      }
    )
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
