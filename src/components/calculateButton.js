import React from 'react';
import Button from 'react-bootstrap/Button';

export default function CalculateButton(props) { 
    return (
      <Button 
        className="submit-button" 
        variant="primary" 
        size="lg" 
        type="submit" 
        onClick={props.handleCalculation}>
          Can I be in the EU?
      </Button>
    )
}
