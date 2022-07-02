import { render, screen } from "@testing-library/react";

import App from "../components/App";

const RealDate = Date;

const mockDate = (isoDate) => {
  global.Date = class extends RealDate {
    constructor() {
      return new RealDate(isoDate);
    }
  };
};

beforeAll(() => {
  mockDate("2021-08-25T12:34:57z");
});

it("renders calculator page with correct title", () => {
  render(<App />);
  const titleElement = screen.getByText("EU Short Stay Visa Calculator");
  expect(titleElement).toBeInTheDocument();
});

it("renders calculator page with end of period date as today's date", () => {
  render(<App />);
  const endOfTravelPeriodLabel = screen.getByTestId("period-end-date-label");
  expect(endOfTravelPeriodLabel).toHaveTextContent("25/08/2021");
});

it("renders calculator page with one trip", () => {
  render(<App />);
  const numberOfTrips = screen.getByTestId("trips-container").children.length;
  expect(numberOfTrips).toBe(1);
});

it("can add one trip", () => {
  render(<App />);
});
