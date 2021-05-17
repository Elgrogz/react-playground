import React from 'react';

export default function DatePeriod(props) { 
    return (
      <div>
        <p>End of 180 day travel period: { props.data.endOfPeriodDate ? props.data.endOfPeriodDate.toLocaleDateString() : "Not yet selected" }</p>
        <p>Start of 180 day travel period: { props.data.startOfPeriodDate ? props.data.startOfPeriodDate.toLocaleDateString() : "Not yet selected" }</p>
        <form onSubmit={props.submitHandler}>
          <label>
            End of Period Date: 
            <input type="date" 
              onChange={props.clickHandler} 
            />
          </label>
        </form>
      </div>
    )
}