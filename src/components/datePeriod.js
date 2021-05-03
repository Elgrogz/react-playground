import React from 'react';

class DatePeriod extends React.Component { 
  render() {
    return (
      <div>
        <p>End of 180 day travel period: { this.props.data.endOfPeriodDate ? this.props.data.endOfPeriodDate.toLocaleDateString() : "Not yet selected" }</p>
        <p>Start of 180 day travel period: { this.props.data.startOfPeriodDate ? this.props.data.startOfPeriodDate.toLocaleDateString() : "Not yet selected" }</p>
        <form onSubmit={this.props.submitHandler}>
          <label>
            End of Period Date: 
            <input type="date" 
              onChange={this.props.clickHandler} 
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default DatePeriod;