## EU Travel Calculator

Hierarchy:
- DateCalculator
  - [ ] End of 180 period input date
  - [ ] Trip Inputs
  - [ ] Add another trip button
  - [ ] Remove trip button
  - [ ] Calculate Button
  - [ ] Result output

DateCalculator State:
  - [ ] End of 180 days date
  - [ ] Start of 180 days date
  - [ ] Array of trips
    - [ ] Trip start date
    - [ ] Trip end date
  - 

  TODOS

  - [ ] Have one add trip button?
  - [ ] tests - enzyme, jest, etc



-   lodash for array management (deleting arrays, updating specific elements of an array in an immutable way)
-   moment/date-fns for datetime handling
-   Elm - purely functional language to build reactive JS apps, similar to Redux

Here's how I might approach an app where you initially have one row with two date inputs, an "add new row" button, and when you change the date inputs the calculation changes automatically:  

-   The parent component handles all state
-   We keep track of a hash  **and**  a list for trips. The hash holds the data about the trips, the list specifies the ordering of the trips
-   The hash looks like e.g.  `{ "trip1": {start_date: A, end_date: B}, "trip2": {start_date: C, end_date: D}}`
-   i.e. it's a hash where the keys are the trip id and the values are a hash of start and end dates
-   The list looks like e.g.  `["trip1", "trip2"]`
-   i.e. it's the trip ids in a specific order
-   We have to generate trip ids to keep track of which trip we're changing (can use random strings)

That'd look something like:  

```
class MyComponent extends React.Component {  
  state = {  
    trips: {"initial": {start_date: undefined, end_date: undefined} }, // holds data for each trip  
    trip_ids: ["initial"], // determines ordering of trips  
  }  handleStartDateChange = (trip_id, date) => {  
    // update the start date of the trip corresponding to trip_id  
  }  handleEndDateChange = (trip_id, date) => {  
    // update the end date of the trip corresponding to trip_id  
  }  addNewRow = () => {  
    // push a new item to this.state.trip_ids with a random id  
    // add a blank trip to this.state.trips with that trip_id just generated  
  }  calculation = () => {  
    return 123 // some calculation involving this.state.trips  
  }  render() {  
    return (  
      <div>  
        {this.state.trip_ids.map((trip_id) => (  
          <Trip  
            startDate={this.state.trips[trip_id].startDate}  
            endDate={this.state.trips[trip_id].endDate}  
            onStartDateChange={(date) => this.handleStartDateChange(trip_id, date)}  
            onEndDateChange={(date) => this.handleEndDateChange(trip_id, date)}  
          />  
        ))}  
        <AddNewRowButton onClick={this.addNewRow} />  
        {this.calculation()}  
      </div>  
    )  
  }  
}
```

It's actually a bit trickier than I thought

also  `Trip`  now takes  `startDate`  and  `endDate`  making a it a fully  [controlled component](https://reactjs.org/docs/forms.html#controlled-components)

A JavaScript library for building user interfaces (11 kB)

[https://reactjs.org/docs/forms.html#controlled-components](https://reactjs.org/docs/forms.html#controlled-components "Forms – React")

The trickiness comes because we want to keep track of the order of trips - a common trick to do that is to split up the data into the attributes and the ordering (we do this in the Banking app)

a hash is easy to update, but it has no inherent ordering. an array has ordering but is tricky to update





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
