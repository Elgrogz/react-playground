import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Trip(props) { 
  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = <Button className="m-1" variant="warning" onClick={props.handleTripRemove}>Remove Trip</Button>;
  }
  
  return (
        <Form>
          <Form.Group controlId="tripStartDate">
            <Form.Label className="m-1">
              Start date of Trip: 
              <Form.Control type="date" onChange={props.handleStartDateChange} />
            </Form.Label>
        
            <Form.Label className="m-1" >
            End date of Trip: 
              <Form.Control type="date" onChange={props.handleEndDateChange} />
            </Form.Label>
          
            <Button className="m-1" variant="success" type="submit" onClick={props.handleTripAdd}>Add New Trip</Button>
            {removeTripButton}
          </Form.Group>
        </Form>
  )
}