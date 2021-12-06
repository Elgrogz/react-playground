import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { format } from "date-fns";

const DatePeriodContainer = (props) => {
  // const formatDate = () => {
  //   props.periodEndDate === "blah" ? format(props.periodEndDate, "yyyy-MM-dd") : "";
  // };

  return (
    <Row className="mt=1 mb-3">
      <Form className="float-end me-4 ">
        <Form.Group className="mb-3">
          <Form.Label className="d-flex fw-light">
            End of Period Date: (Default is today's date):
          </Form.Label>
          <Form.Control
            data-testid="period-end-date"
            type="date"
            onChange={props.handleDatePeriodChange}
          />
        </Form.Group>
      </Form>
      <Row>
        <Col />
        <Col xs={6} className="date-box">
          <p className="mt-2">
            End of 180 day travel period:{" "}
            <b data-testid="period-end-date-label">
              {props.periodEndDate.toLocaleDateString()}
            </b>
          </p>
          <p>
            Start of 180 day travel period:{" "}
            <b data-testid="period-start-date-label">
              {props.periodStartDate.toLocaleDateString()}
            </b>
          </p>
        </Col>
        <Col />
      </Row>
    </Row>
  );
};

export default DatePeriodContainer;
