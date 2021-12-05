import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TripContainer = (props) => {
  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = (
      <Button
        className="rounded-circle"
        variant="danger"
        onClick={props.handleTripRemove}
        data-testid={"trip-remove-" + props.index}
        rounded
      >
        Remove
      </Button>
    );
  }

  return (
    <Form>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={4}>
            <Form.Group controlId="tripStartDate" className="float-end">
              <Form.Label className="m-1">
                Start date of Trip:
                <Form.Control
                  data-testid={"trip-start-date-" + props.index}
                  type="date"
                  onChange={props.handleTripStartDateChange}
                />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group controlId="tripEndDate" className="float-start">
              <Form.Label className="m-1">
                End date of Trip:
                <Form.Control
                  data-testid={"trip-end-date" + props.index}
                  type="date"
                  onChange={props.handleTripEndDateChange}
                />
              </Form.Label>
            </Form.Group>
            <div className="float-start mt-4 ms-1">{removeTripButton}</div>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default TripContainer;
