import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('Search Bar Renders label', () => {
  const { getByLabelText } = render(<SearchBar />);
  const labelElement = getByLabelText(/Search by company name or ABN/i);
  expect(labelElement).toBeInTheDocument();
});

test('Search Bar Renders input', () => {
  const { getByPlaceholderText  } = render(<SearchBar />);
  const labelElement = getByPlaceholderText (/Enter a company name or ABN/i);
  expect(labelElement).toBeInTheDocument();
});