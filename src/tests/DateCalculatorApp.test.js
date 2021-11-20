import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";

import DateCalculatorApp from "../components/dateCalculatorApp";

const RealDate = Date;

function mockDate(isoDate) {
  global.Date = class extends RealDate {
    constructor() {
      return new RealDate(isoDate);
    }
  };
}

afterEach(() => {
  global.Date = RealDate;
});

// jest test, more unit and component level testing
it("renders DateCalculator without crashing", () => {
  ReactDOM.render(<DateCalculatorApp />, document.createElement("div"));
});

//react testing library test (more int and e2e test)
it("renders calculator page with correct title", () => {
  render(<DateCalculatorApp />);
  const titleElement = screen.getByText("EU Travel Calculator");
  expect(titleElement).toBeInTheDocument();
});

it("renders calculator page with end of period date as today's date", () => {
  mockDate("2021-08-25T12:34:57z");
  render(<DateCalculatorApp />);
  const endOfTravelPeriodLabel = screen.getByTestId("period-end-date-label");
  expect(endOfTravelPeriodLabel).toHaveTextContent("8/25/2021");
});
