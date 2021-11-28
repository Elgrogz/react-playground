import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResultContainer = (props) => {
  return (
    <Row>
      <Col />
      <Col xs={10} className="border border-dark">
        <h1>Days spent in the EU: {props.totalDaysInTheEu}</h1>
        {props.dateWarning}
      </Col>
      <Col />
    </Row>
  );
};

export default ResultContainer;
