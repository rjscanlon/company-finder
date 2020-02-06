import React from 'react';
import { render } from '@testing-library/react';
import CompanyDetails from '../CompanyDetails';

const mockCompany = {
	Abn: "00000000001",
	Name: "Company Name",
	State: "NSW",
	Postcode: "2000",
	AbnStatus: "Active",
	EntityTypeName: "Trading"
}

const setup = () => {
  const { getByText } = render(<CompanyDetails chosenCompany={mockCompany}/>);
  return {
   	getByText
  }
}

test('Company detail shows correct data', () => {
	const { getByText } = setup();
	expect(getByText(/Company Name/i)).toBeInTheDocument();
	expect(getByText(/00000000001/i)).toBeInTheDocument();
	expect(getByText(/NSW/i)).toBeInTheDocument();
	expect(getByText(/2000/i)).toBeInTheDocument();
	expect(getByText(/Active/i)).toBeInTheDocument();
	expect(getByText(/Trading/i)).toBeInTheDocument();
});