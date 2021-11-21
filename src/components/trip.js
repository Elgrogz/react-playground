import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Trip(props) {
  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = (
      <Button
        className="rounded-circle"
        variant="danger"
        // size="sm"
        onClick={props.handleTripRemove}
        rounded
      >
        Remove
      </Button>
    );
  }

  return (
    <Form>
      <Container>
        <Row className="m-1">
          <Col xs={2} />
          <Col xs={4}>
            <Form.Group controlId="tripStartDate" className="float-end">
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
            <Form.Group controlId="tripEndDate" className="float-start">
              <Form.Label className="m-1">
                End date of Trip:
                <Form.Control
                  type="date"
                  onChange={props.handleTripEndDateChange}
                />
              </Form.Label>
            </Form.Group>
            <div className="float-start mt-4 ms-1">{removeTripButton}</div>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    </Form>
  );
}
