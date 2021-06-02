import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

import DateCalculator from '../components/dateCalculator';

// jest test, more unit and component level testing
it('renders DateCalculator without crashing', () => {
  ReactDOM.render(<DateCalculator />, document.createElement('div'));
});

//react testing library test (more int and e2e test)
it('renders calculator page with correct title', () => {
  render(<DateCalculator />);
  const titleElement = screen.getByText("EU Travel Calculator");
  expect(titleElement).toBeInTheDocument();
});
