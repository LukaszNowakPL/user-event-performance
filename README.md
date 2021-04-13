# User event performance

This is demo repo to check performance of testing-library/user-event versions 13.1.2 versus 12.1.8

The application is build on Create React App. It contains two simple form pages:

* Using raw html forms
* Using html forms wrapped by Material-ui

## Tests

Tests are based on Jest with testing-library. The `*.base.tsx` file exports function that fires up a test scenario:

* click on a checkbox
* click on a radio
* type into text field
* clear text field
* click on a button
 
The function consumes `userEvent` object. It is triggered by:

* `*-v12.test.tsx` file that passes `userEvent` from v. 12.1.8 package
* `*-v13.test.tsx` file that passes `userEvent` from v. 13.1.2 package

Thanks to this approach we know we execute same test code. The only difference is `userEvent` being used.

## Test statistics

Test            | Time of execution | Notes
---             | ---               | ---
MaterialUi-v12  | 502.8 ms          |
MaterialUi-v13  | 619 ms            | + 23.11% of time execution
RawHtml-v12     | 166.6 ms          |
RawHtml-v13     | 203.2 ms          | + 21.97% of time execution

## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.