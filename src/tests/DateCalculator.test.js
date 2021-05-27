import { render, screen } from '@testing-library/react';
import DateCalculator from '../components/dateCalculator';

test('renders calculator page', () => {
  render(<DateCalculator />);
  const titleElement = screen.getByText("EU Travel Calculator");
  expect(titleElement).toBeInTheDocument();
});
