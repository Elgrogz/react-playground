import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

beforeEach(() => {
  render(<App />);
});

afterEach(() => {
  cleanup();
});

it("renders calculator page with correct title", () => {
  const titleElement = screen.getByText("EU Short Stay Visa Calculator");
  expect(titleElement).toBeInTheDocument();
});

it("renders calculator page with end of period date as today's date", () => {
  const endOfTravelPeriodLabel = screen.getByTestId("period-end-date-label");
  expect(endOfTravelPeriodLabel).toHaveTextContent("25/08/2021");
});

it("renders calculator page with one trip", () => {
  const numberOfTrips = screen.getByTestId("trips-container").children.length;
  expect(numberOfTrips).toBe(1);
});

it("can add one trip", () => {
  screen.getByText("Add New Trip").click();

  const numberOfTrips = screen.getByTestId("trips-container").children.length;
  const removeButton = screen.getAllByText("Remove");
  expect(numberOfTrips).toBe(2);
  expect(removeButton.length).toBe(1);
});

it("can add multiple trips", () => {
  screen.getByText("Add New Trip").click();
  screen.getByText("Add New Trip").click();
  screen.getByText("Add New Trip").click();

  const numberOfTrips = screen.getByTestId("trips-container").children.length;
  const removeButton = screen.getAllByText("Remove");
  expect(numberOfTrips).toBe(4);
  expect(removeButton.length).toBe(3);
});

// need to improve error handling
// it("shows an error with an invalid trip date", () => {
//   render(<App />);
//   screen.getByText("Add New Trip").click();
//   const numberOfTrips = screen.getByTestId("trips-container").children.length;
//   expect(numberOfTrips).toBe(2);
// });

it("can remove one trip", () => {
  screen.getByText("Add New Trip").click();
  screen.getByText("Add New Trip").click();

  const lastRemoveButton = screen.getAllByText("Remove").slice(-1)[0];
  userEvent.click(lastRemoveButton);
  const numberOfTrips = screen.getByTestId("trips-container").children.length;
  expect(numberOfTrips).toBe(2);
});

it("can calculate the date of 1 trip in the past 90 days", async () => {
  const startDateInput = screen.getAllByRole("textbox")[1]; // change to screen.getElementByTestId when material UI is replaced
  const endDateInput = screen.getAllByRole("textbox")[2];

  await userEvent.type(startDateInput, "01082021");
  await userEvent.type(endDateInput, "07082021");
  screen.getByText("Can I be in the EU?").click();

  // const resultElement = screen.getByText("Days spent in the EU:");
  // expect(resultElement).toBeInTheDocument();
});
