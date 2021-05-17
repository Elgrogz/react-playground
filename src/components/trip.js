import React from 'react';

export default function Trip(props) { 
  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = <button value="Remove Trip" onClick={props.handleTripRemove}>Remove Trip</button>;
  }
  
  return (
      <div>
        <form>
        <label>
            Start date of Trip: 
            <input type="date" 
              onChange={props.handleStartDateChange} 
            />
          </label>
          <label>
            End date of Trip: 
            <input type="date" 
              onChange={props.handleEndDateChange} 
            />
          </label>
          <input type="submit" value="Add New Trip" onClick={props.handleTripAdd}/>
          {removeTripButton}
        </form>
      </div>
  )
}