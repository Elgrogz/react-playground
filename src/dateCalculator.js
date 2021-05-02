import React from 'react';
// import logo from './logo.svg';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endOfPeriodDate: null,
      startOfPeriodDate: null,
      // new Date(new Date().setDate(new Date().getDate()-180))
    };

    this.showPeriodDates = this.showPeriodDates.bind(this)
  }

  handleChange = (event) => {
    // event.preventDefault();
    console.log(event.target.value)
    const date = event.target.value;
    this.setState({ 
      endOfPeriodDate: new Date(date),
      // startOfPeriodDate: new Date(date.setDate(new Date().getDate()-180))
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.endOfPeriodDate);
    this.setState({ 
      startOfPeriodDate: new Date(new Date().setDate(this.state.endOfPeriodDate.getDate()-180))
    });
  }

  showPeriodDates() {
    let endOfPeriodDate;
    if (this.state.endOfPeriodDate) {
      endOfPeriodDate = <div>
        <p>{ this.state.endOfPeriodDate.toLocaleDateString() }</p>
        <p>{ this.state.startOfPeriodDate ? this.state.startOfPeriodDate.toLocaleDateString() : "" }</p>
        </div>
    } else {
      endOfPeriodDate = null
    }
    return endOfPeriodDate;
  }

  render() {
   return (
    <div className="App">
      <header className="App-header">
        <a>
         {this.showPeriodDates()}
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