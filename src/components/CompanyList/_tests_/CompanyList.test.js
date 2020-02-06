import React from 'react';
import { render } from '@testing-library/react';
import CompanyList from '../CompanyList';

const mockCompanies = [
	{
		Abn: "00000000001",
		Name: "Company Name",
		State: "NSW"

	},
	{
		Abn: "00000000002",
		Name: "Company Name",
		State: "VIC"
	}
]

const setup = () => {
  const { getAllByText, getByText } = render(<CompanyList companies={mockCompanies}/>);
  return {
   	getAllByText,
   	getByText
  }
}

test('Company list shows correct number of results', () => {
	const { getAllByText } = setup();
	const companyNames = getAllByText(/Company Name/i);
	expect(companyNames.length).toBe(2);
});

test('Company list shows correct data', () => {
	const { getAllByText, getByText } = setup();
	expect(getAllByText(/Company Name/i).length).toBe(2);
	expect(getByText(/00000000001/i)).toBeInTheDocument();
	expect(getByText(/NSW/i)).toBeInTheDocument();
	expect(getByText(/00000000002/i)).toBeInTheDocument();
	expect(getByText(/VIC/i)).toBeInTheDocument();
});