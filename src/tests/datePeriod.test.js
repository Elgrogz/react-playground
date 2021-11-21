import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";

import DatePeriodContainer from "../components/DatePeriodContainer";

let container = null;
let endOfPeriodDate = null;
let startOfPeriodDate = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  endOfPeriodDate = new Date();
  startOfPeriodDate = new Date();
});

it("renders calculator page with correct title", () => {
  render(
    <DatePeriodContainer
      endOfPeriodDate={endOfPeriodDate}
      startOfPeriodDate={startOfPeriodDate}
    />,
    container
  );
});
