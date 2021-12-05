import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { format } from "date-fns";

const DatePeriodContainer = (props) => {
  return (
    <Row className="mt=1 mb-3">
      <Form className="float-end me-4 justify-content-center">
        <Form.Group className="mb-3">
          <Form.Label>
            End of Period Date: (Default is today's date):
          </Form.Label>
          <Form.Control
            data-testid="period-end-date"
            type="date"
            value={format(props.periodEndDate, "yyyy-MM-dd")}
            onChange={props.clickHandler}
          />
        </Form.Group>
      </Form>
      <Row>
        <Col />
        <Col xs={6} className="date-box">
          <p className="mt-2">
            End of 180 day travel period:{" "}
            <b data-testid="period-end-date-label">
              {props.periodEndDate
                ? props.periodEndDate.toLocaleDateString()
                : "Not yet selected"}
            </b>
          </p>
          <p>
            Start of 180 day travel period:{" "}
            <b data-testid="period-start-date-label">
              {props.periodStartDate
                ? props.periodStartDate.toLocaleDateString()
                : "Not yet selected"}
            </b>
          </p>
        </Col>
        <Col />
      </Row>
    </Row>
  );
};

export default DatePeriodContainer;
