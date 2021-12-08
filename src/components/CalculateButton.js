import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CalculateButton = (props) => {
  return (
    <Row>
      <Col></Col>
      <Col xs={10}>
        <Button
          className="border submit-button my-3"
          variant="primary"
          size="lg"
          type="submit"
          data-test-id="calculate-button"
          onClick={props.handleCalculation}
        >
          Can I be in the EU?
        </Button>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default CalculateButton;
