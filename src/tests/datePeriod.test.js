import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";

import DatePeriodContainer from "../components/DatePeriodContainer";

// let container = null;
// let endOfPeriodDate = null;
// let startOfPeriodDate = null;

// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
//   endOfPeriodDate = new Date();
//   startOfPeriodDate = new Date();
// });

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

// it("renders calculator page with correct title", () => {
//   render(
//     <DatePeriodContainer
//       endOfPeriodDate={endOfPeriodDate}
//       startOfPeriodDate={startOfPeriodDate}
//     />,
//     container
//   );
// });

it("renders calculator page with end of period date as today's date", () => {
  mockDate("2021-08-25T12:34:57z");
  render(<DatePeriodContainer />);
  const endOfTravelPeriodLabel = screen.getByTestId("period-end-date-label");
  expect(endOfTravelPeriodLabel).toHaveTextContent("25/08/2021");
});
