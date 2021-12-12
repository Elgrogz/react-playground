import React from "react";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const CalculateButton = (props) => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        data-test-id="calculate-button"
        onClick={props.handleCalculation}
      >
        Can I be in the EU?
      </Button>
    </Container>
  );
};

export default CalculateButton;
