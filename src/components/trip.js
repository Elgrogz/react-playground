import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Trip(props) {
  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = (
      <Button
        className="mt-3 h-75"
        variant="danger"
        size="sm"
        onClick={props.handleTripRemove}
      >
        Remove Trip
      </Button>
    );
  }

  return (
    <Form>
      <Container>
        <Row className="m-1">
          <Col xs={2} />
          <Col xs={4}>
            <Form.Group controlId="tripStartDate">
              <Form.Label className="m-1">
                Start date of Trip:
                <Form.Control
                  type="date"
                  onChange={props.handleTripStartDateChange}
                />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="tripEndDate">
              <Form.Label className="m-1">
                End date of Trip:
                <Form.Control
                  type="date"
                  onChange={props.handleTripEndDateChange}
                />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs={2}>{removeTripButton}</Col>
        </Row>
      </Container>
    </Form>
  );
}
