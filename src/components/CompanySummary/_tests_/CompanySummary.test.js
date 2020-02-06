import React from 'react';
import { render } from '@testing-library/react';
import CompanySummary from '../CompanySummary';

const mockCompany = {
	Abn: "00000000001",
	Name: "Company Name",
	State: "NSW"
}

const setup = () => {
  const { getByText } = render(<CompanySummary company={mockCompany}/>);
  return {
   	getByText
  }
}

test('Company summary shows correct data', () => {
	const { getByText } = setup();
	expect(getByText(/Company Name/i)).toBeInTheDocument();
	expect(getByText(/00000000001/i)).toBeInTheDocument();
	expect(getByText(/NSW/i)).toBeInTheDocument();
});