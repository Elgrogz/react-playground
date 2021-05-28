import React from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function DatePeriod(props) { 
    return (
      <Container>
        <Row>
          <Col>
            <Form className="float-right" onSubmit={props.submitHandler}>
              <Form.Group>
                <Form.Label>
                  End of Period Date: 
                <Form.Control type="date" onChange={props.clickHandler} />
                </Form.Label>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <div className="float-left">
              <p>End of 180 day travel period: <b>{ props.data.endOfPeriodDate ? props.data.endOfPeriodDate.toLocaleDateString() + " - default is today's date" : "Not yet selected" } </b></p>
              <p>Start of 180 day travel period: <b>{ props.data.startOfPeriodDate ? props.data.startOfPeriodDate.toLocaleDateString() : "Not yet selected" }</b></p>
            </div>
          </Col>
        </Row>
      </Container>
    )
}