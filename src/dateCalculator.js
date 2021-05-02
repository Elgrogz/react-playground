import React from 'react';
// import logo from './logo.svg';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endOfPeriodDate: null,
      // startOfPeriodDate: new Date(new Date().setDate(new Date().getDate()-180)),
    };
  }

  handleChange = (event) => {
    // event.preventDefault();
    console.log(event.target.value)
    this.setState({ endOfPeriodDate: new Date(event.target.value) });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    alert("You are submitting " + this.state.endOfPeriodDate)
  }

  render() {

    let endOfPeriodDate;
    if (this.state.endOfPeriodDate) {
      endOfPeriodDate = <p>{ this.state.endOfPeriodDate.toLocaleDateString()}</p>
    } else {
      endOfPeriodDate = <p></p>
    }
   return (
    <div className="App">
      <header className="App-header">
        <a>
         {endOfPeriodDate}
        </a>

        <form onSubmit={this.handleSubmit}>
          <label>
            End of Period Date: 
            <input type="date" 
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}
}

export default DateCalculator;