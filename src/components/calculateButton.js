import React from 'react';
import Button from 'react-bootstrap/Button';

export default function CalculateButton(props) { 
    return (
      <Button variant="primary" type="submit" onClick={props.handleCalculation}>Can I be in the EU?</Button>
    )
}