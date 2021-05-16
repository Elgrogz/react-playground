import React from 'react';

class Trip extends React.Component { 
  render() {
    let removeTripButton;
    if (!this.props.isFirstElement) {
      removeTripButton = <input type="submit" value="Remove Trip" onClick={this.props.onTripSubmit}/>;
    }

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
          {removeTripButton}
        </form>
      </div>
    )
  }
}

export default Trip;