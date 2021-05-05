import React from 'react';

class Trip extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {  
      startDate: null,
      endDate: null
    }
  }

  // handleStartDate = (event) => {
  //   const date = event.target.value;
  //   this.setState({ 
  //     startDate: new Date(date),
  //   });
  // }

  // handleEndDate = (event) => {
  //   const date = event.target.value;
  //   this.setState({ 
  //     endDate: new Date(date),
  //   });
  // }

  render() {
    return (
      <div>
        <form 
          // onSubmit={this.props.submitHandler(this.state)}
        >
        <label>
            Start date of Trip: 
            <input type="date" 
              onChange={this.onStartDateChange} 
            />
          </label>
          <label>
            End date of Trip: 
            <input type="date" 
              onChange={this.onEndDateChange} 
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Trip;