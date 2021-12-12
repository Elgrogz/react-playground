import React from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const AddNewTripButton = (props) => {
  return (
    <Container>
      <Button
        className="my-2"
        color="success"
        variant="contained"
        data-testid="add-new-trip-button"
        onClick={props.addTrip}
      >
        Add New Trip
      </Button>
    </Container>
  );
};

export default AddNewTripButton;
