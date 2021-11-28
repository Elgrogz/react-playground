import React from "react";
import Button from "react-bootstrap/Button";

const AddNewTripButton = (props) => {
  return (
    <Button
      className="my-2"
      variant="success"
      type="submit"
      onClick={props.addTrip}
    >
      Add New Trip
    </Button>
  );
};

export default AddNewTripButton;
