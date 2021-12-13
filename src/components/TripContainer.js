import React from "react";

import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const TripContainer = (props) => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleTripStartDateChange = (date) => {
    setStartDate(date);
    props.handleTripStartDateChange(date);
  };

  const handleTripEndDateChange = (date) => {
    setEndDate(date);
    props.handleTripEndDateChange(date);
  };

  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = (
      <Button
        variant="contained"
        color="error"
        size="medium"
        startIcon={<DeleteIcon />}
        onClick={props.handleTripRemove}
        data-testid={"trip-remove-" + props.index}
        rounded
      ></Button>
    );
  }

  return (
    <Container sx={{ my: 1 }}>
      <FormGroup>
        <Grid container justifyContent="center">
          <Grid item xs={1} />
          <Grid item xs={5}>
            <DatePicker
              controlId="tripStartDate"
              label="Start date of Trip: "
              value={startDate}
              data-testid={"trip-start-date-" + props.index}
              inputFormat="dd/MM/yyyy"
              onChange={handleTripStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={5}>
            <DatePicker
              controlId="tripEndDate"
              label="End date of Trip: "
              value={endDate}
              data-testid={"trip-end-date-" + props.index}
              inputFormat="dd/MM/yyyy"
              onChange={handleTripEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={1}>
            {removeTripButton}
          </Grid>
        </Grid>
      </FormGroup>
    </Container>
  );
};

export default TripContainer;
