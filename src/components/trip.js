import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Trip(props) { 
  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = <Button variant="warning" onClick={props.handleTripRemove}>Remove Trip</Button>;
  }
  
  return (
      <div>
        <Form>
          <Form.Group controlId="tripStartDate">
            <Form.Label>
              Start date of Trip: 
              <Form.Control type="date" onChange={props.handleStartDateChange} />
            </Form.Label>
        
            <Form.Label>
            End date of Trip: 
              <Form.Control type="date" onChange={props.handleEndDateChange} />
            </Form.Label>
          
            <Button variant="success" type="submit" onClick={props.handleTripAdd}>Add New Trip</Button>
            {removeTripButton}
          </Form.Group>
        </Form>
      </div>
  )
}