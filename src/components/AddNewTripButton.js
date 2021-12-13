import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const AddNewTripButton = (props) => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Button
          className="my-2"
          color="success"
          variant="contained"
          data-testid="add-new-trip-button"
          onClick={props.addTrip}
        >
          Add New Trip
        </Button>
      </Grid>
    </Container>
  );
};

export default AddNewTripButton;
