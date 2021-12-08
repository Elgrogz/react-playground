import { render, screen } from "@testing-library/react";

import DatePeriodContainer from "../components/DatePeriodContainer";

it("shows 'no date selected when no date prop is passed in", () => {
  render(<DatePeriodContainer />);
  const endOfTravelPeriodLabel = screen.getByTestId("period-end-date-label");
  expect(endOfTravelPeriodLabel).toHaveTextContent("Not yet selected");
});
