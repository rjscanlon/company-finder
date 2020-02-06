import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App shows search bar label', () => {
  const { getByLabelText } = render(<App />);
  const labelElement = getByLabelText(/Search by company name or ABN/i);
  expect(labelElement).toBeInTheDocument();
});

test('App shows search bar input', () => {
  const { getByPlaceholderText  } = render(<App />);
  const inputlElement = getByPlaceholderText (/Enter a company name or ABN/i);
  expect(inputlElement).toBeInTheDocument();
});
