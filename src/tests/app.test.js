import { cleanup, render, screen, fireEvent } from "@testing-library/react";
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

it("can add one trip", async () => {
  const user = userEvent.setup();

  await user.click(screen.getByText("Add New Trip"));

  const numberOfTrips = screen.getByTestId("trips-container").children.length;
  const removeButton = screen.getAllByText("Remove");

  expect(numberOfTrips).toBe(2);
  expect(removeButton.length).toBe(1);
});

it("can add multiple trips", async () => {
  const user = userEvent.setup();

  const addNewTripElement = screen.getByText("Add New Trip");
  await user.click(addNewTripElement);
  await user.click(addNewTripElement);
  await user.click(addNewTripElement);

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

it("can remove one trip", async () => {
  const user = userEvent.setup();

  const addNewTripElement = screen.getByText("Add New Trip");
  await user.click(addNewTripElement);
  await user.click(addNewTripElement);

  const lastRemoveButton = screen.getAllByText("Remove").slice(-1)[0];

  await userEvent.click(lastRemoveButton);

  const numberOfTrips = screen.getByTestId("trips-container").children.length;
  expect(numberOfTrips).toBe(2);
});

it("can calculate the date of 1 trip in the past 90 days", async () => {
  // const startDateInput = screen.getByTestId("trip-start-datepicker-0"); // change to screen.getElementByTestId when material UI is replaced
  // const endDateInput = screen.getByTestId("trip-end-datepicker-0"); // change to screen.getElementByTestId when material UI is replaced
  const user = userEvent.setup();

  fireEvent.change(screen.getByTestId("trip-start-datepicker-0"), {
    target: { value: "2021-08-01" },
  });
  fireEvent.change(screen.getByTestId("trip-end-datepicker-0"), {
    target: { value: "2021-08-08" },
  });

  await user.click(screen.getByText("Can I be in the EU?"));

  const resultElement = screen.getByText("Days spent in the EU:");
  expect(resultElement).toBeInTheDocument();
});
