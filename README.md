# Company Finder App

## Overview

This is a small react application that allows a user to search for a company either by company name or by ABN and then view details of the company. Company data is pulled from a 3rd party API [https://abr.business.gov.au/json/](https://abr.business.gov.au/json/).

## Running the application

First you will need to install dependencies. In the root folder run

### `npm install`

You can then launch the app by running

### `npm start`

This runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running unit tests

### `npm test`

This launches the test runner and runs a set of unit tests to check basic app functionality and elements.

## Implementation details and assumptions

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Some external libraries have been utilised:

[fetch-jsonp](https://github.com/camsong/fetch-jsonp) for JSONP calls to the 3rd party API

[awesome-debounce-promise](https://github.com/slorber/awesome-debounce-promise) to denbounce user input and search the API once the user has finished typing.

[react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) is used to display placeholder elements while data is being loaded from the API.

### Some decisions on what *not* to use include:

With no designs to follow and as a technical demonstartion styling has been kept minimal and is more in line a functional prototype than a production app.

State is being managed directly in a single higher order component rather than using Redux (or a simlar state management store) due to the relatively simple nature of the application.

Plain CSS is used rather than SCSS as the component based approach taken and amount of styling being done do not warrant the extra implementation.

No router has been used and and instead the application relies on conditional rendering due to the small number of views/states.

### Some Assumptions have been made:

ABN numbers are always 11 digit numbers.

ABN numbers are unique and not duplicated in the results of the service, and are therefore used as keys in list elements.




