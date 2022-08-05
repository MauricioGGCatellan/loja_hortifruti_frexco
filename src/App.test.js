import { render, screen } from '@testing-library/react';
import ProductsPage from './ProductsPage';

test('renders learn react link', () => {
  render(<ProductsPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
