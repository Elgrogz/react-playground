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
            <Form className="float-right">
              <Form.Group>
                <Form.Label>
                  End of Period Date: 
                <Form.Control 
                  type="date" 
                  onChange={props.clickHandler} 
                />
                  (Default is today's date)
                </Form.Label>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <div className="float-left">
              <p>End of 180 day travel period: <b data-testid="period-end-date-label">{ props.periodEndDate ? props.periodEndDate.toLocaleDateString() : "Not yet selected" } </b></p>
              <p>Start of 180 day travel period: <b data-testid="period-start-date-label">{ props.periodStartDate ? props.periodStartDate.toLocaleDateString() : "Not yet selected" }</b></p>
            </div>
          </Col>
        </Row>
      </Container>
    )
}
