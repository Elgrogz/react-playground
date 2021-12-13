import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

const DatePeriodContainer = (props) => {
  const [date, setDate] = React.useState(props.periodEndDate);

  const handleDateChange = (date) => {
    setDate(date);
    props.handleDatePeriodChange(date);
  };

  return (
    <Container>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item>
          <FormGroup className="my-3">
            <DatePicker
              className="mx-3"
              label="End of Period Date: "
              data-testid="period-end-date"
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormGroup>
        </Grid>
        <Grid item className="date-box">
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default DatePeriodContainer;
