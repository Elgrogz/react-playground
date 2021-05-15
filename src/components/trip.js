import React from 'react';

class Trip extends React.Component { 
  render() {
    return (
      <div>
        <form>
        <label>
            Start date of Trip: 
            <input type="date" 
              onChange={this.props.onStartDateChange} 
            />
          </label>
          <label>
            End date of Trip: 
            <input type="date" 
              onChange={this.props.onEndDateChange} 
            />
          </label>
          <input type="submit" value="Add New Trip" onClick={this.props.onTripSubmit}/>
        </form>
      </div>
    )
  }
}

export default Trip;