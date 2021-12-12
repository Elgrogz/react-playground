import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "@mui/material/Container";

const ResultContainer = (props) => {
  return (
    <Container
      className="container-box"
      sx={{
        bgcolor: "#c8e3d4",
        boxShadow: 1,
        border: 3,
        borderRadius: 10,
        borderColor: "#87aaaa",
        p: 5,
        width: 500,
      }}
    >
      <h1 data-testid="result-container">
        Days spent in the EU: {props.totalDaysInTheEu}
      </h1>
      {props.dateWarning}
    </Container>
  );
};

export default ResultContainer;
